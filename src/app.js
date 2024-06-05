let player;
let delayDisplay = document.getElementById("delay");
let startTime;

// 유튜브 API가 로드된 후 호출되는 함수
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "1200",
    width: "300",
    videoId: "CFIW0rgYF3Q", // 여기에 유튜브 비디오 ID를 입력합니다.
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// 플레이어가 준비되었을 때 호출되는 함수
function onPlayerReady(event) {
  startTime = Date.now();
  event.target.playVideo();
}

// 플레이어 상태가 변경되었을 때 호출되는 함수
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    // 재생 중일 때 지연 시간을 계산하고 표시합니다.
    setInterval(updateDelay, 1000); // 1초마다 지연 시간을 업데이트합니다.
  }
}

// 지연 시간을 업데이트하는 함수
function updateDelay() {
  const currentTime = player.getCurrentTime() * 1000; // 현재 재생 시간을 밀리초로 변환합니다.
  const delay = Date.now() - (startTime + currentTime);
  delayDisplay.innerText = `Delay: ${delay.toFixed(2)} ms`;
}
