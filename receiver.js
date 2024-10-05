const socket = new WebSocket('wss://cloud.achex.ca/i-i-f5-si-mailwss/musgebhhhh');

socket.addEventListener('open', () => {
    console.log("WebSocketに接続しました。");
});

socket.addEventListener('message', (event) => {
    const emailData = JSON.parse(event.data);
    displayEmailData(emailData);
});

socket.addEventListener('error', (error) => {
    console.error("WebSocketエラー:", error);
});

socket.addEventListener('close', () => {
    console.log("WebSocket接続が閉じました。");
});

function displayEmailData(data) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <h2>受信したメールデータ:</h2>
        <p><strong>メッセージ:</strong> ${data.message}</p>
        <p><strong>環境:</strong> ${data.env}</p>
        <p><strong>コンテキスト:</strong> ${data.ctx}</p>
    `;
}
