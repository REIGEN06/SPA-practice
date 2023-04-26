let startTime = Date.parse(new Date());
localStorage.setItem("startTime", startTime);

let checker = setInterval(function () {
  let timer = document.getElementById("time");
  if (timer) {
    timer.innerHTML = getTime();

    function getTime() {
      let currentTime = Date.parse(new Date());
      let liveTime = currentTime - startTime;
      console.log(liveTime);

      return [
        (liveTime % 86400000) / 3600000,
        (liveTime % 3600000) / 60000,
        (liveTime % 60000) / 1000,
      ]
        .map((value) => Math.round(value).toString().padStart(2, "0"))
        .join(":");
    }
  }
}, 1000);
