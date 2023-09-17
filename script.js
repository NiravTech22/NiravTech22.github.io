document.addEventListener('DOMContentLoaded', function () {
    const teamMembers = document.querySelectorAll('.team-member');
    const bioOverlay = document.getElementById('bio-overlay');
    const bioContent = document.getElementById('bio-content');
    const bioContentInner = document.getElementById('bio-content-inner');
    const closeBio = document.getElementById('close-bio');

    teamMembers.forEach((member) => {
        member.addEventListener('click', () => {
            const bioPage = member.getAttribute('data-bio');
            fetch(bioPage)
                .then((response) => response.text())
                .then((data) => {
                    bioContentInner.innerHTML = data;
                    bioOverlay.style.display = 'block';
                });
        });
    });

    closeBio.addEventListener('click', () => {
        bioOverlay.style.display = 'none';
        bioContentInner.innerHTML = '';
    });
});