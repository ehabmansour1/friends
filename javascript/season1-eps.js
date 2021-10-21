span = document.getElementById("ep1");
span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  {
    video.src =
      "https://firebasestorage.googleapis.com/v0/b/linen-creek-254220.appspot.com/o/Friends.CimaRed.BluRay.720P.S01E%20%20(9).mp4?alt=media&token=6aba4af8-7bf4-45a3-851c-e9b66891e777";
    video.play();
  }
  {
    episode.innerHTML = 1;
  }
};
span = document.getElementById("ep2");
span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  {
    video.src =
      "https://firebasestorage.googleapis.com/v0/b/linen-creek-254220.appspot.com/o/Friends.CimaRed.BluRay.720P.S01E%20%20(2).mp4?alt=media&token=907aa1d5-ead3-4128-9e72-e8f9a6447e36";
    video.play();
  }
  {
    episode.innerHTML = 2;
  }
};
