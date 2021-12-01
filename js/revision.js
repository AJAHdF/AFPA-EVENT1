//1. Déclarer une variable nommée prenom
let prenom; //variable vide donc type undefined

//2. Assigner une valeur à la variable prenom (votre prénom)
prenom = "Laurent";

//3. Créer et initialiser directement une variable nommé nom qui contient votre nom
let nom = "Bédu";

//4. Créer une constante qui vaut le prenom suivi d'un espace suivi du nom
const nomComplet = prenom + " " + nom;

//5. Demander (avec prompt) à l'utilisateur son nom et son prénom et lui afficher (avec alert)
//le message : Bonjour Laurent Bédu

// let saisie1 = prompt("Votre Nom ?");
// let saisie2 = prompt("Votre prénom ?");
// let message = "Bonjour " + saisie2 + " " + saisie1;
// alert(message);

//6. Créer 2 variables, appelées nb1 et nb2
//Mettre dans ces variables 2 nombres de votre choix
//Ecrire dans la console le resultat de
//leur somme
//leur difference
//leur produit (multiplication)
//leur quotient (division)
// let nb1 = 10, nb2 = 25;
// //OU
// let nb_1;
// let nb_2;
// nb_1 = 10;
// nb_2 = 25;
// //
// let somme = nb1 + nb2;
// console.log(somme);
// let difference = nb1 - nb2;
// console.log(difference);
// let produit = nb1 * nb2;
// console.log(produit);
// let quotient = nb1 / nb2;
// console.log(quotient);

//7. Demander à l'utilisateur de saisir un nombre et le stocker dans une variable nb_A
// Demander à l'utilisateur de saisir un deuxième nombre et le stocker dans une variable nb_B
//Vérifier que la saisie est valide, ici qu'il sagit bien d'un nombre, si ça n'est pas le cas
//a -> je test la saisie
//b -> j'affiche un message (si saisie non valide)
// let nb_A = prompt("saisir un nombre");
// let conditionA = !isNaN(nb_A) && !!nb_A;
// if(conditionA == false){
//     alert("Erreur de saisie, recommencez");
// }
// let nb_B = prompt("saisir un autre nombre");
// let conditionB = !isNaN(nb_B) && !!nb_B;
// if(conditionB == false){
//     alert("Erreur de saisie, recommencez");
// }
//Si les 2 saisies sont correctes, indiquer à l'utilisateur si les 2 nombres saisis sont identiques
//S'il sont différents lui indiquer lequel est le plus grand
// if(conditionA == true && conditionB == true){
//     nb_A = parseFloat(nb_A);
//     nb_B = parseFloat(nb_B);
//     if(nb_A == nb_B){
//         console.log("les 2 nb sont égaux");
//     }
//     else if(nb_A > nb_B){
//         console.log("le premier nombre est le plus grand");
//     }
//     else{
//         console.log("le deuxieme nombre est le plus grand");
//     }
// }

//8. Demander un nombre entier à l'utilisateur et s'assurer que la saisie est correcte
//si la saisie n'est pas correcte, lui indiquer
//si la saisie est correcte lui indiquer si ce nombre (entier) ets positif, nul ou négatif
//et s'il est pair ou impair

let saisie = prompt("Saisir un nombre entier svp.")
let testSaisieIsInteger = !isNaN(saisie) && !!saisie && parseInt(saisie) == saisie
if(!testSaisieIsInteger){ //équivaut à testSaisieIsInteger == false
    console.log("Saisie incorrecte, merci de saisir un nombre entier.");
}
else{
    saisie = parseInt(saisie);
    if(saisie > 0){
        console.log("nombre positif");
    }
    if(saisie == 0){
        console.log("nombre nul");
    }
    if(saisie < 0){
        console.log("nombre négatif");
    }
    //
    if(saisie % 2 == 0){
        console.log("nombre pair");
    }
    else{
        console.log("nombre impair");
    }

}



let bp;