const video = document.getElementById('myVideo');

video.addEventListener('play', function() {
    requestFullScreen(video);
});

document.addEventListener('fullscreenchange', function() {
    if (!document.fullscreenElement) {
        video.addEventListener('touchstart', function expandAgain() {
            requestFullScreen(video);
            video.removeEventListener('touchstart', expandAgain);
        });
    }
});

function requestFullScreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { 
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { 
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { 
        element.msRequestFullscreen();
    }
}

window.addEventListener('focus', function() {
    if (!document.fullscreenElement) {
        requestFullScreen(video);
    }
});
window.addEventListener('pageshow', function() {
    if (!document.fullscreenElement) {
        requestFullScreen(video);
    }
});
