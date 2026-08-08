

let track = document.querySelector(".track")
let songName = document.querySelector(".song-name")
let play = document.getElementById("play")
let mooseTape = document.getElementById("moosetape")
let cont3 = document.querySelector(".cont-3")
let loading = document.querySelector(".loading")

const songs = [
    { class: "song-1", file: "song1", name: "Levels"},
    { class: "song-2", file: "song2", name: "Devil"},
    { class: "song-3", file: "song3", name: "295"},
    { class: "song-4", file: "song4", name: "GOAT"},
    { class: "song-5", file: "song5", name: "Issa Jatt" }
];

const audio = new Audio();
audio.src = `/music/song1.mp3`;

songs.forEach((song) => {
    const btn = document.querySelector("." + song.class);

    btn.addEventListener("click", () => {

        songs.forEach((song) =>{
            const songBar = document.querySelector("." + song.class)
            songBar.style.backgroundColor = "#131313c7"
            btn.style.background = "#d41020e3"
        })

        audio.src = `./music/${song.file}.mp3`;
        audio.play();
        play.innerHTML = "Pause"

        songName.innerHTML = song.name
    });
});


play.onclick = ()=>{
    if (play.innerHTML === "Play") {
        audio.play()
        play.innerHTML = "Pause"
    }
    else { 
        audio.pause()
        play.innerHTML = "Play"
    }
}


mooseTape.onclick = ()=>{
    cont3.scrollIntoView({behavior: "smooth"});
}

window.onload = ()=>{
    loading.style.display = "none"
}
