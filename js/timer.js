const departMinutes = 0.75
let temps = departMinutes * 60
var loose = false;
const timerElement = document.getElementById("timer");
let body = document.querySelector("body");
let layerStart =document.getElementById("layerStart");

document.getElementById("boutonStart").addEventListener('click',function(){
    body.removeChild(layerStart);
    const timeValue = setInterval(() => {
        let minutes = parseInt(temps / 60, 10)
        let secondes = parseInt(temps % 60, 10)
        var element =  document.querySelector('.boutonLayer');
        minutes = minutes < 10 ? "0" + minutes : minutes
        secondes = secondes < 10 ? "0" + secondes : secondes
        timerElement.innerText = `Timer ${minutes}:${secondes}`
        temps = temps - 1;
        if(temps < 0 && typeof(element) !== 'undefined' && element !== null){   
            clearInterval(timeValue); 
        } else if (temps < 0) {
            clearInterval(timeValue);
            var body = document.querySelector("body");
            var layer = document.createElement("div");
            var txtLayer = document.createElement("p");
            var boutonLayer = document.createElement("div");
            body.appendChild(layer);
            layer.appendChild(txtLayer);
            layer.appendChild(boutonLayer);
            layer.classList.add("layer");
            txtLayer.classList.add("txtLayer");
            boutonLayer.classList.add("boutonLayer");
            txtLayer.textContent = "Vous avez perdu !";
            boutonLayer.innerHTML = "<a href='index.html'>Retour au menu</a>"
        }
        
    }, 1000)
})


