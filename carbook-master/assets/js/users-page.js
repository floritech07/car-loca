// Update fuel amount based on range point position
const fuelRange = document.querySelector('.range-bar');
const fuelPoint = document.getElementById('fuelPoint');
const fuelAmount = document.getElementById('fuelAmount');

fuelRange.addEventListener('mousedown', (e) => {
  e.preventDefault();
  fuelPoint.style.transition = 'none';

  const rangeWidth = fuelRange.clientWidth;
  const offsetX = e.clientX - fuelRange.getBoundingClientRect().left;
  const fuelValue = Math.round((offsetX / rangeWidth) * 100);

  fuelPoint.style.left = `${fuelValue}%`;
  fuelAmount.textContent = fuelValue;

  document.addEventListener('mousemove', dragFuel);
  document.addEventListener('mouseup', stopDragFuel);

  function dragFuel(e) {
    const offsetX = e.clientX - fuelRange.getBoundingClientRect().left;
    const fuelValue = Math.round((offsetX / rangeWidth) * 100);

    fuelPoint.style.left = `${fuelValue}%`;
    fuelAmount.textContent = fuelValue;
  }

  function stopDragFuel() {
    document.removeEventListener('mousemove', dragFuel);
    document.removeEventListener('mouseup', stopDragFuel);
    fuelPoint.style.transition = 'left 0.3s ease-out';
  }
});

// Update price amount based on range point position
const priceRange = document.querySelectorAll('.range-bar')[1];
const pricePoint = document.getElementById('pricePoint');
const priceAmount = document.getElementById('priceAmount');

priceRange.addEventListener('mousedown', (e) => {
  e.preventDefault();
  pricePoint.style.transition = 'none';

  const rangeWidth = priceRange.clientWidth;
  const offsetX = e.clientX - priceRange.getBoundingClientRect().left;
  const priceValue = Math.round((offsetX / rangeWidth) * 100);

  pricePoint.style.left = `${priceValue}%`;
  priceAmount.textContent = `$${priceValue * 5}`;

  document.addEventListener('mousemove', dragPrice);
  document.addEventListener('mouseup', stopDragPrice);

  function dragPrice(e) {
    const offsetX = e.clientX - priceRange.getBoundingClientRect().left;
    const priceValue = Math.round((offsetX / rangeWidth) * 100);

    pricePoint.style.left = `${priceValue}%`;
    priceAmount.textContent = `$${priceValue * 5}`;
  }

  function stopDragPrice() {
    document.removeEventListener('mousemove', dragPrice);
    document.removeEventListener('mouseup', stopDragPrice);
    pricePoint.style.transition = 'left 0.3s ease-out';
  }
});
    document.addEventListener('DOMContentLoaded', function () {
        var showButton = document.getElementById('showButton');
        var hiddenSection = document.getElementById('hiddenSection');

        showButton.addEventListener('click', function () {
            if (hiddenSection.style.display === 'none' || hiddenSection.style.display === '') {
                hiddenSection.style.display = 'block';
            } else {
                hiddenSection.style.display = 'none';
            }
        });
    });
  // Sélectionnez les liens de la barre latérale
  const sidebarLinks = document.querySelectorAll('.sidebar-nav .nav-link');

  // Sélectionnez la section principale
  const mainContent = document.getElementById('main');

  // Associez un gestionnaire d'événements au clic sur chaque lien de la barre latérale
  sidebarLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      // Récupérez le contenu à afficher à partir de l'attribut data-content du lien
      const contentId = link.getAttribute('data-content');

      // Chargez le contenu correspondant dans la section principale
      fetchContent(contentId);
    });
  });

  // Fonction pour charger le contenu correspondant dans la section principale
  function fetchContent(contentId) {
    // Ajoutez votre logique pour charger le contenu en fonction de contentId
    // Par exemple, vous pourriez utiliser des templates HTML pré-définis
    // et remplacer le contenu de la section principale avec le contenu approprié.
  }

