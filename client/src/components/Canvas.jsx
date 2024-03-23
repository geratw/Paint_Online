import React, {useState, useEffect, useRef} from 'react';
import '../styles/canvas.scss';
import {observer} from "mobx-react-lite";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import Modal from "./Modal";
import {useParams} from "react-router-dom";

const Canvas = observer(() => {
    const usernameRef = useRef()
    const canvasRef = useRef()
    const [isModal, setModal] = useState(true)
    const params = useParams()



    useEffect(() => {
        canvasState.setCanvas(canvasRef.current)
        toolState.setTool(new Brush(canvasRef.current))
    }, [])

    useEffect(() => {
        if (canvasState.username) {
            const socket = new WebSocket('ws://localhost:5000/')
            socket.onopen = () => {
                console.log('eeee')
                socket.send(JSON.stringify({
                    id: params.id,
                    username: canvasState.username,
                    method: "connection"
                }))
            }
            socket.onmessage =  (event) => {
                console.log(event.data)
            }
        }
    }, [canvasState.username])


    const onClose = () => setModal(false)
    const mouseDownHandler = () => {
        canvasState.pushToUndo(canvasRef.current.toDataURL())
    }


    const handleSubmit = (username) => {
        canvasState.setUserName(username)
        setModal(false)
    };

    return (
        <div className="canvas">
            <button onClick={() => setModal(true)}>Клик-клик-клик</button>
            <Modal
                visible={isModal}
                title='Введите ваше имя'
                name={usernameRef}
                footer="Войти"
                onClose={onClose}
                onSubmit={handleSubmit}
            />
            <canvas ref={canvasRef} onMouseDown={() => mouseDownHandler()} width={600} height={400}></canvas>
        </div>
    );
});

export default Canvas;