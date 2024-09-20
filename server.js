const net = require('net');

// 서버 생성
const server = net.createServer((socket) => {
    console.log('클라이언트 연결됨.');

    socket.on('data', (data) => {
        console.log('받은 데이터:', data.toString());

        socket.write('안녕하세요! TCP 서버에서 보낸 응답입니다.');
    });

    socket.on('end', () => {
        console.log('클라이언트 연결 종료.');
    });
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`서버가 포트 ${PORT}에서 대기 중입니다.`);
});