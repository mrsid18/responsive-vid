const vid = document.getElementById("bgVideo");
const source = document.getElementById("bgVideoSource");
const coverImg = document.getElementById("bgVideoCover");

const mediaQueries = [
  {
    query: "(min-width:1200px)",
    coverImg: "https://i.stack.imgur.com/6M513.png",
    videoSrc: "video.mp4",
  },
  {
    query: "(min-width:577px) and (max-width:1199px)",
    coverImg: "https://i.stack.imgur.com/6M513.png",
    videoSrc: "mobile.mp4",
  },
  {
    query: "(max-width:576px)",
    coverImg: "https://i.stack.imgur.com/6M513.png",
    videoSrc: "video.mp4",
  },
];

function changeSrc(src, cover) {
  source.setAttribute("src", src);
  coverImg.setAttribute("src", cover);
  vid.load();
  vid.play();
}

mediaQueries.forEach((mq) => {
  let mediaQuery = window.matchMedia(mq.query);
  mediaQuery.addEventListener("change", function (e) {
    if (e.matches) changeSrc(mq.videoSrc, mq.coverImg);
  });
  if (mediaQuery.matches) changeSrc(mq.videoSrc, mq.coverImg);
});
