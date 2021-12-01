// //alert("texte");
// /*
//     commentaires sur 
//     plusieurs 
//     lignes
// */

// var prenom;
// let nomDeLaPersonne; //Déclaration

// nomDeLaPersonne = "Bédu"; //Affectation

// let prenomDeLaPersonne = "Laurent"; //Initialise

// const pi = 3.14159;
// //pi = 3.1415958; Interdit !

// //let saisie = prompt("Saisir un nombre svp.");
// //alert(saisie);

// //console.log(saisie);

// let chaine = "chaine de caractères";
// let nb1 = 7.5;
// let nbEntier = 10;

// let t1 = typeof chaine;
// let t2 = typeof nb1;
// let t3 = typeof nbEntier;
// let t4 = typeof prenom;

// nbEntier = "Chaine de caractères";

// t3 = typeof nbEntier;

// let nb_1 = 12, nb_2 = 5;
// let add = nb_1 + nb_2;
// let soust = nb_1 - nb_2;
// let multi = nb_1 * nb_2;
// let divi = nb_1 / nb_2;
// let modu = nb_1 % nb_2;

// //concaténation
// const nomComplet = prenomDeLaPersonne + " " + nomDeLaPersonne;

// let v1 = 10;
// v1 = v1 + 10;
// v1 += 10;

// let str1 = "abc";
// str1 = str1 + "def";
// str1 += "ghi";

// //type boolean
// let vrai = true;
// let faux = false;

// let t5 = typeof vrai;

// let a = 10, b = 0;//opérateurs de comparaison
// let test = (a > b);
// test = a < b;
// test = a >= b;
// test = a <= b;
// test = a == b;
// test = a != b;

// a = 10
// b = "10";
// test = a == b;//vrai -> comparaison égalité en valeur
// test = a === b;//faux -> comparaison égalité en valeur et en type

// test = a != b;//faux -> comparaison différence en valeur
// test = a !== b;//vrai -> comparaison différence en valeur et en type

// if(test){
//     //si test est vrai j'exécute ce bloc de code
// }

// if(test){
//     //si test est vrai j'exécute ce bloc de code
// }
// else{
//     //si test est faux j'exécute ce bloc de code
// }

// // let demandeNombre = prompt("Saisir un nombre svp.");
// // // if(demandeNombre >= 0){
// // //     alert("Nombre positif");
// // // }
// // // else{
// // //     alert("Nombre négatif");
// // // }
// // if(demandeNombre > 0){
// //     alert("Nombre positif");
// // }
// // else if (demandeNombre == 0){
// //     alert("Nombre nul");
// // }
// // else{
// //     alert("Nombre négatif");
// // }

// // if(demandeNombre > 0){
// //     alert("Nombre positif");
// // }
// // else if (demandeNombre == 0){
// //     alert("Nombre nul");
// // }
// // else if(demandeNombre < 0){
// //     alert("Nombre négatif");
// // }

// //let nb = prompt("un nombre svp.");
// // if(nb > 0){
// //     alert("positif");
// //     if(nb % 2 == 0){
// //         alert("pair")

// //     }
// // }

// // if(nb > 0 && nb % 2 == 0){
// //     alert("positif et pair.");
// // }

// // if(nb > 0 || nb < 0){
// //     alert("ce nombre n'est pas nul");
// // }

// let condition = true;
// let negation = !condition; //!(a > 0)

// //while
// let compteur = 11;
// while(compteur <= 10){
//     console.log(compteur);
//     // compteur = compteur + 1;
//     // compteur += 1;
//     compteur++;
// }
// console.log("fin de boucle while");


// //do while
// compteur = 11;
// do{
//     console.log(compteur);
//     compteur++;
// }while(compteur <= 10)
// console.log("fin de boucle do while");

// //for
// for(let cpt = 1; cpt <= 10; cpt++){
//     console.log(cpt);
// }
// console.log("fin de boucle for");

// let saisieUtilisateur = prompt("Saisir un caractère svp");
// while(saisieUtilisateur == ""){
//     saisieUtilisateur = prompt("Saisir un caractère svp");
// }

// //Déclarer un tableau vide
// let nomDeMonTableau = [];
// let longueurDeMonTableau = nomDeMonTableau.length;

// //Déclarer un tableau pré-remplie
let prenoms = ["Pierre", "Paul", "Jacques"];
// let notes = [12, 17, 9, 14];

// let note3 = notes[2];
// let prenom1 = prenoms[0];

// // prenoms[4] = "Laurent";
// // console.log(prenoms[3]);

prenoms.push("Laurent");

// prenoms.unshift("Alain");

let lastElement = prenoms.pop();

// let firstElement = prenoms.shift();

// for(let i=0; i < prenoms.length; i++){
//     console.log(prenoms[i]);
// }

//Déclarer une fonction
function nomDeMaFonction(){
    console.log("nomDeMaFonction");
    return "Salut";
}

let test = nomDeMaFonction();
//nomDeMaFonction();

function addTwoNumbers(a, b){
    let sum = a + b;
    return sum;
}
let result = addTwoNumbers(10, 5);

let alphabet = "abcdefghijklmnopqrstuvwxyz";

let lettre6 = alphabet[5];

let word = "javascript";

let longueur = word.length;

let sentence = "J'aime le javascript"; //7v 10c
function consonneAndVoyelleCounter(sentenceToCount){
    let nbConsonne = 0;
    let nbVoyelle = 0;
    for(let i=0; i < sentenceToCount.length; i++){
        console.log(sentenceToCount[i]);
        let currentCar = sentenceToCount[i];
        if(currentCar == "a" || currentCar == "e"){
            nbVoyelle++;
        }
        else{
            nbConsonne++;
        }
    }
    return [nbConsonne, nbVoyelle];
    let bp;
}
let result2 = consonneAndVoyelleCounter(sentence);

let bp;



























