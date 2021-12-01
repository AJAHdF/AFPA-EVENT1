// alert("coucou");

document

let header = document.getElementById('headerId');

let links = document.getElementsByTagName('a');

let navLinks = document.getElementsByClassName('nav-link');

let header2 = document.querySelector('#headerId');

let navLinks2 = document.querySelectorAll('.nav-link');

//Récuperez les éléments de type section

let sectionList = document.getElementsByTagName('section');
sectionList = document.querySelectorAll('section');

//Récuperer l'élément ayant pour id : footerId

let footer = document.getElementById('footerId');
footer = document.querySelector('#footerId');

//Récupérez les éléments ayant pour classe sectTitle

let sectionTitleList = document.getElementsByClassName('sectTitle');
sectionTitleList = document.querySelectorAll('.sectTitle')

//l'élément h2.sectTitle de la section#sectId1
let sectionTitle1 = document.querySelector('#sectId1 .sectTitle');

let lienAccueil = document.querySelector('[href="#accueil"]');
lienAccueil.innerText = "Accueil";
lienAccueil.innerHTML = '<img src="img/image1.jpg" alt="gouttes eau">';

//Remplacer le texte du footer par "Cet élément est le footer de la page"

let footerText = document.querySelector('#footerId p');
footerText.innerText = "Cet élément est le footer de la page";

//y insérer l'image 2
footerText.innerHTML = '<img src="img/image2.jpg" alt="marguerittes">';

//
let eltH2 = document.querySelector("#sectId2 h2");
eltH2.classList.remove('title');
eltH2.classList.add('bg-red');

//récuperer le h1 de la page, lui enlever la classe title et lui ajouter la classe bg-red
let eltH1 = document.querySelector('h1');
eltH1.classList.remove('title');
eltH1.classList.add('bg-red');

for(let i=0; i < sectionTitleList.length; i++){
    sectionTitleList[i].innerText = "Section " + i;
}

// let elt = document.querySelector('.nav-link');
// elt.addEventListener('click', clickNavLink);
// function clickNavLink(){
//    alert("coucou");
//    elt.removeEventListener('click',clickNavLink);
// }
// elt.addEventListener('mouseover', moveImage);
// function moveImage(){
//     alert("mouse over")
// }

//récupérer les li et y ajouter un eventListener sur le click qui modifiera le text du li cliqué
let liList = document.querySelectorAll('.nav-link');
for(let i = 0; i < liList.length; i++){
    let li = liList[i];
    liList[i].addEventListener('click', clickLi);
    let bp;
}
function clickLi(evt){
    evt.target.innerText = "cliqué";
    //this.innerText = "cliqué";
    console.log("click sur li");
}


let bp;