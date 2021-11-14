var myAudio = document.getElementById('myAudio');
var button = document.getElementsByTagName('button');
var clickMusic = 1;

function playMusic(){
    myAudio.play()
}   
  
function pauseMusic(pauseOnOff) {
    clickMusic++
    if (clickMusic%2 === 0){
        myAudio.pause();
    }
    else if(clickMusic%2 !== 0){
        playMusic();
    }
}