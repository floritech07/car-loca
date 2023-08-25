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
 