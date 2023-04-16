let audio = document.createElement("audio");
let playBtn = document.querySelector(".playpause-track");
let nextBtn = document.querySelector(".next-track");
let prevBtn = document.querySelector(".prev-track");
let songTitle = document.querySelector("#song-title");
let songArtist = document.querySelector("#song-artist");
let songImage = document.querySelector(".image-side");
let songVolume = document.querySelector(".volume_slider");
let repeatBtn = document.querySelector(".repeat-track");
let randomBtn = document.querySelector(".random-track");
let seek_slider = document.querySelector(".seek_slider");
let volumeDownBtn = document.querySelector(".fa-volume-down");
let volumeUpBtn = document.querySelector(".fa-volume-up");
let isPlaying = false;
let songIndex = 0;
let isRandom = false;
let isRepeat = false;
let songLists = [
  {
    SongName: "Better man",
    Artist: "Westlife",
    Songs: "audio/Westlife - Better Man.mp3",
    SongImage: "image/westlife-t.jpg"
  },
  {
    SongName: "One Day",
    Artist: "Koolulam",
    Songs: "audio/Koolulam One Day -.mp3",
    SongImage: "image/artworks-lPXKk9ZBJp3fIRca-68NUaA-t500x500.jpg"
  }
  ,
  {
    SongName: "Particula",
    Artist: "Major Lazer & DJ Maphorisa feat. Nasty C, Ice Prince, Patoranking & Jidenna",
    Songs: "audio/Major Lazer & DJ Maphorisa feat. Nasty C, Ice Prince, Patoranking & Jidenna - Particula.mp3",
    SongImage: "image/stay.png"
  }
  , {
    SongName: "Queen of my heart",
    Artist: "Westlife",
    Songs: "audio/Westlife - Queen of my heart.mp3",
    SongImage: "image/10Queenofmyheart1.jpg"
  }
  , {
    SongName: "Heavenly Gift",
    Artist: "Tiffany Tang ft Luo Jin",
    Songs: "audio/y2mate.com -  Heavenly Gift  Tiffany Tang ft Luo Jin ChiPinyinEng.mp3",
    SongImage: "image/heavenly_gift1.jpg"
  }
  , {
    SongName: "If Heaven Has Compassion",
    Artist: "A Lin",
    Songs: "audio/y2mate.com -  If Heaven Has Compassion  A Lin ChiPinyinEng.mp3",
    SongImage: "image/ifheavenhavecompassion.jpg"
  }
  , {
    SongName: "经典咏流传 纯享版毛晓彤古装现身惊艳全场",
    Artist: "经典咏流传",
    Songs: "audio/y2mate.com - 经典咏流传 纯享版毛晓彤古装现身惊艳全场 古风古韵诠释古代爱情 CCTV.mp3",
    SongImage: "image/marriage.jpg"
  }
  , {
    SongName: "If There Is A Next Life",
    Artist: "Li Qi ",
    Songs: "audio/y2mate.com - MV The Princess Weiyoung  If There Is A Next Life.mp3",
    SongImage: "image/nextlife.jpg"
  }
  , {
    SongName: "Princess Weiyoung",
    Artist: "Tiffany Tang ft Luo Jin",
    Songs: "audio/y2mate.com - Playlist Princess Weiyoung OST.mp3",
    SongImage: "image/toubajun.jpg"
  }



]
loadSong(songIndex)
function loadSong(songIndex) {
  audio.src = songLists[songIndex].Songs;
  songTitle.innerHTML = songLists[songIndex].SongName;
  songArtist.innerHTML = songLists[songIndex].Artist;
  songImage.style.backgroundImage = "url(" + songLists[songIndex].SongImage + ")";
  document.querySelector(".sub-container").style.backgroundImage = "url(" + songLists[songIndex].SongImage + ")";
}
function playSong() {
  isPlaying = true;
  songImage.setAttribute("id", "rotate");
  audio.play();
  playBtn.innerHTML = "<i class='fa fa-pause-circle fa-2x'></i>";
  playBtn.title = "Pause";
  document.querySelector(".now-playing").innerHTML = "Now Playing " + (songIndex + 1) + " of " + songLists.length + " songs";
  console.log(audio.played)
}
function pauseSong() {
  isPlaying = false;
  songImage.removeAttribute("id");
  audio.pause();
  playBtn.innerHTML = "<i class='fa fa-play-circle fa-2x'></i>";
  playBtn.title = "Play";
}
function playPause() {
  isPlaying ? pauseSong() : playSong()
}
function nextSong() {
  songIndex++;
  if (songLists.length > songIndex && isRandom == false) {
    loadSong(songIndex);
    playSong()
    console.log(songIndex)
  }
  else if (songLists.length > songIndex && isRandom == true) {
    songIndex = Math.floor(Math.random() * songLists.length + 0)
    loadSong(songIndex);
    playSong()

  }
  else {
    songIndex = 0;
    loadSong(songIndex);
    playSong()
  }
}
function prevSong() {
  songIndex--;
  if (songIndex >= 0) {
    loadSong(songIndex);
    playSong()
  } else {
    songIndex = 0;
    loadSong(songIndex);
    playSong()
  }
}
function volume() {

  console.log(audio.volume = songVolume.value / 100)
}
function repeatSong() {
  let current_index = songIndex;
  loadSong(current_index);
  playSong()
  console.log(current_index)
}
function random() {
  isRandom ? pauseRandom() : playRandom();
}
function playRandom() {
  isRandom = true;
  randomBtn.classList.add("randomActive");
}
function pauseRandom() {
  isRandom = false;
  randomBtn.classList.remove("randomActive");
}
function seekTo() {
  let seek = audio.duration * (seek_slider.value / 100);
  audio.currentTime = seek;
}
function volumeDown() {
  audio.volume = 0;
}
function volumeUp() {
  audio.volume = 1;
}
seek_slider.addEventListener("change", seekTo)
playBtn.addEventListener("click", playPause);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);
songVolume.addEventListener("change", volume);
repeatBtn.addEventListener("click", repeatSong);
randomBtn.addEventListener("click", random);
volumeDownBtn.addEventListener("click", volumeDown);
volumeUpBtn.addEventListener("click", volumeUp)
console.log(audio)