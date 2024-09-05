console.log("Coucou !");

/* fetch('quotes.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data.quote);  // Output: la citation
  })
  .catch(function(error) {
    console.error('Error loading JSON:', error);
  });  */

 /*  console.log(data.quote); */

function afficher(){

  document.getElementById("citation").innerHTML= "L'enfer c'est les autres ";

}

afficher();
document.getElementById("genere").addEventListener('click', afficher);