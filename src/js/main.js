// # Exo 1 Boucles FOREACH
// ## - Creer une variable de type array et inserez toutes les personnes de la classe
// ## - A l'aide d'une boucle foreach, dites bonjour + prenom à chaque personne du tableau

//  let monTab = [ "adil", "agim", "nasila", "mouna", "ali", "seif"];


//  monTab.forEach(element => {
    
//     console.log(`bonjour ${element}`);

//  });




// - # Exo 2 Boucle FOREACH
// - ## Créez un un array qui contient 5 éléments
// - ## Affichez touts les éléments a l'aide d'une boucle foreach

//  let monTab2 = ["synhté", "drums", "guitar", "micro", "basse"];

// monTab2.forEach(element => {
//     console.log(element);
// });


//  (3.) => Exo 6
// ##  Voici un tableau : 

 let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];

// ## Triez le contenu du tableau donnees en verifiant le type de chaque donnée
// ## Creez 4 Tableaux : 'typeString' , 'typeNumber' , 'typeObject' , 'typeAutre.


let typeString = [];
let typeNumber = [];
let typeObject = [];
let typeAutre = [];


donnees.forEach(element => {
    console.log(typeof element);

    if(typeof element == "string"){
        typeString.push(element);
    }else if(typeof element == "number"){
        typeNumber.push(element);
    }else if(typeof element == "object"){
        typeObject.push(element);
    }else{
        typeAutre.push(element);
    }
    
});





// ## Videz le tableau "donnees" en redistribuant avec l'aide de condition et d'une function prédéfinie trouvée sur internet dans les bons tableaux.

donnees.splice(0,donnees.length);


// de l'element 0 jusqu'à la longueur de donees (donnees.length)


console.log(donnees);
console.log(typeString);
console.log(typeObject);
console.log(typeAutre);




// exo 4 Créer un tableau dans le quel vous devez avoir les prenoms de chaque student de la Coding School 19
// ## A l'aide l'un foreach, affichez les prenom des studens qui commenecent par (A, F, G, I, H, L, M) en majuscule, les autres en minuscule

// let classe = ["adil", "agim", "chris", "haroune", "ilias", "lira", "nasila", "stan", "mouna", "fanny", "yassine"];

// classe.forEach(element => {
//     console.log(object);
// });


// let num = 0;

// while (num < 3) {
//     console.log(num);
//     num ++;
// }


// let mdp = prompt("entrez le mdp");

// while (mdp !== "crabe"){
//     mdp = prompt("réessayez");
// }
// alert("mot de passe correct");



// # Exercice 1 boucle while OKII
// - A l'aide d'un prompt, choisissez un chiffre et enregistrez la valeur dans une variable
// - Déclarez une variable compteur qui commence par 0
// - A l'aide d'une boucle while, incrémentez de 1 la variable compteur à chaque boucle et affichez touts les chiffres de 0 jusqu'au nombre choisis au debut dans le prompt

// let nbr = prompt("Choisis un chiffre");

// let compteur = 0;

// while (nbr >= 5 compteur){
//     console.log(compteur ++); 
// }

// - # Exo 2 Boucles WHILE
//     - ## Créez une variable classe avec un array
//     - ## A l'aide d'un prompt, choisissez le nombre max d'étudiants dans la classe
//     - ## A l'aide d'une boucle while, inserez des étudiants dans la classe tant que la classe n'est pas remplie
//     - ## Après avoir rempli la classe, affichez tous les etudiants


// let classe = [];

// let nbrEleves = prompt("Choisis un nombre d'élèves");

// while (classe !== nbrEleves ) {
//     classe.push(nbrEleves);
//     // nbrEleves ++;
// }

// console.log(classe);




// - ##  Ex 03
//     ## Créer un tableau de 9 prénoms 
//     ## Faire une boucle sur les prénoms précédé de Bonjour tant que 9 n'est pas atteint et les affiché dans la console
//     ## Astuce : let i = 0;
//     ## Astuce 2 : (i < 9)

// let tab = ["adil", "agim", "elvis", "haroune", "ilias", "kevin", "lira", "stan", "seif"];

// let i = 0;

// while ( i < 9); {
//     console.log("Bonjour " + tab[i]);

// }


// while (nbr > compteur){
//     console.log(nbr);
//     compteur ++;
// }



// - ##  Exo 04
//     ## Créer un tableau de 6 fruits
//     ## Avec l'aide d'une boucle while vider le tableau.
//     ## Utilisez fruits.length


// let fruits = ["orange", "pomme", "kumquat", "poire", "kaki", "nefle"];

// while (fruits.length >= 6){
//     fruits.shift();
// }

// console.log(panier);





// - ##  Exo 05
//     ## Créer un tableau de 4 légumes du nom de 'panierLegumes'
//     ## Stocker la longueur du tableau dans une variable du nom de 'longeur'
//     # Vider le tableau panierLegumes pour mettre son contenu dans un second tableau du nom de 'caisseLegumes'



// let panierLegumes = ["pourpier", "topinambour", "epinards", "cresson"];
// let longueur = panierLegumes.length
// let caisseLegumes = [];

// while (panierLegumes.length >= 4) {
//     caisseLegumes.push(panierLegumes[0]);
// }



// - ##  Exo 6 oki
//     ##  Préparer une énigme, et faites une boucle WHILE qui va vérifier si l'utilisateur répond correctement à l'énigme via un prompt, tant qu'il se trompe, vous lui reposer la question. S'il a juste, faites une alerte qui le félicite

// let rep = prompt("qu'est-ce qui est jaune et qui attend?");

// while (rep !== "jonathan") {
//     rep = prompt("réessaye");
// }

// alert("Yes, tu connais les bails");