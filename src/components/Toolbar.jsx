import React from 'react';
import '../styles/toolbar.scss'
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import canvas from "./Canvas";
import canvasState from "../store/canvasState";

const Toolbar = () => {
    return (
        <div className="toolbar">
            <button className="toolbar__btn brush" onClick={()=> toolState.setTool(new Brush(canvasState.canvas))}></button>
            <button className="toolbar__btn circle"></button>
            <button className="toolbar__btn eraser"></button>
            <button className="toolbar__btn line"></button>
            <button className="toolbar__btn rect"></button>
            <input type="color" style={{marginLeft:"10px"}} />
            <button className="toolbar__btn undo"></button>
            <button className="toolbar__btn save"></button>
            <button className="toolbar__btn redo"></button>

        </div>
    );
};

export default Toolbar;