import React from "react";
import './styles/app.scss'
import Toolbar from "./components/Toolbar";
import SettingBar from "./components/SettingBar";
import Canvas from "./components/Canvas";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <Toolbar/>
            <SettingBar/>
            <Canvas/>
        </div>
        </BrowserRouter>
    );
}

export default App;
