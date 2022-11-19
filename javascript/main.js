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
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
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
  // window.location.href = `https://archive.org/download/${hashDownload}20%28${episode.innerHTML}%29.mkv`;
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
});
//episodes load=====================================
let req = new XMLHttpRequest();
let nameFromRequest;
req.open("Get", "assets/data.json");
req.send();
req.addEventListener("load", function () {
  console.log(JSON.parse(req.responseText).tvShow.episodes);
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
    episodes.innerHTML = "";
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
          // video.src = `https://s3.tebi.io/friends${hashVideo}/s${season}/s${season}%20%28${
          //   i + 1
          // }%29.mp4`;
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
  shuffle.onclick = function () {
    let rnd = Math.floor(Math.random() * epLength + 1);
    console.log(rnd);
    {
      // video.src = `https://s3.tebi.io/friends${hashVideo}/s${season}/s${season}%20%28${rnd}%29.mp4`;
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
});
// chat===================================================
var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/6369d269daff0e1306d6427f/1ghalrrh4";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();
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
