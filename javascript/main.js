let video = document.getElementById("player");
let episode = document.getElementById("episode");

var div = document.getElementById("seasons");
let toglle = document.getElementById("openseasons");
function openseasons() {
  div.className = "open";
}
function remove() {
  var div = document.getElementById("seasons");
  div.className = "remove";
}

const countEl = document.getElementById("counter");
updateVisitCount();
function updateVisitCount() {
  fetch(
    "https://api.countapi.xyz/update/default/7eb1dfa4-0561-46e7-a66b-69a252e8a825/?amount=1"
  )
    .then((res) => res.json())
    .then((res) => {
      countEl.innerHTML = res.value;
    });
}
var search = document.getElementById("searchid");
let searchbutton = document.getElementById("searchButton");
function searchOpen() {
  search.className = "search-message-open";
}
function removeserarch() {
  search.className = "remove";
}
