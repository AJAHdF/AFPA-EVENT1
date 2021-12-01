// //1.Demander à l'utilisateur de saisir son prénom, 
// //puis dans un 2ème temps de saisir son nom et lui afficher son nom complet (prompt et alert);

// let prenom = prompt("Quel est votre prénom ?");
// let nom = prompt("Quel est votre nom ?");
// let result = prenom + " " + nom;
// alert(result);

// //2.Demander la saisie de 2 nombres puis afficher la différence
// //Décomposer en étapes simples élémentaires

// let number = prompt("saisir la premiére valeur");
// let number2 = prompt("saisir la deuxiéme valeur");
// let resultat = parseInt(number) +parseInt(number2);
// alert(resultat);

//3.Demander la saisie de 2 nombres puis afficher la somme
//Décomposer en étapes simples élémentaires

//idem 2. Attention à la conversion

//4.Demander de saisir un nombre et indiquer si ce nombre est pair ou impair

// let nombre = prompt("veuillez saisir un nombre");
// // if ( nombre % 2 ==0){
// //     alert("le nombre est paire");
// // }
// // else{
// //     alert("le nombre est impaire");
// // }

// alert(nombre %2 == 0 ? "chiffre pair" : "nombre impair");

//5.Demander de saisir un nombre et indiquer si ce nombre est négatif, positif ou nul

// let nombre= prompt ( "veuillez saisir un nombre");

// if ( nombre>0){
//     alert("le nombre est positif");
//     console.log("le nombre est positif");
// }
//  else if ( nombre< 0){
//      alert("le nombre est negatif");
//      console.log("le nombre est negatif");
// }
// else{
//     alert("le nombre est nul");
//     console.log("le nombre est nul");
// }

//6. Demander à quelle place le participant d'une course à terminé
//en fonction de la réponse lui indiquer s'il a une médaille ou pas :
//1 -> Or
//2 -> Argent
//3 -> Bronze
//4 -> Chocolat
// 5 et plus : Pas de chance

// let nb =prompt("entré votre position")
// if (nb == 1){
//     alert("medaille d'or")
// }
// if (nb == 2){
//     alert("medaille d'argent")
// }
// if (nb == 3){
//     alert("medaille de bronze")
// }
// if (nb == 4){
//     alert("medaille en chocolat")
// }
// if (nb >= 5){
//     alert("pas de chance")
// }

// let number = prompt("Write a number")

// switch(number)
// {
//     case "1":
//         console.log("Gold");
//         //break;

//     case "2":
//         console.log("silver");
//         //break;

//     case "3":
//         console.log("bronze");
//         //break;

//     case "4":
//         console.log("chocolate");
//         //break;

//     default:
//         console.log("try again");
// }

//7. Demander la saisie d'une note obtenue lors d'un examen, et afficher la mention correspondante :
//Non compris entre 0 et 20 : Ce n'est pas une note valide
//20 : Parfait
//18 et <20 : Excellent
//16 et <18 : Trés bien
//14 et <16 : Bien
//12 et <14 : Assez bien
//10 et <12 : Reçu
//<10 : Non reçu
// let nb = prompt("Quelle est votre note");
// if(nb==20){
//     alert("Parfait");
// }
// else if (nb>=18 && nb<20){
//     alert("Excellent");
// }
// else if (nb>=16 && nb<18){
//     alert("Très Bien");
// }
// else if (nb>=14 && nb<16){
//     alert("Bien)");
// }
// else if (nb>=12 && nb<14){
//     alert("Assez Bien)");
// }
// else if (nb>=10 && nb<12){
//     alert("Reçu");
// }
// else if (nb<10 && nb >=0){
//     alert("Non Reçu");
// }
// else{
//     alert("note invalide");
// }

// //3bis.Demander la saisie de 2 nombres puis afficher la somme, 
// //tant que la saisie ne correspond pas à un nombre, on redemande de saisir un nombre


// let nombre1,nombre2;
// do{
//     nombre1= prompt("saisir le premier nombre");
// }
// while(nombre1==" "|| isNaN(parseFloat(nombre1)));
// do{
//     nombre2 = prompt("saisir le deuxième nombre");
// }
// while(nombre2==" "|| isNaN(parseFloat(nombre2)));

// let result= parseFloat(nombre1)+ parseFloat(nombre2);
// alert(result);


//Exo 8. demander un nombre compris entre 1 et 10
//On redemande à l'utilisateur de saisir tant que ce n'est pas un nombre compris entre 1 et 10
//Une fois la saisie correcte, on affiche la table de multiplication de ce nombre dans la console.

