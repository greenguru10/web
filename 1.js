document.addEventListener('DOMContentLoaded', function() {
    const product = {
        id: 1,
        name: "Eco-Friendly Water Bottle",
        price: 24.99,
        rating: 4.5,
        reviewCount: 200,
        description: "Our Eco-Friendly Water Bottle is made from 100% recycled materials and is BPA-free. It keeps your drinks cold for up to 24 hours and hot for up to 12 hours. Perfect for outdoor adventures or daily use!",
        sustainabilityScore: 9,
        images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
        colors: ["Green", "Blue", "Black"],
        sizes: ["500ml", "750ml", "1L"],
    };

    const darkModeToggle = document.getElementById('darkModeToggle');
    const mainImage = document.getElementById('mainImage');
    const thumbnailImages = document.getElementById('thumbnailImages');
    const zoomButton = document.getElementById('zoomButton');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const closeLightbox = document.getElementById('closeLightbox');
    const prevImage = document.getElementById('prevImage');
    const nextImage = document.getElementById('nextImage');
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const reviewsTab = document.getElementById('reviews');
    const customerReviews = document.querySelector('.review-cards');
    const relatedProducts = document.querySelector('.product-grid');
    const newsletterForm = document.getElementById('newsletterForm');

    let currentImageIndex = 0;

    // Dark mode toggle
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }

    // Populate product images
    function populateImages() {
        product.images.forEach((img, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = img;
            thumbnail.alt = `${product.name} - Thumbnail ${index + 1}`;
            thumbnail.classList.add('thumbnail');
            if (index === 0) thumbnail.classList.add('active');
            thumbnail.addEventListener('click', () => {
                mainImage.src = img;
                document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
                thumbnail.classList.add('active');
                currentImageIndex = index;
            });
            thumbnailImages.appendChild(thumbnail);
        });
    }

    // Lightbox functionality
    zoomButton.addEventListener('click', openLightbox);
    closeLightbox.addEventListener('click', closeLightboxFunc);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightboxFunc();
    });
    prevImage.addEventListener('click', showPrevImage);
    nextImage.addEventListener('click', showNextImage);

    function openLightbox() {
        lightbox.style.display = 'block';
        lightboxImage.src = product.images[currentImageIndex];
    }

    function closeLightboxFunc() {
        lightbox.style.display = 'none';
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + product.images.length) % product.images.length;
        lightboxImage.src = product.images[currentImageIndex];
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % product.images.length;
        lightboxImage.src = product.images[currentImageIndex];
    }

    // Tab functionality
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(button.dataset.tab).classList.add('active');
        });
    });

    // Populate reviews
    function populateReviews() {
        const reviewsHTML = Array(3).fill().map((_, i) => `
            <div class="review-card">
                <div class="rating">
                    ${Array(5).fill().map((_, j) => `
                        <span class="star">${j < 4 ? '★' : '☆'}</span>
                    `).join('')}
                </div>
                <p class="review-title">Great product!</p>
                <p class="review-text">This water bottle is amazing. It keeps my drinks cold all day long.</p>
                <p class="review-author">John D. - June ${i + 1}, 2023</p>
            </div>
        `).join('');
        reviewsTab.innerHTML = reviewsHTML;
    }

    // Populate customer reviews
    function populateCustomerReviews() {
        const reviewsHTML = Array(3).fill().map((_, i) => `
            <div class="review-card">
                <div class="rating">
                    ${Array(5).fill().map((_, j) => `
                        <span class="star">${j < 4 ? '★' : '☆'}</span>
                    `).join('')}
                </div>
                <p>"Great eco-friendly product! Highly recommend!"</p>
                <strong>- Customer ${i + 1}</strong>
            </div>
        `).join('');
        customerReviews.innerHTML = reviewsHTML;
    }

    // Populate related products
    function populateRelatedProducts() {
        const productsHTML = Array(4).fill().map((_, i) => `
            <div class="product-card">
                <img src="/placeholder.svg" alt="Related Product ${i + 1}">
                <h3>Eco-Friendly Product ${i + 1}</h3>
                <p>Short description of the product.</p>
                <div class="product-card-footer">
                    <span class="price">$${(19.99 + i).toFixed(2)}</span>
                    <button class="view-button">View</button>
                </div>
            </div>
        `).join('');
        relatedProducts.innerHTML = productsHTML;
    }

    // Newsletter form submission
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });

    // Initialize
    populateImages();
    populateReviews();
    populateCustomerReviews();
    populateRelatedProducts();
});
document.addEventListener("DOMContentLoaded", () => {
    // Function to get cart items from localStorage
    const getCartItems = () => {
        return JSON.parse(localStorage.getItem("cart")) || [];
    };

    // Function to save cart items to localStorage
    const saveCartItems = (cartItems) => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    };

    // Function to update cart button text
    const updateCartButton = () => {
        const cartItems = getCartItems();
        const cartButton = document.getElementById("cartButton");
        const itemCount = cartItems.length;
        cartButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            My Cart (${itemCount})
        `;
    };
    document.getElementById('cartButton').addEventListener('click', function() {
        window.location.href = '../cart.html';  // Redirects to cart.html
    });
    

    // Event listener for the "Add to Cart" button
    const addToCartButton = document.querySelector(".add-to-cart-btn");
    addToCartButton.addEventListener("click", () => {
        // Get selected color and size
        const selectedColor = document.getElementById("colorSelect").value;
        const selectedSize = document.getElementById("sizeSelect").value;

        // Define the product object
        const product = {
            name: "Eco-Friendly Water Bottle",
            price: 24.99,
            color: selectedColor,
            size: selectedSize,
            quantity: 1, // You can later add a quantity selector if needed
        };

        // Get existing cart items
        const cartItems = getCartItems();

        // Check if the item already exists in the cart
        const existingItemIndex = cartItems.findIndex(
            (item) => item.name === product.name && item.color === product.color && item.size === product.size
        );

        if (existingItemIndex >= 0) {
            // If the item already exists, update the quantity
            cartItems[existingItemIndex].quantity += 1;
        } else {
            // Otherwise, add the new product to the cart
            cartItems.push(product);
        }

        // Save the updated cart to localStorage
        saveCartItems(cartItems);

        // Update the cart button with the new number of items
        updateCartButton();

        // Notify the user
        alert("Product added to cart!");
    });

    // Initialize the cart button with the current number of items
    updateCartButton();
});
