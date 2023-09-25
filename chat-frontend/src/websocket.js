// src/websocket.js

export let send
let onMessageCallback

export const startWebsocketConnection = () => {
    const ws = new window.WebSocket('ws://' + window.location.host + '/chat') || {}

    ws.onopen = () => {
        console.log('opened ws connection')
    }

    ws.onclose = (e) => {
        console.log('close ws connection: ', e.code, e.reason)
    }

    // This callback is called everytime a message is received.
    ws.onmessage = (e) => {
        onMessageCallback && onMessageCallback(e.data)
    }

    send = ws.send.bind(ws)
}

export const registerOnMessageCallback = (fn) => {
    onMessageCallback = fn
}