// let saisie;
// do{
//     saisie = prompt("saisir un nombre compris entre 1 et 10");
// }
// while( !(!isNaN(saisie) && saisie >= 1 && saisie <= 10) );
// for(let i=1; i<=10; i++){
//     console.log(saisie*i);
// }

// let condition = (!isNaN(saisie) && saisie >= 1 && saisie <= 10)

//Exo 9. Demander le nombre de photocopies efféctuées
//S'arrurer de la validité de la saisie : nombre >= 1
//Afficher le prix en fonction du nombre de photocopie(s) saisi
//les 10 premières sont à 0.10€ l'unité
//les 40 suivantes sont à 0.08€ l'unité
//les suivantes sont à 0.05€ l'unité



// //Exo JS 10 :
// //Demander la saisie d'une phrase
// //Lui indiquer combien sa phrase comporte de consonnes et de voyelles

// function voyellesCounter(sentence){
//     let resultat = 0;
//     let voyelles = "aeiouyàâäéèêëîïôöùûü";
//     sentence = sentence.toLowerCase();
//     for(let i = 0; i < sentence.length; i++){
//         let currentChar = sentence[i];
//         for(let j = 0; j < voyelles.length; j++){
//             let currentVoyelle = voyelles[j];
//             if(currentChar == currentVoyelle){
//                 resultat++;
//                 break;
//             }
//         }
//     }
//     return resultat;
// }
// //voyellesCounter("J'aime le Javascript Version 11A héhéhé !");

// function consonnesCounter(sentence){
//     let resultat = 0;
//     let consonnes = "zrtpqsdfghjklmwxcvbn";
//     sentence = sentence.toLowerCase();
//     for(let i = 0; i < sentence.length; i++){
//         let currentChar = sentence[i];
//         if(consonnes.includes(currentChar)){
//             resultat++;
//         }
//     }
//     return resultat;
// }
// //consonnesCounter("J'aime le Javascript Version 11A héhéhé !");

// let userSentence = prompt("Saisir une phrase SVP.");
// let nbConsonnes = consonnesCounter(userSentence);
// let nbVoyelles = voyellesCounter(userSentence);
// alert("Votre phrase comporte " + nbConsonnes + " consonnes et " + nbVoyelles + " voyelles.");


//Exo JS 11 : Demander à l'utilisateur de saisir une date puis vérifier que celle-ci est exacte. 
//On demande le jour, puis le mois, puis l'année et on vérifie enfin que cette date est correcte.

//jours compris entre 1 et 31
//mois compris entre 1 et 12
//années >0

//31 jours -> 1, 3, 5, 7, 8, 10, 12
//30 jours -> 4,6,9,11

//février 28 jours sauf les années bisextilles

// let year = prompt("Saisir une année svp.");

// while(!(parseInt(year) == year && year > 0)){
//     year = prompt("Saisir une année valide svp.");
// }

// let month = prompt("Saisir un numéro de mois svp. (entre 1 et 12)"); 

// while(!(parseInt(month) == month && month > 0 && month < 13)){
//     month = prompt("Saisir un numéro de mois valide svp. (entre 1 et 12)"); 
// }

// let months30 = ["4", "6", "9", "11"];
// let maxDay = 31;
// if(months30.includes(month)){
//     maxDay = 30;
// }
// if(month == 2){
//     maxDay = 28;
//     if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
//         maxDay = 29;
//     }
// }

// let day = prompt("Saisir la date du jour souhaité svp. (entre 1 et " + maxDay + ")");
// while(!(parseInt(day) == day && day >= 1 && day <= maxDay)){
//     day = prompt("Saisir la date du jour souhaité valide svp. (entre 1 et " + maxDay + ")");
// }

//Exercice

//Ex 5 : Ecrire un algorithme qui demande à l'utilisateur (un prof) de saisir les notes d'un élèves 
//(compris entre 0 et 20).
//Si la saisie n'est pas une note valide l'indiquer à l'utilisateur. 
//La saisie des notes s'arrête lorsque l'utilisateur saisie le mot END. 
//L'algorithme doit alors afficher la moyenne des notes de l'élève 
//ainsi que la note la plus élevée et la note la moins élevée.
//(petit conseil : utiliser un tableau pour stocker les notes saisies)



// let saisie = prompt("Saisir une note comprise entre 0 et 20.");
// let notes = [];
// while(saisie.toLowerCase() != "end"){

