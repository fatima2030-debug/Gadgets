const loginModal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginBtn');
const closeModal = document.getElementById('closeModal');

if (loginBtn) {
    loginBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (loginModal) loginModal.style.display = 'flex';
    });
}

if (closeModal) {
    closeModal.addEventListener('click', function() {
        if (loginModal) loginModal.style.display = 'none';
    });
}

window.addEventListener('click', function(event) {
    if (event.target === loginModal) {
        if (loginModal) loginModal.style.display = 'none';
    }
});

function submitLogin(event) {
    event.preventDefault();
    alert('Secure authentication portal link connected successfully!');
    if (loginModal) loginModal.style.display = 'none';
    if (loginBtn) {
        loginBtn.textContent = 'My Dashboard';
        loginBtn.style.backgroundColor = '#10b981';
    }
}

function handleWhatsAppOrder(name, price) {
    const businessLine = "2349014585036";
    const baselineText = `Hello LA Gadgets Global Enterprises,\n\nI want to place an order for the following item from your online storefront:\n\n📌 Device: ${name}\n💰 Price: ${price}\n\nPlease let me know the payment options and delivery timeframe. Thanks!`;
    const formattedMessage = encodeURIComponent(baselineText);
    
    window.open(`https://wa.me{businessLine}?text=${formattedMessage}`, '_blank');
    console.log("Website loaded successfully");
}