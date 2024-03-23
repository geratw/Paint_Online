import React from 'react';
import '../styles/toolbar.scss'
import toolState from "../store/toolState";

const SettingBar = () => {
    return (
        <div className="settingBar">
            <label htmlFor="line-width">Толщина линии</label>
            <input
                onChange={e=> toolState.setLineWidth(e.target.value)}
                id="line-width"
                style={{width:"100px", marginLeft:"10px"}}
                type="number" min={1} max={50} defaultValue={1}  />
            <label htmlFor="stroke-color">Цвет обводки</label>
            <input
                onChange={e=> toolState.setStrokeColor(e.target.value)}
                id="stroke-color"
                style={{width:"100px", marginLeft:"10px"}}
                type="color"  />
        </div>
    );
};

export default SettingBar;