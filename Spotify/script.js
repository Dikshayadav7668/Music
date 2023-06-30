console.log("Welcome to Spotify");

//Initialize the variable
let songIndex = 0;
let audioElement = new Audio ('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName')
let songItems = Array.from(document.getElementsByClassName('songItem'))
let songs = [
    {songName : "Sanu Ek Pal Chain Na Aave" , filepath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName : "Jeetne Ke Liye" , filepath:"songs/2.mp3", coverPath:"covers/2.jpeg"},
    {songName : "Mehfooz" , filepath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName : "Sanam-Re" , filepath:"songs/4.mp3", coverPath:"covers/4.jpeg"},
    {songName : "Sanam-Teri-Kasam" , filepath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName : "Tu Hi Na Jaane" , filepath:"songs/6.mp3", coverPath:"covers/6.jpeg"},
    {songName : "Tu-Jo-Milli" , filepath:"songs/7.mp3", coverPath:"covers/7.jpeg"},
    {songName : "Tu-Wafa" , filepath:"songs/8.mp3", coverPath:"covers/8.jpeg"},
    {songName : "Tujhe Hasil karunga" , filepath:"songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName : "Tum-Kiya-Mile" , filepath:"songs/10.mp3", coverPath:"covers/10.jpg"},
]
songItems.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


//audioElement.play();

//Handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }

    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    

    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })

})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex =0 
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex =0 
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
})
