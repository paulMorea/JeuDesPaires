var ul = document.getElementById('list');
var liSelected;
var index = -1;
var enter = 1;
document.addEventListener('keydown', function (event) {
    var len = ul.getElementsByTagName('li').length - 1;
    if (event.key === 'ArrowDown') {
        index++;
        //down 
        if (liSelected) {
            removeClass(liSelected, 'selected');
            next = ul.getElementsByTagName('li')[index];
            if (typeof next !== undefined && index <= len) {
                liSelected = next;
            } else {
                index = 0;
                liSelected = ul.getElementsByTagName('li')[0];
            }
            addClass(liSelected, 'selected');
            console.log(index);
        }
        else {
            index = 0;

            liSelected = ul.getElementsByTagName('li')[0];
            addClass(liSelected, 'selected');
        }
    }
    else if (event.key === 'ArrowUp') {

        //up
        if (liSelected) {
            removeClass(liSelected, 'selected');
            index--;
            console.log(index);
            next = ul.getElementsByTagName('li')[index];
            if (typeof next !== undefined && index >= 0) {
                liSelected = next;
            } else {
                index = len;
                liSelected = ul.getElementsByTagName('li')[len];
            }
            addClass(liSelected, 'selected');
        }
        else {
            index = 0;
            liSelected = ul.getElementsByTagName('li')[len];
            addClass(liSelected, 'selected');
        }
    }
    
    if (liSelected && index === 0 && event.key === "Enter") {
        enter++;
        if(enter%2===0){
            darkmodeOn();
        }else{
            darkmodeOff();
        }
    }
    else if (liSelected && index === 2 && event.key === "Enter") {
        window.close();
    }
    else if (liSelected && index === 3 && event.key === "Enter") {
        window.location = "space.html";
    }
    else if (liSelected && index === 4 && event.key === "Enter") {
        window.location = "thebigbangtheory.html";
    }
}, false);

function removeClass(el, className) {
    if (el.classList) {
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
};

function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
    } else {
        el.className += ' ' + className;
    }
};
// *****************CLICK MENU************************
  //DARKMODE
function darkmodeOn(){
    document.getElementById('bodyMenu').style.backgroundColor = "black";
    document.querySelector('#list').style.color = "rgb(9, 255, 0)";
    document.querySelector('#titre').style.color = "rgb(9, 255, 0)";
    document.querySelector('#scoreLink').style.color = "rgb(9, 255, 0)";
    document.querySelector('#spaceLink').style.color = "rgb(9, 255, 0)";
    document.querySelector('#tbbtLink').style.color = "rgb(9, 255, 0)";
}
function darkmodeOff(){
    document.getElementById('bodyMenu').style.backgroundColor = "white";
    document.querySelector('#list').style.color = "black";
    document.querySelector('#titre').style.color = "black";
    document.querySelector('#scoreLink').style.color = "black";
    document.querySelector('#spaceLink').style.color = "black";
    document.querySelector('#tbbtLink').style.color = "black";
}

document.getElementById("darkMode").addEventListener('click',function(){
    enter++;
    if(enter%2===0){
        darkmodeOn();
    }else{
        darkmodeOff();
    }
})
    //QUITTER
document.getElementById("quitter").addEventListener('click',function(){
    window.close();
})
