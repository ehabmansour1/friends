if (document.querySelector('[alt="https://iplogger.org/1kAMu7.gif"]')) {
  document.querySelector(
    '[alt="https://iplogger.org/1kAMu7.gif"]'
  ).style.display = "none";
}
//support ====================================================
document.body.insertAdjacentHTML(
  "beforeend",
  `<div class="support-button">
<img src="images/support.png" alt="support" />
</div>
<div class="support-window hide">
<div class="message hide">Sent!</div>
<textarea class="problem" placeholder="Problem"></textarea>
<input type="text" class="number" placeholder="Whatsapp Number" />
<button class="send-to-telegram">SEND</button>
</div>`
);
let supportButton = document.querySelector(".support-button");
let supportWindow = document.querySelector(".support-window");
let supportSendButton = document.querySelector(".send-to-telegram");
let problem = document.querySelector(".problem");
let number = document.querySelector(".number");
let message = document.querySelector(".message");
supportButton.addEventListener("click", function () {
  supportWindow.classList.toggle("hide");
});
supportSendButton.addEventListener("click", function () {
  if (problem.value !== "" && number.value !== "") {
    let req = new XMLHttpRequest();
    req.open(
      "get",
      `https://api.telegram.org/bot5147974264:AAE0_410j8-zFS53sP7FSB23RcsM9lru8Eo/sendMessage?chat_id=@ddjhddhdjjdjr&text=${problem.value}-${number.value}`
    );
    req.send();
    message.innerHTML = "SENT!";
    message.classList.remove("hide");
    setTimeout(() => {
      message.classList.add("hide");
    }, 2000);
  } else {
    message.innerHTML = "Please Complete The fields!";
    message.classList.remove("hide");
    setTimeout(() => {
      message.classList.add("hide");
    }, 2000);
  }
});
//player===============================================
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
//loader=============================================
var my_awesome_script = document.createElement("script");
my_awesome_script.setAttribute("src", "//cdn.jsdelivr.net/npm/sweetalert2@11");
document.head.appendChild(my_awesome_script);

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
  if (
    localStorage.getItem("redFlag") === null ||
    localStorage.getItem("redFlag") === false
  ) {
    Swal.fire("", "Please skip the inappropriate scenes", "success");
    localStorage.setItem("redFlag", true);
  }
});
//counter=============================================
const countEl = document.getElementById("counter");
if (countEl) {
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
}
//download button =======================================================================
let download = document.querySelector(".save");
if (download) {
  download.innerHTML = `<i class="fa-solid fa-download"></i>
<span>Download</span>`;
}
let downloadList = document.createElement("div");
downloadList.classList.add("download-list");
downloadList.innerHTML = `<span onclick="downloadEp()" class="download-episopde">Download Episode</span>
<span onclick="downloadAr()" class="download-ar">Ar Subtitle</span>
<span onclick="downloadEn()" class="download-en">En Subtitle</span>
<span onclick="downloadClose()" class="close"><i class="fa-solid fa-xmark"></i></span>`;
if (download) {
  download.onclick = function () {
    document.querySelector(".player .links").appendChild(downloadList);
    downloadList.style.display = "flex";
  };
}
let enCap = document.querySelector("[id='en']");
let arCap = document.querySelector("[id='ar']");
let hashDownload;
function downloadEp() {
  switch (season) {
    case "1":
      hashDownload = "s-01-16/s01%";
      break;
    case "2":
      hashDownload = "s-02-6/s02%";
      break;
    case "3":
      hashDownload = "s-03-9/s03%";
      break;
    case "4":
      hashDownload = "s-04-3/s04%";
      break;
    case "5":
      hashDownload = "s-05-20/s05%";
      break;
    case "6":
      hashDownload = "s-06-11/s06%";
      break;
    case "7":
      hashDownload = "s-07-16/s07%";
      break;
    case "8":
      hashDownload = "s-08-23/s08%";
      break;
    case "9":
      hashDownload = "s-09-23/s09%";
      break;
    case "10":
      hashDownload = "s-10-17/s10%";
      break;
  }
  window.location.href = `https://archive.org/download/${hashDownload}20%28${episode.innerHTML}%29.mkv`;
}
function downloadAr() {
  window.location.href =
    "https://archive.org/download/20221104_20221104_1101/%D8%A7%D9%84%D8%AA%D8%B1%D8%AC%D9%85%D8%A9%20%D8%B9%D8%B1%D8%A8%D9%8A%20-%20%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D9%85%20%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC%20%D9%81%D9%83%20%D8%A7%D9%84%D8%B6%D8%BA%D8%B7.rar";
}
function downloadEn() {
  window.location.href =
    "https://archive.org/download/20221104_1078/%D8%A7%D9%84%D8%AA%D8%B1%D8%AC%D9%85%D8%A9%20%D8%A7%D9%86%D8%AC%D9%84%D8%B4%20-%20%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D9%85%20%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC%20%D9%81%D9%83%20%D8%A7%D9%84%D8%B6%D8%BA%D8%B7.rar";
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
  img.setAttribute("loading", "lazy");
});
//episodes load=====================================
let req = new XMLHttpRequest();
let nameFromRequest;
let theResposeObj;
req.open("Get", "assets/data.json");
req.send();
req.addEventListener("load", function () {
  theResposeObj = JSON.parse(req.responseText).tvShow.episodes;
  nameFromRequest = JSON.parse(req.responseText).tvShow.episodes;
});
let season = document.body.id;
let episodes = document.querySelector(".list");
let start;
let end;
let hashVideo;
let hashThumb;
let epLength;
function epiName(s) {
  switch (season) {
    case "1":
      start = 0;
      end = 23;
      hashVideo = "";
      hashThumb = "s-01-16/s-01-16.thumbs/s01%20%28";
      break;
    case "2":
      start = 24;
      end = 47;
      hashVideo = "";
      hashThumb = "s-02-6/s-02-6.thumbs/s02%20%28";
      break;
    case "3":
      start = 48;
      end = 72;
      hashVideo = "2";
      hashThumb = "s-03-9/s-03-9.thumbs/s03%20%28";
      break;
    case "4":
      start = 73;
      end = 96;
      hashVideo = "2";
      hashThumb = "s-04-3/s-04-3.thumbs/s04%20%28";
      break;
    case "5":
      start = 97;
      end = 120;
      hashVideo = "3";
      hashThumb = "s-05-20/s-05-20.thumbs/s05%20%28";
      break;
    case "6":
      start = 121;
      end = 145;
      hashVideo = "3";
      hashThumb = "s-06-11/s-06-11.thumbs/s06%20%28";
      break;
    case "7":
      start = 146;
      end = 169;
      hashVideo = "4";
      hashThumb = "s-07-16/s-07-16.thumbs/s07%20%28";
      break;
    case "8":
      start = 170;
      end = 193;
      hashVideo = "4";
      hashThumb = "s-08-23/s-08-23.thumbs/s08%20%28";
      break;
    case "9":
      start = 194;
      end = 216;
      hashVideo = "5";
      hashThumb = "s-09-23/s-09-23.thumbs/s09%20%28";
      break;
    case "10":
      start = 218;
      end = 234;
      hashVideo = "5";
      hashThumb = "s-10-17/s-10-17.thumbs/s10%20%28";
      break;
  }
  if (season !== "reunion") {
    if (episodes) {
      episodes.innerHTML = "";
    }
  }
  epLength = end - start + 1;
  for (let i = 0; i < epLength; i++) {
    episodes.innerHTML += `<div onclick="myFunction()" class="box" id="ep${
      i + 1
    }">
    <div class="image-holder">
      <img src="images/thumbs/s (${season})/s${season} (${
      i + 1
    }).webp" alt="s${season} e${i + 1}">
    </div>
    <div class="label">
      <p class="episode">Episode ${i + 1}</p>
      <p>${nameFromRequest[start].name}</p>
      <p class="season">Season ${season}</p>
    </div>
  </div>`;
    start++;
  }
}
//clisck events=====================================
let title = document.querySelector(".title");
req.addEventListener("load", function () {
  epiName(season);
  let epis = document.querySelectorAll(".list > div");
  epis.forEach((epi, i) => {
    epi.addEventListener("click", function () {
      console.log(i + 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      if (season !== "reunion") {
        {
          video.src = `https://s3.tebi.io/friends${hashVideo}/s${season}/s${season}%20%28${
            i + 1
          }%29.mp4`;
          video.play();
        }
      }
      {
        title.innerHTML = `<p class="title">
        Friends Season ${season} Episode <span id="episode">${i + 1}</span>
        </p>`;
        title.innerHTML += `<span  style="font-size: 18px;
        color: #ffc456;">${
          document.querySelector(`#ep${i + 1} > div.label > p:nth-child(2)`)
            .innerHTML
        }</span>`;
      }
      episode = document.getElementById("episode");
      if (season === "10") {
        document.getElementById(
          "en"
        ).src = `assets/s${season} en/s${season} (${episode.innerHTML}).vtt`;
        document.getElementById(
          "ar"
        ).src = `assets/s${season} ar/s${season} (${episode.innerHTML}).vtt`;
      } else {
        document.getElementById(
          "en"
        ).src = `assets/s0${season} en/s0${season} (${episode.innerHTML}).vtt`;
        document.getElementById(
          "ar"
        ).src = `assets/s0${season} ar/s0${season} (${episode.innerHTML}).vtt`;
      }
    });
  });
  // ---------------------random---------------------

  let shuffle = document.querySelector(".shuffle");
  if (shuffle) {
    shuffle.onclick = function () {
      let rnd = Math.floor(Math.random() * epLength + 1);
      console.log(rnd);
      {
        video.src = `https://s3.tebi.io/friends${hashVideo}/s${season}/s${season}%20%28${rnd}%29.mp4`;
        video.play();
      }
      {
        title.innerHTML = `<p class="title">
        Friends Season ${season} Episode <span id="episode">${rnd}</span>
        </p>`;
        title.innerHTML += `<span  style="font-size: 18px;
        color: wheat;">${
          document.querySelector(`#ep${rnd} > div.label > p:nth-child(2)`)
            .innerHTML
        }</span>`;
      }
      episode = document.getElementById("episode");
      if (season === "10") {
        document.getElementById(
          "en"
        ).src = `assets/s${season} en/s${season} (${episode.innerHTML}).vtt`;
        document.getElementById(
          "ar"
        ).src = `assets/s${season} ar/s${season} (${episode.innerHTML}).vtt`;
      } else {
        document.getElementById(
          "en"
        ).src = `assets/s0${season} en/s0${season} (${episode.innerHTML}).vtt`;
        document.getElementById(
          "ar"
        ).src = `assets/s0${season} ar/s0${season} (${episode.innerHTML}).vtt`;
      }
    };
  }
});
// // chat===================================================
// var Tawk_API = Tawk_API || {},
//   Tawk_LoadStart = new Date();
// (function () {
//   var s1 = document.createElement("script"),
//     s0 = document.getElementsByTagName("script")[0];
//   s1.async = true;
//   s1.src = "https://embed.tawk.to/6369d269daff0e1306d6427f/1ghalrrh4";
//   s1.charset = "UTF-8";
//   s1.setAttribute("crossorigin", "*");
//   s0.parentNode.insertBefore(s1, s0);
// })();
//search================================================
let searchIconHeader = document.querySelector(".search-icon-header");
let exitSearchButton = document.querySelector(".exit-search-button");
let searchWindow = document.querySelector(".search-window");
let searchButton = document.querySelector(".search-button");
let searchInput = document.querySelector(".search-input");
let resultDiv = document.querySelector(".result");
let hashDownloadForSearch;
let episodesArr = [];
let resultArr = [];
searchIconHeader.addEventListener("click", function () {
  searchWindow.classList.toggle("hide");
});
exitSearchButton.addEventListener("click", function () {
  searchWindow.classList.add("hide");
});
req.addEventListener("load", function () {
  for (let i = 0; i < 236; i++) {
    episodesArr.push(JSON.parse(req.responseText).tvShow.episodes[i].name);
  }
});
searchButton.addEventListener("click", function () {
  resultDiv.innerHTML = "";
  resultArr = searchInArray(searchInput.value, episodesArr);
  if (resultArr.length == 0) {
    resultDiv.innerHTML = `<h2>Nothing Found</h2>`;
  }
  for (let i = 0; i < resultArr.length; i++) {
    resultIndex = episodesArr.indexOf(resultArr[i]);
    resultDiv.innerHTML += `<div onclick="playFromSearch(this)" name='${theResposeObj[resultIndex].name}' ep='${theResposeObj[resultIndex].episode}' season='${theResposeObj[resultIndex].season}' class="box search-box" id="ep${theResposeObj[resultIndex].episode}">
    <div class="image-holder">
      <img src="images/thumbs/s (${theResposeObj[resultIndex].season})/s${theResposeObj[resultIndex].season} (${theResposeObj[resultIndex].episode}).webp" alt="s${theResposeObj[resultIndex].season} e${theResposeObj[resultIndex].episode}">
    </div>
    <div class="label">
      <p class="episode">Episode ${theResposeObj[resultIndex].episode}</p>
      <p>${theResposeObj[resultIndex].name}</p>
      <p class="season">Season ${theResposeObj[resultIndex].season}</p>
    </div>
  </div>`;
  }
});
let headline = document.querySelector(".headline");
function playFromSearch(e) {
  let hashDownload;
  switch (e.getAttribute("season")) {
    case "1":
      hashDownload = "s-01-16/s01%";
      break;
    case "2":
      hashDownload = "s-02-6/s02%";
      break;
    case "3":
      hashDownload = "s-03-9/s03%";
      break;
    case "4":
      hashDownload = "s-04-3/s04%";
      break;
    case "5":
      hashDownload = "s-05-20/s05%";
      break;
    case "6":
      hashDownload = "s-06-11/s06%";
      break;
    case "7":
      hashDownload = "s-07-16/s07%";
      break;
    case "8":
      hashDownload = "s-08-23/s08%";
      break;
    case "9":
      hashDownload = "s-09-23/s09%";
      break;
    case "10":
      hashDownload = "s-10-17/s10%";
      break;
  }
  searchWindow.classList.add("hide");
  if (headline) {
    headline.style.display = "none";
  }
  document.querySelector(
    ".main"
  ).innerHTML = `<div class="container" style='display: block;
  margin: 20px auto;'>
  <div class="player" style='height: 110vh;'>
    <video id="player" playsinline="" controls="">
      <source src="">
      <!-- Captions are optional -->
      <track id="en" kind="captions" label="English captions" src="" srclang="en">
      <track id="ar" kind="captions" label="Arabic captions" src="" srclang="ar" default="">
    </video>
    <p class="title">
      Friends Season ${e.getAttribute(
        "season"
      )} Episode <span id="episode">${e.getAttribute("ep")}</span>
      <span style="font-size: 18px;display: block;
        color: #ffc456;">${e.getAttribute("name")}</span>
    </p>
    <div class="counter">
      <p id="counter">66315</p>
      <p>Views . Oct 25, 2021</p>
    </div>
    <div class="links">
      <div class="like">
        <i class="fa-solid fa-heart"></i>
        <span>1.1k</span>
      </div>
      <div class="dislike">
        <i class="fal fa-thumbs-down" aria-hidden="true"></i>
        <span>1</span>
      </div>
      <div class="save"><i class="fa-solid fa-download"></i>
      <span>Download</span></div>
      <i class="fal fa-ellipsis-h" aria-hidden="true"></i>
      <div class="download-list" style="display: flex;"><a href='https://archive.org/download/${hashDownload}20%28${e.getAttribute(
    "ep"
  )}%29.mkv' class="download-episopde">Download Episode</a>
      <span onclick="downloadAr()" class="download-ar">Ar Subtitle</span>
      <span onclick="downloadEn()" class="download-en">En Subtitle</span>
      <span onclick="downloadClose()" class="close"><i class="fa-solid fa-xmark"></i></span></div>
    </div>
    
    <div class="channel">
      <div class="col-1">
        <img src="images/profile.jpg" alt="images/profile.jpg">
        <div class="text">
          <h1>Friends Arab Lovers</h1>
          <p>100K subscribers</p>
        </div>
      </div>
      <div class="col-2">
        <button>Subscribe</button>
        <i class="far fa-bell" aria-hidden="true"></i>
      </div>
    </div>
    <div class="description">
      <p>All Credits To Friends Arab Lovers Page</p>
      <div class="social">
        <a href="https://www.facebook.com/friendsarabslovers"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
        <a href="http://t.me/friendsarablovers"><i class="fab fa-telegram-plane" aria-hidden="true"></i></a>
      </div>
    </div>
  </div>
</div>`;
  switch (e.getAttribute("season")) {
    case "1":
      hashVideo = "";
      break;
    case "2":
      hashVideo = "";
      break;
    case "3":
      hashVideo = "2";
      break;
    case "4":
      hashVideo = "2";
      break;
    case "5":
      hashVideo = "3";
      break;
    case "6":
      hashVideo = "3";
      break;
    case "7":
      hashVideo = "4";
      break;
    case "8":
      hashVideo = "4";
      break;
    case "9":
      hashVideo = "5";
      break;
    case "10":
      hashVideo = "5";
      break;
  }
  video = document.querySelector("#player");
  video.src = `https://s3.tebi.io/friends${hashVideo}/s${e.getAttribute(
    "season"
  )}/s${e.getAttribute("season")}%20%28${e.getAttribute("ep")}%29.mp4`;
  video.play();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  if (e.getAttribute("season") === "10") {
    document.getElementById("en").src = `assets/s${e.getAttribute(
      "season"
    )} en/s${e.getAttribute("season")} (${e.getAttribute("ep")}).vtt`;
    document.getElementById("ar").src = `assets/s${e.getAttribute(
      "season"
    )} ar/s${e.getAttribute("season")} (${e.getAttribute("ep")}).vtt`;
  } else {
    document.getElementById("en").src = `assets/s0${e.getAttribute(
      "season"
    )} en/s0${e.getAttribute("season")} (${e.getAttribute("ep")}).vtt`;
    document.getElementById("ar").src = `assets/s0${e.getAttribute(
      "season"
    )} ar/s0${e.getAttribute("season")} (${e.getAttribute("ep")}).vtt`;
  }
  player = new Plyr("#player", { controls });
}

// let searchInArray = (searchQuery, array, objectKey = null) => {
//   return array.filter((d) => {
//     let data = objectKey ? d[objectKey] : d; //Incase If It's Array Of Objects.
//     let dataWords =
//       typeof data == "string" &&
//       data
//         ?.split(" ")
//         ?.map((b) => b && b.toLowerCase().trim())
//         .filter((b) => b);
//     let searchWords =
//       typeof searchQuery == "string" &&
//       searchQuery
//         ?.split(" ")
//         .map((b) => b && b.toLowerCase().trim())
//         .filter((b) => b);
//     let matchingWords = searchWords.filter((word) => dataWords.includes(word));
//     return matchingWords.length;
//   });
// };
let searchInArray = (query, array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i].indexOf(query) !== -1 ||
      array[i].indexOf(query.charAt(0).toUpperCase() + query.slice(1)) !== -1
    ) {
      result.push(array[i]);
    }
  }
  return result;
};
//player initialization =====================================
var controls = [
  "play-large", // Play/pause playback
  "rewind", // Rewind by the seek time (default 10 seconds)
  "play", // Play/pause playback
  "fast-forward", // Fast forward by the seek time (default 10 seconds)
  "progress", // The progress bar and scrubber for playback and buffering
  "current-time", // The current time of playback
  "mute", // Toggle mute
  "volume", // Volume control
  "settings", // Settings menu
  "fullscreen", // Toggle fullscreen
];
const player = new Plyr("#player", { controls });
