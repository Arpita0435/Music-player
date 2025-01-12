const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');

let songIndex = 0;

const songs = [
  { title: "Song 1", artist: "Artist 1", src: "assets/songs/song1.mp3" },
  { title: "Song 2", artist: "Artist 2", src: "assets/songs/song2.mp3" }
];

function loadSong(song) {
  audio.src = song.src;
  document.getElementById('title').textContent = song.title;
  document.getElementById('artist').textContent = song.artist;
}

function playSong() {
  audio.play();
  playBtn.textContent = '⏸️';
}

function pauseSong() {
  audio.pause();
  playBtn.textContent = '▶️';
}

playBtn.addEventListener('click', () => {
  if (audio.paused) playSong();
  else pauseSong();
});

prevBtn.addEventListener('click', () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
});

nextBtn.addEventListener('click', () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
});

volume.addEventListener('input', (e) => {
  audio.volume = e.target.value;
});

audio.addEventListener('timeupdate', () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener('input', (e) => {
  audio.currentTime = (e.target.value / 100) * audio.duration;
});

loadSong(songs[songIndex]);
