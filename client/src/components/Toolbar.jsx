import React from 'react';
import '../styles/toolbar.scss'
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import Rect from "../tools/Rect";
import canvasState from "../store/canvasState";
import Circle from "../tools/Circle";
import Line from "../tools/Line";
import Eraser from "../tools/Eraser";

const Toolbar = () => {
    const fillColor = (color) => {
       toolState.setFillColor(color)
    }


    return (
        <div className="toolbar">
            <button className="toolbar__btn brush" onClick={()=> toolState.setTool(new Brush(canvasState.canvas))}></button>
            <button className="toolbar__btn rect " onClick={()=> toolState.setTool(new Rect(canvasState.canvas))}></button>
            <button className="toolbar__btn circle" onClick={()=> toolState.setTool(new Circle(canvasState.canvas))}></button>
            <button className="toolbar__btn line" onClick={()=> toolState.setTool(new Line(canvasState.canvas))}></button>

            <button className="toolbar__btn eraser" onClick={()=> toolState.setTool(new Eraser(canvasState.canvas))}></button>
            <input
                onChange={e=> fillColor(e.target.value)}
                type="color"
                style={{marginLeft:"10px"}} />
            <button
                onClick={()=> canvasState.undo()}
                className="toolbar__btn undo"
            ></button>
            <button

                className="toolbar__btn save"></button>
            <button
                onClick={()=> canvasState.redo()}
                className="toolbar__btn redo"></button>

        </div>
    );
};

export default Toolbar;