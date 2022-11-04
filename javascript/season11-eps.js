span = document.getElementById("ep1");
span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  {
    video.src =
      "https://archive.org/download/friends.the.-reunion.-2021.720p.-webrip.-800-mb.x-264-galaxy-rg/Friends.the.Reunion.2021.720p.WEBRip.800MB.x264-GalaxyRG.mkv";
    video.play();
  }
  {
    episode.innerHTML = 1;
  }
};
