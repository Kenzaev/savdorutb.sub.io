<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Интернет-магазин</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
            line-height: 1.6;
            transition: background-color 0.3s, color 0.3s;
        }

        body.dark-mode {
            background-color: #121212;
            color: #ffffff;
        }

        header {
            background-color: #ffffff;
            color: #000000;
            padding: 1em;
            text-align: center;
            position: relative;
            border-bottom: 1px solid #ccc;
        }

        .menu-button {
            position: absolute;
            top: 10px;
            left: 10px;
            background-color: #ffffff;
            border: 1px solid #ccc;
            color: #000000;
            padding: 0.5em;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s, transform 0.3s;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
            100% {
                transform: scale(1);
            }
        }

        .menu-button:hover {
            background-color: #f0f0f0;
            transform: scale(1.1);
        }

        .menu-panel {
            display: none;
            position: absolute;
            top: 50px;
            left: 10px;
            background-color: #ffffff;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            z-index: 1;
        }

        .menu-panel button {
            background-color: #ffffff;
            border: 1px solid #ccc;
            color: #000000;
            padding: 0.5em 1em;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.3s;
            width: 100%;
            text-align: left;
        }

        .menu-panel button:hover {
            background-color: #f0f0f0;
            transform: scale(1.1);
        }

        main {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1em;
        }

        .gallery {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            max-width: 1200px;
        }

        .product-card {
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            padding: 1.5em;
            text-align: center;
            transition: transform 0.3s, box-shadow 0.3s;
            position: relative;
            width: 100%;
            max-width: 600px;
            margin-bottom: 20px;
            animation: fadeIn 1s ease-in-out;
        }

        body.dark-mode .product-card {
            background-color: #1e1e1e;
            color: #ffffff;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .product-card img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            cursor: pointer;
            transition: transform 0.3s;
        }

        .product-card img:hover {
            transform: scale(1.1);
        }

        .product-card button {
            background-color: #007bff;
            border: none;
            color: #ffffff;
            padding: 0.5em 1em;
            margin: 0.5em;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.3s;
        }

        .product-card button:hover {
            background-color: #0056b3;
            transform: scale(1.1);
        }

        .cart {
            margin-top: 20px;
            width: 100%;
            max-width: 600px;
            background-color: #ffffff;
            border-radius: 8px;
            padding: 1em;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        body.dark-mode .cart {
            background-color: #1e1e1e;
            color: #ffffff;
        }

        .cart-item {
            margin: 5px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .cart-item button {
            background-color: #dc3545;
            border: none;
            color: #ffffff;
            padding: 0.5em;
            margin: 0.5em;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.3s;
        }

        .cart-item button:hover {
            background-color: #c82333;
            transform: scale(1.1);
        }

        .btn {
            margin: 5px;
            padding: 10px;
            background-color: #28a745;
            color: #ffffff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.3s;
        }

        .btn:hover {
            background-color: #218838;
            transform: scale(1.1);
        }

        /* Модальное окно */
        .modal {
            display: none;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.4);
            padding-top: 60px;
        }

        .modal-content {
            background-color: #ffffff;
            margin: 5% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            max-width: 600px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
        }

        body.dark-mode .modal-content {
            background-color: #1e1e1e;
            color: #ffffff;
        }

        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }

        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }

        /* Админ-панель */
        .admin-panel {
            display: none;
            margin-top: 20px;
            width: 100%;
            max-width: 600px;
            background-color: #ffffff;
            border-radius: 8px;
            padding: 1em;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        body.dark-mode .admin-panel {
            background-color: #1e1e1e;
            color: #ffffff;
        }

        .admin-panel input, .admin-panel button {
            margin: 5px;
            padding: 10px;
            width: calc(100% - 22px);
            border-radius: 5px;
            border: 1px solid #ccc;
        }

        /* Responsive Styles */
        @media (max-width: 600px) {
            .gallery {
                flex-direction: column;
            }

            .product-card {
                padding: 1em;
            }

            .cart {
                width: 90%;
            }

            .image-slider img {
                width: 80%;
                height: auto;
                margin: 0 auto;
                display: block;
                position: relative;
                opacity: 0;
                transition: opacity 0.5s ease-in-out;
            }

            .image-slider img.active {
                opacity: 1;
            }
        }

        /* Анимация перехода между картинками */
        .image-slider img {
            width: 100%;
            height: auto;
            margin: 0 auto;
            display: block;
            position: relative;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }

        .image-slider img.active {
            opacity: 1;
        }

        /* Кнопки перелистывания */
        .image-slider-buttons {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .image-slider-buttons button {
            background-color: rgba(0, 123, 255, 0.7);
            border: none;
            color: white;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.3s;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
        }

        .image-slider-buttons button:hover {
            background-color: #0056b3;
            transform: scale(1.1);
        }

        .image-slider-buttons button.left {
            left: 10px;
        }

        .image-slider-buttons button.right {
            right: 10px;
        }

        /* Контейнер для изображений */
        .image-slider {
            position: relative;
            width: 100%;
            height: 400px; /* Фиксированная высота для контейнера изображений */
            overflow: hidden;
        }

        /* Чаты */
        .chat-container {
            display: none;
            position: fixed;
            bottom: 0;
            right: 0;
            width: 100%;
            max-width: 400px;
            height: 400px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            z-index: 1;
        }

        body.dark-mode .chat-container {
            background-color: #1e1e1e;
            color: #ffffff;
        }

        .chat-header {
            background-color: #007bff;
            color: #ffffff;
            padding: 10px;
            text-align: center;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }

        .chat-messages {
            padding: 10px;
            height: 300px;
            overflow-y: auto;
        }

        .chat-message {
            background-color: #f1f1f1;
            padding: 10px;
            margin: 5px 0;
            border-radius: 5px;
        }

        .chat-input {
            width: 100%;
            padding: 10px;
            border: none;
            border-top: 1px solid #ccc;
            border-radius: 0 0 8px 8px;
        }

        /* Социальные сети */
        .social-media {
            position: absolute;
            top: 10px;
            right: 10px;
            display: flex;
            gap: 10px;
        }

        .social-media a {
            text-decoration: none;
            font-size: 24px;
            transition: color 0.3s;
        }

        .social-media a.facebook {
            color: #1877f2;
        }

        .social-media a.instagram {
            color: #e1306c;
        }

        .social-media a.telegram {
            color: #0088cc;
        }

        .social-media a.whatsapp {
            color: #25d366;
        }

        .social-media a.vk {
            color: #4a76a8;
        }

        .social-media a.youtube {
            color: #ff0000;
        }

        .social-media a:hover {
            opacity: 0.7;
        }

        /* Кнопка переключения тем */
        .theme-toggle {
            position: absolute;
            top: 10px;
            right: 180px;
            background-color: transparent;
            border: none;
            color: #000000;
            font-size: 24px;
            cursor: pointer;
            transition: transform 0.3s;
        }

        .theme-toggle:hover {
            transform: scale(1.2);
        }
    </style>
</head>
<body>
    <header>
        <h1>Добро пожаловать в интернет-магазин</h1>
        <input type="text" id="search-bar" placeholder="Поиск..." oninput="filterProducts()" style="padding: 0.5em; width: 80%; max-width: 300px; border-radius: 5px; border: 1px solid #ccc;">
        <button class="menu-button" onclick="toggleMenu()">Меню</button>
        <div class="menu-panel" id="menu-panel">
            <button class="btn" onclick="showMain()">Главная</button>
            <button class="btn" onclick="showRecommended()">Рекомендуемые товары</button>
            <button class="btn" onclick="showCartSection()">Корзина</button>
        </div>
        <div class="social-media">
            <a href="https://www.facebook.com" target="_blank" class="facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/____no_name____.__?igsh=aGJpOW83MmZoZ21o&utm_source=qr" target="_blank" class="instagram"><i class="fab fa-instagram"></i></a>
            <a href="https://t.me/+jav7eB_a5rc4NjZi" target="_blank" class="telegram"><i class="fab fa-telegram"></i></a>
            <a href="https://wa.me/+79964684744" target="_blank" class="whatsapp"><i class="fab fa-whatsapp"></i></a>
            <a href="https://vk.com/id756665575" target="_blank" class="vk"><i class="fab fa-vk"></i></a>
            <a href="https://youtube.com/channel/UCbKThWSdaYNLMaPmdK4XyyA?si=cmyDMGcOSjckE7cw" target="_blank" class="youtube"><i class="fab fa-youtube"></i></a>
        </div>
        <button class="theme-toggle" onclick="toggleTheme()">🌙</button>
    </header>
    <main>
        <section class="gallery" id="product-gallery">
            <!-- Продукты будут добавлены здесь через JavaScript -->
        </section>

        <section class="recommended" id="recommended-gallery" style="display: none;">
            <h2>Рекомендуемые товары</h2>
            <div class="gallery" id="recommended-products">
                <!-- Рекомендуемые продукты будут добавлены здесь через JavaScript -->
            </div>
        </section>

        <section class="cart" id="cart-section" style="display: none;">
            <h2>Корзина</h2>
            <div id="cart-items"></div>
            <button class="btn" onclick="checkout()">Оформить заказ</button>
        </section>

        <div class="admin-panel" id="admin-panel">
            <h2>Админ-панель</h2>
            <input type="text" id="product-name" placeholder="Название товара">
            <input type="number" id="product-price" placeholder="Цена товара">
            <input type="text" id="product-video" placeholder="Ссылка на видео">
            <input type="text" id="product-images" placeholder="Ссылки на изображения (через запятую)">
            <input type="text" id="product-category" placeholder="Категория">
            <label>
                <input type="checkbox" id="is-recommended"> Рекомендуемый товар
            </label>
            <button class="btn" onclick="addProduct()">Добавить товар</button>
        </div>
    </main>

    <!-- Модальное окно -->
    <div id="productModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <h2 id="modalProductName"></h2>
            <div class="image-slider-buttons">
                <button class="btn left" onclick="prevImage()">◀</button>
                <button class="btn right" onclick="nextImage()">▶</button>
            </div>
            <div id="modalProductImages" class="image-slider"></div>
            <p id="modalProductPrice"></p>
            <div>
                <button class="btn" onclick="decreaseQuantity()">-</button>
                <span id="modalProductQuantity">1</span>
                <button class="btn" onclick="increaseQuantity()">+</button>
            </div>
            <button class="btn" onclick="addToCartFromModal()">Добавить в корзину</button>
            <h3>Отзывы:</h3>
            <div id="modalProductReviews"></div>
            <button class="btn" onclick="openTelegramChat()">Открыть чат</button>
        </div>
    </div>

    <!-- Чаты -->
    <div id="chatContainer" class="chat-container">
        <div class="chat-header">
            <span class="close" onclick="closeChat()">&times;</span>
            <h3>Чат</h3>
        </div>
        <div class="chat-messages" id="chatMessages"></div>
        <input type="text" id="chatInput" class="chat-input" placeholder="Напишите сообщение..." onkeypress="sendMessage(event)">
    </div>

    <script>
        let products = [];
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let currentProduct = null;
        let currentQuantity = 1;
        let isAdmin = false;
        let currentImageIndex = 0;
        let chatMessages = [];

        // Функция для загрузки товаров из products.json
        async function loadProducts() {
            try {
                const response = await fetch('products.json');
                if (!response.ok) {
                    throw new Error('Ошибка при загрузке товаров');
                }
                products = await response.json();
                displayProducts();
                displayRecommendedProducts();
            } catch (error) {
                console.error('Ошибка при загрузке товаров:', error);
            }
        }

        // Функция для отображения всех товаров
        function displayProducts() {
            const productsDiv = document.getElementById("product-gallery");
            productsDiv.innerHTML = '';
            products.forEach((product, index) => {
                const productDiv = document.createElement("div");
                productDiv.className = "product-card";
                productDiv.innerHTML = `
                    <h2>${product.name}</h2>
                    <img src="${product.images[0]}" alt="${product.name}" onclick="openModal(${index})">
                    <p>Цена: ${product.price}₽</p>
                    <button class="btn" onclick="orderNow('${product.name}')">Заказать сейчас</button>
                    <button class="btn" onclick="addToCart('${product.name}', ${product.price})">В корзину</button>
                    <button class="btn" onclick="viewVideo('${product.video}')">Обзор</button>
                    ${isAdmin ? `<button class="btn" onclick="deleteProduct(${index})">Удалить</button>` : ''}
                    <button class="btn" onclick="openTelegramChat()">Отзывы</button>
                `;
                productsDiv.appendChild(productDiv);
            });
        }

        // Функция для отображения рекомендуемых товаров
        function displayRecommendedProducts() {
            const recommendedDiv = document.getElementById("recommended-products");
            recommendedDiv.innerHTML = '';
            const recommendedProducts = products.filter(product => product.isRecommended);
            recommendedProducts.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.className = "product-card";
                productDiv.innerHTML = `
                    <h2>${product.name}</h2>
                    <img src="${product.images[0]}" alt="${product.name}" onclick="openModal(${index})">
                    <p>Цена: ${product.price}₽</p>
                    <button class="btn" onclick="orderNow('${product.name}')">Заказать сейчас</button>
                    <button class="btn" onclick="addToCart('${product.name}', ${product.price})">В корзину</button>
                    <button class="btn" onclick="viewVideo('${product.video}')">Обзор</button>
                `;
                recommendedDiv.appendChild(productDiv);
            });
        }

        function displayCart() {
            const cartItemsDiv = document.getElementById("cart-items");
            cartItemsDiv.innerHTML = '';
            cart.forEach((item, index) => {
                const cartItemDiv = document.createElement("div");
                cartItemDiv.className = "cart-item";
                cartItemDiv.innerHTML = `
                    <p>${item.name} - ${item.price}₽ x ${item.quantity}</p>
                    <button class="btn" onclick="removeFromCart(${index})">Удалить</button>
                `;
                cartItemsDiv.appendChild(cartItemDiv);
            });
        }

        function orderNow(name) {
            window.open(`https://wa.me/+79964684744?text=Я хочу заказать ${name}`, '_blank');
        }

        function addToCart(name, price, quantity = 1) {
            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({ name, price, quantity });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${name} добавлен в корзину!`);
            displayCart();
        }

        function addToCartFromModal() {
            if (currentProduct) {
                addToCart(currentProduct.name, currentProduct.price, currentQuantity);
                closeModal();
            }
        }

        function viewVideo(videoUrl) {
            window.open(videoUrl, '_blank');
        }

        function openModal(index) {
            currentProduct = products[index];
            currentQuantity = 1;
            currentImageIndex = 0;
            document.getElementById("modalProductName").innerText = currentProduct.name;
            const modalProductImages = document.getElementById("modalProductImages");
            modalProductImages.innerHTML = '';
            currentProduct.images.forEach(image => {
                const img = document.createElement('img');
                img.src = image;
                img.alt = currentProduct.name;
                if (image === currentProduct.images[0]) {
                    img.classList.add('active');
                }
                modalProductImages.appendChild(img);
            });
            document.getElementById("modalProductPrice").innerText = `Цена: ${currentProduct.price}₽`;
            document.getElementById("modalProductQuantity").innerText = currentQuantity;
            document.getElementById("productModal").style.display = "block";
            loadReviewsInModal(currentProduct.name);
        }

        function closeModal() {
            document.getElementById("productModal").style.display = "none";
            currentProduct = null;
            currentQuantity = 1;
            currentImageIndex = 0;
        }

        function increaseQuantity() {
            currentQuantity++;
            document.getElementById("modalProductQuantity").innerText = currentQuantity;
        }

        function decreaseQuantity() {
            if (currentQuantity > 1) {
                currentQuantity--;
                document.getElementById("modalProductQuantity").innerText = currentQuantity;
            }
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCart();
        }

        function checkout() {
            if (cart.length > 0) {
                const cartItems = cart.map(item => `${item.name} - ${item.price}₽ x ${item.quantity}`).join(', ');
                window.open(`https://wa.me/+79964684744?text=Я хочу заказать: ${cartItems}`, '_blank');
            } else {
                alert('Ваша корзина пуста');
            }
        }

        function filterProducts() {
            const searchQuery = document.getElementById('search-bar').value.toLowerCase();
            const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));
            displayProducts(filteredProducts);
        }

        // Инициализация отображения продуктов
        loadProducts();
        displayCart();

        // Функции для админ-панели
        function toggleMenu() {
            const menuPanel = document.getElementById("menu-panel");
            menuPanel.style.display = menuPanel.style.display === "block" ? "none" : "block";
        }

        function showMain() {
            document.getElementById("product-gallery").style.display = "grid";
            document.getElementById("recommended-gallery").style.display = "none";
            document.getElementById("cart-section").style.display = "none";
            toggleMenu();
        }

        function showRecommended() {
            document.getElementById("product-gallery").style.display = "none";
            document.getElementById("recommended-gallery").style.display = "block";
            document.getElementById("cart-section").style.display = "none";
            toggleMenu();
        }

        function showCartSection() {
            document.getElementById("product-gallery").style.display = "none";
            document.getElementById("recommended-gallery").style.display = "none";
            document.getElementById("cart-section").style.display = "block";
            toggleMenu();
        }

        // Функции для работы с отзывами
        async function loadReviewsInModal(productName) {
            try {
                const response = await fetch('pleys.json');
                const reviews = await response.json();
                const productReviews = reviews[productName] || [];
                const reviewsDiv = document.getElementById('modalProductReviews');
                reviewsDiv.innerHTML = productReviews.map(review => `<p>${review}</p>`).join('');
            } catch (error) {
                console.error('Ошибка при загрузке отзывов:', error);
            }
        }

        function openReviewsModal(index) {
            currentProduct = products[index];
            document.getElementById("modalProductName").innerText = currentProduct.name;
            document.getElementById("productModal").style.display = "block";
            loadReviewsInModal(currentProduct.name);
        }

        async function addReview() {
            const reviewText = document.getElementById('review-text').value;
            if (reviewText) {
                try {
                    const response = await fetch('pleys.json');
                    const reviews = await response.json();
                    const productName = currentProduct.name;
                    if (!reviews[productName]) {
                        reviews[productName] = [];
                    }
                    reviews[productName].push(reviewText);
                    await fetch('pleys.json', {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(reviews)
                    });
                    loadReviewsInModal(productName);
                    document.getElementById('review-text').value = '';
                    alert('Отзыв добавлен!');
                } catch (error) {
                    console.error('Ошибка при добавлении отзыва:', error);
                }
            } else {
                alert('Пожалуйста, введите отзыв');
            }
        }

        // Функции для перелистывания изображений
        function nextImage() {
            const images = currentProduct.images;
            currentImageIndex = (currentImageIndex + 1) % images.length;
            const modalProductImages = document.getElementById("modalProductImages");
            modalProductImages.innerHTML = '';
            images.forEach((image, index) => {
                const img = document.createElement('img');
                img.src = image;
                img.alt = currentProduct.name;
                if (index === currentImageIndex) {
                    img.classList.add('active');
                }
                modalProductImages.appendChild(img);
            });
        }

        function prevImage() {
            const images = currentProduct.images;
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            const modalProductImages = document.getElementById("modalProductImages");
            modalProductImages.innerHTML = '';
            images.forEach((image, index) => {
                const img = document.createElement('img');
                img.src = image;
                img.alt = currentProduct.name;
                if (index === currentImageIndex) {
                    img.classList.add('active');
                }
                modalProductImages.appendChild(img);
            });
        }

        // Функции для работы с чатом
        function openChat() {
            document.getElementById("chatContainer").style.display = "block";
            loadChatMessages();
        }

        function closeChat() {
            document.getElementById("chatContainer").style.display = "none";
        }

        function loadChatMessages() {
            const chatMessagesDiv = document.getElementById("chatMessages");
            chatMessagesDiv.innerHTML = chatMessages.map(message => `<div class="chat-message">${message}</div>`).join('');
        }

        function sendMessage(event) {
            if (event.key === 'Enter') {
                const message = document.getElementById('chatInput').value;
                if (message) {
                    chatMessages.push(message);
                    loadChatMessages();
                    document.getElementById('chatInput').value = '';
                }
            }
        }

        // Функция для переключения темы
        function toggleTheme() {
            document.body.classList.toggle('dark-mode');
        }

        // Функция для открытия чата в Telegram
        function openTelegramChat() {
            window.open('https://t.me/dtUsBXdlcvYxMmJi', '_blank');
        }
    </script>
</body>
</html>
