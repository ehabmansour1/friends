let video = document.getElementById("player");
let episode = document.getElementById("episode");

var div = document.getElementById("seasons");
let toglle = document.getElementById("openseasons");
function openseasons() {
  div.className = "open-menu";
}
function remove() {
  var div = document.getElementById("seasons");
  div.className = "remove";
}
// --------------------loader-----------------------
// let span = document.querySelector(".up");
// window.onscroll = function () {
//   this.scrollY >= 500
//     ? span.classList.add("show")
//     : span.classList.remove("show");
// };
// span.onclick = function () {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
// --------------------loader-----------------------
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
// butt.addEventListener("click", method1);
// butt.addEventListener("click", method2);
// function method2() {
//   fetch(
//     `https://api.telegram.org/bot5147974264:AAE0_410j8-zFS53sP7FSB23RcsM9lru8Eo/sendMessage?chat_id=@mememeeeeme&text=${
//       document.getElementById("telegram").value
//     }`
//   );
// }
// function method1() {
//   contact.className = "remove";
// }
// exit.onclick = function () {
//   contact.className = "remove";
// };
//download button =======================================================================
let download = document.querySelector(".save");
download.innerHTML = `<i class="fa-solid fa-download"></i>
<span>Download</span>`;
let downloadList = document.createElement("div");
downloadList.classList.add("download-list");
downloadList.innerHTML = `<span onclick="downloadEp()" class="download-episopde">Download Episode</span>
<span onclick="downloadAr()" class="download-ar">Ar Subtitle</span>
<span onclick="downloadEn()" class="download-en">En Subtitle</span>
<span onclick="downloadClose()" class="close"><i class="fa-solid fa-xmark"></i></span>`;
download.onclick = function () {
  document.querySelector(".player .links").appendChild(downloadList);
  downloadList.style.display = "flex";
};
let enCap = document.querySelector("[id='en']");
let arCap = document.querySelector("[id='ar']");

function downloadEp() {
  if (video.src === "") {
    alert("اختار الحلقة الاول");
  } else {
    window.location.href = video.src;
  }
}
function downloadAr() {
  window.location.href =
    "https://www.4shared.com/web/directDownload/8NlFumzhiq/2vEBSlaP.2ae05abb11eba9f0cb554100b106462a";
}
function downloadEn() {
  window.location.href =
    "https://www.4shared.com/web/directDownload/s0xYAd-4ea/2vEBSlaP.e45a9073903ed504c40c918bce123a8e";
}
function downloadClose() {
  downloadList.style.display = "none";
}
//image alt=====================================
let images = document.querySelectorAll("img");
images.forEach((img) => {
  let altText = img.getAttribute("src");
  let reg = /(\w|\W)+/gi;
  let finalAltText = altText.match(reg);

  img.setAttribute("alt", ...finalAltText);
});
