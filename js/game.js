// LES VARIABLES
const cartes = document.querySelector("#cartes");
var tabCartes = [
    [0,0,0,0,],
    [0,0,0,0,],
    [0,0,0,0,],
    [0,0,0,0,]
];
var tabResultat = aleatoire(); 
var nbrClick =0;
var firstCarte =[];
var init = true;
var tentatives = 0;
var themeImages = [];
 
// LES FONCTIONS

    //  thèmes
if(window.location.pathname === "/space.html" || window.location.pathname === "/JeuDesPaires/space.html"){
    themeImages = ["mercure.png","vénus.png","terre.png","mars.png","jupiter.png","saturne.png","uranus.png","neptune.png"]
}
else if(window.location.pathname === "/thebigbangtheory.html" || window.location.pathname === "/JeuDesPaires/thebigbangtheory.html"){
    themeImages = ["sheldon.png","penny.png","leonard.png","howard.png","amy.png","bernadette.png","raj.png","stuart.png"]
}

function afficher(){
    var txtCartes = "";
    for(var i = 0; i<tabCartes.length; i++){
        txtCartes +="<div>"
        for(var j = 0; j<tabCartes[i].length; j++){
            if(tabCartes[i][j] === 0){
                txtCartes +=`<div style='width:150px;height:150px;background-color:rgba(0, 0, 0, 0);border:2px solid ' class='btn m-2' onclick='selected("${i}${j}")'></div>`;
            }else{
                txtCartes +="<img src='" + images(tabCartes[i][j]) + " 'style='width:150px;height:150px;' class='m-2'>";
            }
        }txtCartes +="</div>"
    }
    cartes.innerHTML = txtCartes;
}
afficher();

function images(valeur){
    var choixImage = "img/";
    switch(valeur){
        case 1 : choixImage+= themeImages[0];
        break;
        case 2 : choixImage+= themeImages[1];
        break;
        case 3 : choixImage+= themeImages[2];
        break;
        case 4 : choixImage+= themeImages[3];
        break;
        case 5 : choixImage+= themeImages[4];
        break;
        case 6 : choixImage+= themeImages[5];
        break;
        case 7 : choixImage+= themeImages[6];
        break;
        case 8 : choixImage+= themeImages[7];
        break;
        default:
    console.log("Erreur!!!");
    }return choixImage
}

function selected(click){
    var ligne = click.substring(0,1);
    var colonne = click.substring(1);
    nbrClick++;
    tabCartes[ligne][colonne] = tabResultat[ligne][colonne];
    init= false;
    var txtTentatives = document.getElementById("tentatives");
    afficher();
    if(!init){
        if(nbrClick==2){
            setTimeout(()=>{
                if(tabCartes[ligne][colonne]!== tabResultat[firstCarte[0]][firstCarte[1]]){
                    tabCartes[ligne][colonne] = 0;
                    tabCartes[firstCarte[0]][firstCarte[1]] = 0;    
                }
                init = true;
                nbrClick = 0;
                firstCarte=[ligne,colonne];
                afficher();
            },500)
            txtTentatives.textContent = `Nombre de tentatives :  ${tentatives}`;
        }else{
            firstCarte=[ligne,colonne];
            tentatives++;
        }   
    }
    if (tabCartes.join('|') === tabResultat.join('|')) {
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
        txtLayer.textContent = "Vous avez gagné !";
        boutonLayer.innerHTML = "<a href='index.html'>Retour au menu</a>"
    } 
}

function aleatoire(){
var arr = [];
var nbrPosition= [0,0,0,0,0,0,0,0];
    for(var  i = 0; i< 4; i++){
    var ligne = [];
        for(var j = 0; j < 4; j++){
        var init = false;
            while(!init){
            var aleatoireNbr = Math.floor(Math.random() * 8)
                if(nbrPosition[aleatoireNbr] < 2){
                    ligne.push(aleatoireNbr+1);
                    nbrPosition[aleatoireNbr]++;
                    init = true;
                } 
            }
        } 
        arr.push(ligne)  
    }
    return arr;
}


