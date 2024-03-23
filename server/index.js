const express = require('express')
const app = express()
const WSServer = require('express-ws')(app)
const aWss = WSServer.getWss()
const PORT = process.env.PORT || 5000

app.ws('/', (ws, req) => {
    ws.on('message', (msg) => {
        const message = JSON.parse(msg);
        switch (message.method) {
            case "connection" :
                connectionHandler(ws, message)
                break
            case "draw" :
                broadcastConnection(ws, message)
                break
            default:
                console.log("hyi")
        }
    })

});

app.listen(PORT, () => console.log(`тут ${PORT}`))


const connectionHandler = (ws, msg) => {
    ws.id = msg.id
    broadcastConnection(ws, msg);
}

const broadcastConnection = (ws, msg) => {
    aWss.clients.forEach(client => {
        if (client.id === msg.id) {
            client.send(JSON.stringify(msg))
        }
    })
}