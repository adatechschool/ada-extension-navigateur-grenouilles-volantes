

// On transforme le chemin relatif de notre fichier json en URL afin de pouvoir effectuer un fetch dessus


fetch(chrome.runtime.getURL('quotes.json'))
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);  // Ceci affichera l'objet JSON dans la console
    return(data);
  })
  .catch(function(error) {
    console.error("Erreur lors du chargement du fichier JSON : ", error);
  });


function afficher() {

  document.getElementById("citation").popup.innerHTML= "<p></p>";

}
afficher();

document.getElementById("genere").addEventListener('click', afficher);







//On fait un fetch sur notre fichier json
const local = "quotes.json";

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
document.getElementById("genere").addEventListener('click', afficher);