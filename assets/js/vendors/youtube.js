let apiKey = "AIzaSyBDE4OwtZzeVDSxo-jL5hJ7FYXwHRzliZM";
let player;

let youTubeVideos = document.getElementsByClassName('img-responsive');

(function initializeAPIScript() {
    var tag = document.createElement('script');
    tag.id = 'iframe-demo';
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
})();

function extractYouTubeVideoID(clickedItem) {
    let youTubeVideoID = clickedItem.parentNode.getAttribute('id');
    onYouTubeIframeAPIReady(youTubeVideoID);
}

function onYouTubeIframeAPIReady(videoID) {
    player = new YT.Player(videoID, {
        height: '360',
        width: '720',
        videoId: videoID,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange 
        }
    });
}

function onPlayerReady(event) {
    console.log("Spreman je!");
}

function onPlayerStateChange(event) {
    checkTheImageClick();
    console.log("Promijenilo se stanje.")
}