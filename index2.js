// chat.js 파일에 추가
const socket = new WebSocket('ws://your-websocket-server.com');

socket.onopen = function() {
  console.log('웹소켓 연결 성공!');
};

socket.onmessage = function(event) {
  const data = JSON.parse(event.data);
  
  // 서버에서 현재 접속자 수 업데이트 받기
  if (data.type === 'userCount') {
    document.querySelector('.online-count').textContent = `현재 ${data.count}명 접속 중`;
  }
};

// 페이지 나갈 때 연결 종료
window.addEventListener('beforeunload', () => {
  socket.close();
});