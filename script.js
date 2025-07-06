// Sélectionne le bouton et le paragraphe pour afficher la blague
const btnBlague = document.getElementById('btn-blague');
const blagueParagraphe = document.getElementById('blague');

// URL de l'API backend déployée (change par ta vraie URL Render)
const API_URL = 'https://carambar-api-4ox1.onrender.com/api/v1/blagues/random';

// Ajoute un événement au clic du bouton
btnBlague.addEventListener('click', async () => {
  try {
    // Affiche un message de chargement pendant l'appel à l'API
    blagueParagraphe.textContent = 'Chargement…';

    // Appelle l'API pour récupérer une blague aléatoire
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Erreur réseau');

    const data = await response.json();

    // Affiche la blague dans la page
    blagueParagraphe.textContent = data.texte;
  } catch (error) {
    // En cas d'erreur, affiche un message à la place
    blagueParagraphe.textContent = 'Impossible de récupérer une blague.';
    console.error(error);
  }
});

