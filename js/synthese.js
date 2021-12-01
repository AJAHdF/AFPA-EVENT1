// //Lier .js et .html
// //ex pour ce fichier : <script src="./js/synthese.js"></script>

// //Variables
// //Déclarer une variable :
// let nomDeVariable;
// //ou
// var nomDeVariable2;

// //Affecter une valeur dans une variable
// nomDeVariable = 10; //type number
// nomDeVariable2 = 'du texte'; //type string

// //une variable vide est de type undefined

// //Initialise (directement) une variable
// let boolVar = true; //type boolean

// //Pour connaitre le type d'une variable (le type de son contenu)
// typeof boolVar; //ici vaut "boolean"

// //Créer une constante
// const pi = 3.14159;
// //pi = 3.1416; //Non modifiable

// /*
// du
// commentaire
// sur
// plusieurs
// lignes 
// */

// //fonctions prédéfinies
// //entrée
// let saisieUtilisateur = prompt("message d'indication pour l'utilisateur");
// //sortie
// alert("message pour l'utilisateur");
// console.log("message dans la console");

// //opérateurs numériques
// let a = 1, b = 2, c = 3;
// let somme = a + b;
// let difference = a - b;
// let produit = a * b;
// let quotient = a / b;
// let modulo = a % b; //reste de la division entière

// //operateurs sur les chaines : concatener 2 chaines de caractères : +
// let nom = "Bédu";
// let prenom = "Laurent";
// const fullName = nom + " " + prenom;

// //opérateurs d'affectation x=
// a = a + 10;
// //écriture différente et raccourcie
// a += 10;

// //convertion
// parseInt("10"); // 10
// parseFloat("10"); //10
// parseFloat("10.5"); //10.5
// parseInt("10.5"); //10

// //opérateurs de comparaison
// a < b; //true
// a > b; //false
// a >= b; //true
// a <= b; //false
// a == b; //false -> égalité en valeur uniquement
// a === b; //false -> égalité en valeur et en type
// a != b; // true -> différence en valeur uniquement
// a !== b; //true -> différence en valeur et en type

// //opérateurs logiques
// // le ET -> && vrai si les 2 comparaisons sont vraies
// a < b && b < c;
// // le OU -> || vrai si l'une des 2 comparaisons est vraie (faux si les 2 sont fausses)
// a < b || b < c;
// //Négation -> ! si vrai devient faux et vice versa
// !(a < b)
// // let test = a < b;
// // !test;
// //Algébre de Bool, tables de vérité

// let test = true;
// test = a < b;
// //le if
// if(test){//si la condition test est vraie, le bloc de code {} sera exécuté

// }

// if(test){

// }
// else{
//     //bloc exécuté si test est false
// }

// let test1 = true, test2 = false, test3 = true;
// if(test1){
//     //éxécuté si test1 est vrai
// }
// else if(test2){

// }
// else if(test3){

// }
// else{
//     //facultatif
// }

// //le switch
// switch(a){
//     case 0:
//         console.log("nul");
//     case 1:
//         console.log("non nul");
//     case 2:
//         console/log("...");
//     default:
//         console.log("par défaut"); //facultatif
// }
// //écriture équivalente avec un if elseif
// if(a == 0){
//     console.log("nul");
// }
// else if (a == 1){
//     console.log("non nul");
// }
// else if (a == 2){
//     console/log("...");
// }
// else{
//     console.log("par défaut"); //facultatif
// }

// //Les boucles while
// let cpt = 1;
// while(cpt <= 10){
//     console.log(cpt);
//     cpt++; //cpt = cpt + 1
// }
// console.log("sortie de while")

// //le do while
// do{
//     cpt--; //cpt = cpt - 1
//     console.log(cpt);
// }
// while(cpt > 1)
// console.log("sortie de do while")

// //le for
// let j = 10;
// for(let j = 10; j <= 1; j--){
//     console.log(j);
// }
// console.log("sortie de for")

// //les tableaux
// let prenoms = ["Pierre", "Paul", "Jacques"];
// let notes = [12, 17, 9, 6, 14]; 

// let prenom_1 = prenoms[0];

// prenoms[0] = "Alain";
// // prenoms[4] = "Lucien";

// prenoms.push("Henri");

// prenoms.unshift("Albert");

// let lastPrenom = prenoms.pop();

// let firstPrenom = prenoms.shift();

// let longueurPrenoms = prenoms.length;

// for(let i = 0; i <  prenoms.length; i++){
//     console.log(prenoms[i]);
// }


//Les fonctions
function nomDeMaFonction(message){
    console.log(message);
    return "OK";
}

let returnValue = nomDeMaFonction("coucou!");
nomDeMaFonction("un autre message");

function addTwoNumbers(nb1, nb2){
    return nb1 + nb2;
}

let sum = addTwoNumbers(17, 28);



let bp;
