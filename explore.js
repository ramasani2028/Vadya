
        let isPlaying = false;
        function playpauseTrack() {
            let icon = document.getElementById("ctrlicon");
            isPlaying = !isPlaying;
            icon.innerHTML = isPlaying 
                ? '<i class="fa fa-pause-circle fa-5x"></i>' 
                : '<i class="fa fa-play-circle fa-5x"></i>';
        }
const songs = [
    { title: 'Attention', artist: 'Charlie Puth', path: 'Charlie.mp3' },
    { title: 'Faded', artist: 'Alan Walker', path: 'Faded.mp3' },
    { title: 'Falling Down', artist: 'Lil Peep', path: 'fallingdown.mp3' },
    { title: 'Rather Be', artist: 'Clean Bendit', path: 'Rather Be.mp3' },
    { title: 'Stay', artist: 'Justin Bieber', path: 'stay.mp3' }
];

let currentSongIndex = 0;
let audio = new Audio(songs[currentSongIndex].path);

const playButton = document.getElementById('play');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const songTitleElement = document.getElementById('song-title');
const artistElement = document.getElementById('artist');

function updateSongDetails() {
    songTitleElement.innerText = songs[currentSongIndex].title;
    artistElement.innerText = songs[currentSongIndex].artist;
    audio.src = songs[currentSongIndex].path;
}

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playButton.innerHTML = 'Pause';
    } else {
        audio.pause();
        playButton.innerHTML = 'Play';
    }
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length; 
    updateSongDetails();
    audio.play();
    playButton.innerHTML = 'Pause';
}

function playPrevious() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; 
    updateSongDetails();
    audio.play();
    playButton.innerHTML = 'Pause';
}

playButton.addEventListener('click', togglePlay);
nextButton.addEventListener('click', playNext);
prevButton.addEventListener('click', playPrevious);

updateSongDetails();
