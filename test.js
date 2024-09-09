// Liste des sprites
const spriteList = [
  chrome.runtime.getURL("img/perso1.PNG"),
  chrome.runtime.getURL("img/perso2.PNG"),
  chrome.runtime.getURL("img/perso3.PNG"),
  chrome.runtime.getURL("img/perso4.PNG")
];
//Du coup nous ça se présente comme ça, le tableau simple avec le chemin direct en local marchait pas
//et ça c'est comment on l'a intégré au HTML
// Mise à jour du contenu et de la position de la popup
  popup.innerHTML = <p>${definition}</p><img src="${chrome.runtime.getURL('img/perso1.PNG')}" alt="Sprite">;</img>
  /* du coup le chemin d'accès de l'image en locale est devenue ${chrome.runtime.getURL('img/perso1.PNG')}
et ça c'est dans le manifeste > */
"web_accessible_resources": [
  {
    "resources": [
      "img/perso1.PNG",
      "img/perso2.PNG",
      "img/perso3.PNG",
      "img/perso4.PNG"
    ],
    "matches": ["<all_urls>"]
  }
]
}