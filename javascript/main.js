let span = document.getElementById("box");
let video = document.getElementById("player");
span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  {
    video.src =
      "https://ia601408.us.archive.org/26/items/s01e01_202110/s01e01.mp4";
    video.play();
  }
};
var div = document.getElementById("seasons");
let toglle = document.getElementById("openseasons");
function openseasons() {
  div.className = "open";
}
function remove() {
  var div = document.getElementById("seasons");
  div.className = "remove";
}
