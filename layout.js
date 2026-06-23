// Gather interactive DOM Node Element objects
const loginModal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginBtn');
const closeModal = document.getElementById('closeModal');

/**
 * Open portal management login modal framework screen overlays
 * @param {Event} event - System interaction event tracking object
 */
loginBtn.addEventListener('click', function(event) {
    event.preventDefault();
    loginModal.style.display = 'flex';
});

/**
 * Remove view element node modal visibility fields from window
 */
closeModal.addEventListener('click', function() {
    loginModal.style.display = 'none';
});

/**
 * Handle structural event parameter resets for background clicks
 */
window.addEventListener('click', function(event)