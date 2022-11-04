span = document.getElementById("ep1");
span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  {
    video.src =
      "https://firebasestorage.googleapis.com/v0/b/linen-creek-254220.appspot.com/o/Friends.the.Reunion.2021.720p.WEB-DL.akwam.io.mp4?alt=media&token=4f196019-cd86-40aa-b32d-8a7fb96d0d8f";
    video.play();
  }
  {
    episode.innerHTML = 1;
  }
};
