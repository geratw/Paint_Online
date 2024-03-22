import React from 'react';
import '../styles/toolbar.scss'

const Toolbar = () => {
    return (
        <div className="toolbar">
            <button className="toolbar__btn brush"></button>
            <button className="toolbar__btn circle"></button>
            <button className="toolbar__btn eraser"></button>
            <button className="toolbar__btn line"></button>
            <button className="toolbar__btn rect"></button>
            <input type="color"/>
            <button className="toolbar__btn undo"></button>
            <button className="toolbar__btn save"></button>
            <button className="toolbar__btn redo"></button>

        </div>
    );
};

export default Toolbar;