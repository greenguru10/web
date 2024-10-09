document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Hero image rotation
    const heroImage = document.getElementById('hero-image');
    const heroImages = [
        "/placeholder.svg?height=300&width=600&text=Eco-Friendly+Product+1",
        "/placeholder.svg?height=300&width=600&text=Eco-Friendly+Product+2",
        "/placeholder.svg?height=300&width=600&text=Eco-Friendly+Product+3",
    ];
    let currentImageIndex = 0;

    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        heroImage.src = heroImages[currentImageIndex];
    }, 5000);

    // Featured products data
    const featuredProducts = [
        { id: 1, name: "Bamboo Toothbrush", price: 5.99, image: "/placeholder.svg?height=200&width=200", description: "Made of Neem Tree" },
        { id: 2, name: "Family Toothbrush Set", price: 15.99, image: "/placeholder.svg?height=200&width=200", description: "Made of three different materials" },
        { id: 3, name: "Eco Pouch", price: 9.99, image: "/placeholder.svg?height=200&width=200", description: "Eco-friendly cover for bottles" },
    ];

    // Render featured products
    const productGrid = document.getElementById('featured-products');
    featuredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-content">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
            </div>
            <div class="product-footer">
                <span class="product-price">$${product.price.toFixed(2)}</span>
                <button class="btn btn-outline">View Details</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });

    // Business listings data
    const businessListings = [
        { name: "EcoHome Solutions", description: "Sustainable home improvement products", rating: 4.5 },
        { name: "GreenBeauty Co.", description: "Organic and cruelty-free cosmetics", rating: 4.8 },
        { name: "EarthWear Apparel", description: "Eco-friendly fashion for all", rating: 4.2 },
    ];

    // Render business listings
    const businessGrid = document.getElementById('eco-businesses');
    businessListings.forEach(business => {
        const businessCard = document.createElement('div');
        businessCard.className = 'business-card';
        businessCard.innerHTML = `
            <h3 class="business-name">${business.name}</h3>
            <p class="business-description">${business.description}</p>
            <div class="business-rating">
                <span class="star-icon">★</span>
                <span>${business.rating.toFixed(1)}</span>
            </div>
        `;
        businessGrid.appendChild(businessCard);
    });

    // Blog articles data
    const blogArticles = [
        { title: "10 Easy Ways to Reduce Your Carbon Footprint", image: "/placeholder.svg?height=200&width=300", category: "Lifestyle" },
        { title: "The Rise of Sustainable Fashion: Trends to Watch", image: "/placeholder.svg?height=200&width=300", category: "Fashion" },
        { title: "How to Create an Eco-Friendly Home Office", image: "/placeholder.svg?height=200&width=300", category: "Home" },
    ];

    // Render blog articles
    const articleGrid = document.getElementById('blog-articles');
    blogArticles.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.className = 'article-card';
        articleCard.innerHTML = `
            <img src="${article.image}" alt="${article.title}" class="article-image">
            <div class="article-content">
                <span class="article-category">${article.category}</span>
                <h3 class="article-title">${article.title}</h3>
                <a href="#" class="btn btn-outline">Read More</a>
            </div>
        `;
        articleGrid.appendChild(articleCard);
    });

    // Handle newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with email: ${email}`);
        e.target.reset();
    });
    // script.js
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.carousel-image');
    let currentImageIndex = 0;
    const totalImages = images.length;

    function showNextImage() {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        images[currentImageIndex].classList.add('active');
    }

    // Change image every 3 seconds
    setInterval(showNextImage, 3000);
});

});