const startTime = Date.parse(new Date());

function calculateTime() {
  const checker = setInterval(function () {
    let timer = document.getElementById("time");
    if (timer) {
      timer.innerHTML = getTime();
      function getTime() {
        let currentTime = Date.parse(new Date());
        let liveTime = currentTime - startTime;
        return new Date(liveTime).toUTCString().substring(17, 25);
      }
    } else {
      clearInterval(checker);
    }
  }, 1000);
}
