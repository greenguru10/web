products = [
    {"name": "Eco-Friendly Water Bottle", "price": 24.99, "reviewCount": 200, "sustainabilityScore": 9, "description": "Our Eco-Friendly Water Bottle is made from 100% recycled materials and is BPA-free.", "imageUrl": "/images/water_bottle.jpg", "colors": ["Green", "Blue", "Black"], "sizes": ["500ml", "750ml", "1L"]},
    {"name": "Reusable Bamboo Straw", "price": 5.99, "reviewCount": 120, "sustainabilityScore": 10, "description": "These reusable bamboo straws are eco-friendly and biodegradable.", "imageUrl": "/images/bamboo_straw.jpg", "colors": ["Natural", "Green"], "sizes": ["6 inches", "8 inches"]},
    # Add more products
]

template = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Details - GreenGuru Store</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="sticky-header">
        <div class="container">
            <a href="/" class="logo">GreenGuru Store</a>
            <nav class="main-nav">
                <a href="/">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
            <button id="darkModeToggle" class="dark-mode-toggle" aria-label="Toggle dark mode">
                <img src="sun.svg" alt="Light mode" class="sun-icon">
                <img src="moon.svg" alt="Dark mode" class="moon-icon">
            </button>
        </div>
    </header>

    <main class="container">
        <nav class="breadcrumbs">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/shop">Shop</a></li>
                <li>{name}</li>
            </ul>
        </nav>

        <div class="product-details">
            <div class="product-images">
                <div class="main-image">
                    <img src="{imageUrl}" alt="{name} - Main Image" id="mainImage">
                </div>
            </div>
            <div class="product-info">
                <h1>{name}</h1>
                <div class="rating">
                    <span class="review-count">({reviewCount} reviews)</span>
                </div>
                <p class="price">${price}</p>
                <span class="sustainability-score">Sustainability Score: {sustainabilityScore}/10</span>
                <p class="description">{description}</p>
            </div>
        </div>
    </main>
    <footer>
        <div class="container">
            <!-- Footer content -->
        </div>
    </footer>
</body>
</html>
"""

for product in products:
    with open(f"{product['name'].replace(' ', '_').lower()}.html", "w") as file:
        file.write(template.format(**product))