//     while(!(parseFloat(saisie) == saisie && parseFloat(saisie) >= 0 && parseFloat(saisie) <= 20)){
//         saisie = prompt("Erreur de saisie, saisir une note comprise entre 0 et 20.");
//     }
//     notes.push(parseFloat(saisie));
//     saisie = prompt("Saisir une note comprise entre 0 et 20.");

// }
// //calcul
// if(notes.length > 0){
//     let min = 20, max = 0, moy = 0;
//     for(let i=0; i < notes.length; i++){
//         moy += notes[i];
//     }
//     moy = moy / notes.length;
//     // for(let i=0; i < notes.length; i++){
//     //     if(min > notes[i]){
//     //         min = notes[i];
//     //     }
//     //     if(max < notes[i]){
//     //         max = notes[i];
//     //     }
//     // }
//     max = Math.max(...notes);//remplace la boucle ci-dessus (15, 3, 17, 8, 12)
//     min = Math.min(...notes);//remplace la boucle ci-dessus
//     alert("La moyenne est : " + moy + "\r\nLa note min est : " + min + "\r\nLa note max est : " + max);
// }
// else{
//     alert("Vous n'avez pas saisi de notes.");
// }

//Automate rendu monnaie



function getRandom(min, max){
    return Math.random() * (max - min) + min;
}

//let prixChoisi = parseFloat(getRandom(0.50,1.50).toFixed(1)) * 100;
//alert("Prix de l'article choisi " + prixChoisi + " cts");

// let montantInsere = 0;
// let tableauPieces = [5, 10, 20, 50, 100, 200];
// let fondCaisse = [20, 0, 0, 0, 0, 0];
// console.log(fondCaisse);
// while(montantInsere < prixChoisi){
//     let saisie = prompt("Inserer votre monnaie svp.");
//     let test = isNaN(saisie) || !saisie || !tableauPieces.includes(parseInt(saisie))
//     while(isNaN(saisie) || !saisie || !tableauPieces.includes(parseInt(saisie))){
//         saisie = prompt("Inserer votre monnaie svp.");
//     }
//     montantInsere += parseInt(saisie);
//     if(saisie == "5"){
//         fondCaisse[0]++;
//     }
//     else if(saisie == "10"){
//         fondCaisse[1]++;
//     }
//     else if(saisie == "20"){
//         fondCaisse[2]++;
//     }
//     else if(saisie == "50"){
//         fondCaisse[3]++;
//     }
//     else if(saisie == "100"){
//         fondCaisse[4]++;
//     }
//     else if(saisie == "200"){
//         fondCaisse[5]++;
//     }
// }
// //
// let monnaieARendre = montantInsere - prixChoisi;
// let renduMonnaieMsg = "";
// if(monnaieARendre >= 100){
//     //1€
//     renduMonnaieMsg += "1€-";
//     if(fondCaisse[4] > 0){
//         monnaieARendre -= 100;
//         fondCaisse[4]--;
//     }
// }
// while(monnaieARendre >= 50){
//     renduMonnaieMsg += "50c-";
//     if(fondCaisse[3] > 0){
//         monnaieARendre -= 50;
//         fondCaisse[3]--;
//     }
// }
// while(monnaieARendre >= 20){
//     renduMonnaieMsg += "20c-";
//     if(fondCaisse[2] > 0){
//         monnaieARendre -= 20;
//         fondCaisse[2]--;
//     }
// }
// while(monnaieARendre >= 10){
//     renduMonnaieMsg += "10c-";
//     if(fondCaisse[1] > 0){
//         monnaieARendre -= 10;
//         fondCaisse[1]--;
//     }
// }
// while(monnaieARendre >= 5){
//     renduMonnaieMsg += "5c-";
//     if(fondCaisse[0] > 0){
//         monnaieARendre -= 5;
//         fondCaisse[0]--;
//     }
// }
// console.log(fondCaisse);
// alert(renduMonnaieMsg);

let prixChoisi;

let articles = document.getElementsByClassName('article');
for(let i = 0; i < articles.length; i++){
    let currentArticle = articles[i];
    currentArticle.addEventListener('click', onCurrentArticleClick)
}

function onCurrentArticleClick(){
    //Prix

    //afficher ce qui est caché
    let elementMasque = document.getElementById('monnaie');
    elementMasque.classList.remove('d-none');
}

let pieces = document.querySelectorAll('.piece');
for(let i = 0; i < pieces.length; i++){
    let currentPiece = pieces[i];
    currentPiece.addEventListener('click', onCurrentPieceClick)
}

function onCurrentPieceClick(){
    
}

let bp;

