const vid = document.getElementById("bgVideo");
const source = document.getElementById("bgVideoSource");
const coverImg = document.getElementById("bgVideoCover");

function setDesktopVideo(e) {
    if (e.matches) changeSrc('video.mp4', 'https://i.stack.imgur.com/6M513.png')
}

function setMobileVideo(e) {
    if (e.matches) changeSrc('video.mp4', 'https://i.stack.imgur.com/6M513.png')
}

function setTabletVideo(e) {
    if (e.matches) changeSrc('mobile.mp4', 'https://i.stack.imgur.com/6M513.png')
}

function changeSrc(src, cover) {
    source.setAttribute('src', src);
    coverImg.setAttribute('src', cover);
    vid.load();
    vid.play();
}


const desktopDevice = window.matchMedia('(min-width:1200px)');
const mobileDevice = window.matchMedia('(max-width:576px)');
const tabletDevice = window.matchMedia('(min-width:577px) and (max-width:1199px)');

//add event listeners when width changes
desktopDevice.addEventListener('change', setDesktopVideo)
mobileDevice.addEventListener('change', setMobileVideo)
tabletDevice.addEventListener('change', setTabletVideo)

//initial device check
setDesktopVideo(desktopDevice)
setMobileVideo(mobileDevice)
setTabletVideo(tabletDevice)