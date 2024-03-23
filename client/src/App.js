import React from "react";
import './styles/app.scss'
import Toolbar from "./components/Toolbar";
import SettingBar from "./components/SettingBar";
import Canvas from "./components/Canvas";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Toolbar/>
                <SettingBar/>
                <Routes>
                    <Route path="/:id" element={<Canvas/>} />
                    <Route path="/" element={<Navigate replace to={`/${(+new Date).toString(16)}`} />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
