

// On transforme le chemin relatif de notre fichier json en URL afin de pouvoir effectuer un fetch dessus

let allQuotes;
let sagesse = [];
let motivation = [];


//fonction de déclenchement du bouton ok (fonctionnalité recherche) 
document.getElementById("ok").addEventListener('click', function() {
let mot = champRecherche.value;
console.log(mot)
cherche(mot)
});


fetch(chrome.runtime.getURL('quotes.json'))
  .then(function(response) {
    /* console.log(response); */
    return response.json();
  })
  .then(function(data) {
    console.log(data);  // Ceci affichera l'objet JSON dans la console
    allQuotes = data;
    console.log(allQuotes);

    afficher(data);
   //continuer le math.random+
    console.log("citation albert einstein : ", data.quotes[2].quote, data.quotes[2].author);
    return(data);
    
  })
  
  .catch(function(error) {
    console.error("Erreur lors du chargement du fichier JSON : ", error);
  });
  

function afficher(dataFetch) {
  if(dataFetch === undefined){
    console.error("Paramètre dataFetch de la fonction afficher ne doit pas être undefined ");
    return;
  }
  console.log("function afficher(dataFetch) : ",dataFetch);


  let randomId = Math.floor(Math.random() * dataFetch.quotes.length);
  console.log("randomId : ", randomId);
  document.getElementById("citation").innerHTML= dataFetch.quotes[randomId].quote;
  document.getElementById("auteur").innerHTML= dataFetch.quotes[randomId].author;

  let sagesseId = [0,1,2,3,4,11,12,13,14,15,16,17,18,20,23,24,26,27,30,31,32,33,34,35,36,37,38,39,42,43];
  sagesse = sagesseId.map(i => dataFetch.quotes[i]);

  let motivationId = [1,2,4,5,6,7,8,9,10,13,19,20,21,22,25,28,29,32,35,36,37,40,41];
  motivation = motivationId.map(i => dataFetch.quotes[i]);

  

}



function afficherSagesse() {
  let randomSagesseId = Math.floor(Math.random() * sagesse.length);
  console.log(sagesse);
  document.getElementById("citation").innerHTML= sagesse[randomSagesseId].quote;
  document.getElementById("auteur").innerHTML= sagesse[randomSagesseId].author;
}


function afficherMotivation() {
  let randomMotivationId = Math.floor(Math.random() * motivation.length);
  console.log(motivation);
  document.getElementById("citation").innerHTML = motivation[randomMotivationId].quote;
  document.getElementById("auteur").innerHTML = motivation[randomMotivationId].author;
}


document.getElementById("aleatoire").addEventListener('click', function() {
  afficher(allQuotes);
});

document.getElementById("sagesse").addEventListener('click', function() {
  afficherSagesse();
  
});

document.getElementById("motivation").addEventListener('click', function() {
   afficherMotivation();
});



function cherche(mot){
  let rechercheParMot = [];
  let rechercheParAuteur = [];
  let tableau = allQuotes.quotes
  console.log(tableau)
  // for (const property in allQuotes.quotes) {
  //   console.log(`${property}: ${allQuotes.quotes[property]}`);
  // }


console.log(mot)
  for (let i = 0; i < tableau.length; i++ ) {
    let citation = tableau[i].quote
    let auteur = tableau[i].author
    console.log(auteur)
    console.log(citation)
    if (citation.includes(mot)) {
      console.log("le mot est bien inclus dans une citation");
      rechercheParMot.push(citation);
      rechercheParAuteur.push(auteur);

    }
  }
    console.log(rechercheParMot)
    console.log(rechercheParAuteur)
  
  if (rechercheParMot != null) {
    let randomIdCitation = Math.floor(Math.random() * rechercheParMot.length); 
    console.log(rechercheParMot[randomIdCitation].quote)
    console.log(rechercheParMot[randomIdCitation].author)
    console.log(rechercheParMot)
    console.log(rechercheParMot[randomIdCitation])
    
    
    document.getElementById("citation").innerHTML = rechercheParMot[randomIdCitation];



    document.getElementById("auteur").innerHTML = rechercheParAuteur[randomIdCitation];
  
  } else {
    
  }

}














//On fait un fetch sur notre fichier json
/* const local = "quotes.json";

async function recupererCitation () {
  const requete = await fetch(local, {
    method: 'GET'
  });
  
  if(!requete.ok) {
    alert('Un problème est survenu.');
  } else {
    let donnees = await requete.json();
    // console.log(donnees);
    document.querySelector('span').textContent = donnees.EUR.last;
  }
}


function afficher(){

  document.getElementById("citation").innerHTML= "L'enfer c'est les autres ";

}

afficher();
document.getElementById("genere").addEventListener('click', afficher); */