

// On transforme le chemin relatif de notre fichier json en URL afin de pouvoir effectuer un fetch dessus


fetch(chrome.runtime.getURL('quotes.json'))
  .then(function(response) {
    /* console.log(response); */
    return response.json();
  })
  .then(function(data) {
    console.log(data);  // Ceci affichera l'objet JSON dans la console
   
    afficher(data);
   //continuer le math.random+
    console.log(data.quotes[2].quote, data.quotes[2].author);
    return(data);
    
  })
  
  .catch(function(error) {
    console.error("Erreur lors du chargement du fichier JSON : ", error);
  });
  

function afficher(dataFetch) {
  //let idQuote = donneesJson.q ;
  console.log("qu'affiche tu?");
  document.getElementById("citation").innerHTML= dataFetch.quotes[2].quote;
  document.getElementById("auteur").innerHTML= dataFetch.quotes[2].author;

}


document.getElementById("genere").addEventListener('click', afficher);







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