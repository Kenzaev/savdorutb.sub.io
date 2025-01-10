// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const menuButton = document.getElementById('menu-button');
    const menuPanel = document.getElementById('menu-panel');
    const cartButton = document.getElementById('cart-button');
    const cartPopup = document.getElementById('cart-popup');
    const searchBar = document.getElementById('search-bar');
    const productGallery = document.getElementById('product-gallery');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let products = [];

    // Fetch products from products.json
    fetch('products/products.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            displayProducts(products);
        })
        .catch(error => console.error('Error fetching products:', error));

    // Toggle dark mode
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-sun');
        icon.classList.toggle('fa-moon');
    });

    // Toggle menu panel
    menuButton.addEventListener('click', function() {
        menuPanel.style.display = menuPanel.style.display === 'block' ? 'none' : 'block';
    });

    // Toggle cart popup
    cartButton.addEventListener('click', function() {
        cartPopup.classList.toggle('show');
    });

    // Filter products by search query
    searchBar.addEventListener('input', function() {
        const query = searchBar.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
        displayProducts(filteredProducts);
    });

    // Display products
    function displayProducts(products) {
        productGallery.innerHTML = '';
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product-card';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button onclick="addToCart('${product.name}', ${product.price})">Добавить в корзину</button>
            `;
            productGallery.appendChild(productDiv);
        });
    }

    // Add to cart
    window.addToCart = function(name, price) {
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    };

    // Update cart display
    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <p>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</p>
                <button onclick="removeFromCart('${item.name}')">Удалить</button>
            `;
            cartItems.appendChild(cartItem);
            total += item.price * item.quantity;
        });
        cartTotal.innerText = `Общая сумма: $${total.toFixed(2)}`;
    }

    // Remove from cart
    window.removeFromCart = function(name) {
        cart = cart.filter(item => item.name !== name);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    };

    // Initial cart display
    updateCart();
});
