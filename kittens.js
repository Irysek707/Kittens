//Game music
function play() {
    var audio = document.getElementById("audio");
    audio.play();
    audio.loop = true;
    audio.volume = 0.1
    
    var element = document.getElementById("game");
    element.classList.remove("hidden");

    var element = document.getElementById("stop");
    element.classList.remove("hidden");

    var element = document.getElementById("button");
    element.classList.add("hidden");

    var element = document.getElementById("play");
    element.classList.add("hidden");
}

function stop() {
    var audio = document.getElementById("audio");
    audio.pause();

    var element = document.getElementById("play");
    element.classList.remove("hidden");

    var element = document.getElementById("stop");
    element.classList.add("hidden");
}
