

// On transforme le chemin relatif de notre fichier json en URL afin de pouvoir effectuer un fetch dessus

let allQuotes;

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
  console.log(dataFetch);
  //let idQuote = donneesJson.q ;
  console.log("qu'affiche tu?");

  let randomId = Math.floor(Math.random() * dataFetch.quotes.length);
  console.log(randomId);
  document.getElementById("citation").innerHTML= dataFetch.quotes[randomId].quote;
  document.getElementById("auteur").innerHTML= dataFetch.quotes[randomId].author;

}


document.getElementById("genere").addEventListener('click', function() {
  afficher(allQuotes);
});







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