span = document.getElementById("ep1");
span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  {
    video.src =
      "https://www.4shared.com/web/directDownload/Ut-E-TPJiq/2vEBSlaP.29fdac750c31bfa11197c18256dec642";
    video.play();
  }
  {
    episode.innerHTML = 1;
  }
};
// ---------------------random---------------------

let shuffle = document.querySelector(".shuffle");
shuffle.onclick = function () {
  let rnd = Math.floor(Math.random() * 24 + 1);
  console.log(rnd);
  span = document.getElementById(`ep${rnd}`);
  span.onclick();
};
