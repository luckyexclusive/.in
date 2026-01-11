let time = 1800; // 30 minutes

setInterval(() => {
  let m = Math.floor(time / 60);
  let s = time % 60;

  document.getElementById("timer").innerHTML =
    `00:${m < 10 ? '0'+m : m}:${s < 10 ? '0'+s : s}`;

  if(time > 0){
    time--;
  }
}, 1000);
