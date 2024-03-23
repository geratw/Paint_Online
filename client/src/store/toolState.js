import {makeAutoObservable} from "mobx";

class ToolState {
    tool = null
    constructor() {
        makeAutoObservable(this)
    }

    setTool(tool) {
        this.tool = tool
    }

    setFillColor(fillColor) {
        this.tool.fillColor = fillColor
    }

    setStrokeColor(strokeColor) {
        this.tool.strokeColor = strokeColor
    }

    setLineWidth(width) {
        this.tool.lineWidth = width
    }


}

export default new ToolState()