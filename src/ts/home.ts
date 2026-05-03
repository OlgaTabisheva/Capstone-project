import { renderHeader, updateCartCount } from './components/header';
import { renderBanner } from './components/banner';
import { renderProducts } from './components/products';
import { renderFeatures } from './components/features';
import { renderSpecialOffer } from './components/specialOffer';
import { renderReviews } from './components/reviews';
import { renderFooter } from './components/footer';
import './../scss/layouts/header.scss';
import './../scss/layouts/footer.scss';
import './../scss/components/_banner.scss';
import './../scss/components/_features.scss';
import './../scss/components/_products.scss';
import './../scss/components/_specialOffer.scss';
import './../scss/components/reviews.scss';
import './../scss/components/_buttons.scss';
import './../scss/main.scss';

const featureData = [
    {
        title: "Duis vestibulum elit vel neque.",
        description: "Duis vestibulum vel neque pharetra vulputate. Quisque scelerisque nisi.",
        image: "assets/images/Homepage/suitcase real-live.png"
    },
    {
        title: "Neque vestibulum elit nequvel.",
        description: "Duis vestibulum vel neque pharetra vulputate. Quisque scelerisque nisi.",
        image: "assets/images/Homepage/suitcase real-live-1.png"
    },
    {
        title: "Elituis stibulum elit velneque.",
        description: "Duis vestibulum vel neque pharetra vulputate. Quisque scelerisque nisi.",
        image: "assets/images/Homepage/suitcase real-live-2.png"
    },
    {
        title: "Vel vestibulum elit tuvel euqen.",
        description: "Duis vestibulum vel neque pharetra vulputate. Quisque scelerisque nisi.",
        image: "assets/images/Homepage/suitcase real-live-3.png"
    }
];

const offerData = {
    percent: "50 %",
    shortText: "Curabitur vulputate arcu odio, ac facilisis diam.",
    title: "Offer Of The Month",
    description: "Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet leo in vulputate.",
    buttonText: "Get Offer Today",
    backgroundImage: "assets/images/Homepage/offer of the month image.png"
};

const myReviews = [
    {
        id: 1,
        userName: "Ethan Wade",
        location: "New York",
        text: "Curabitur vulputate arcu odio, ac facilisis diam accumsan ut.",
        avatar: "assets/images/Homepage/grateful customer 1.png"
    },
    {
        id: 1,
        userName: "Jane Reyes",
        location: "California",
        text: "Curabitur vulputate arcu odio, ac facilisis diam accumsan ut.",
        avatar: "assets/images/Homepage/grateful customer 2.png"
    },
    {
        id: 1,
        userName: "Erica Banks",
        location: "Miami",
        text: "Curabitur vulputate arcu odio, ac facilisis diam accumsan ut.",
        avatar: "assets/images/Homepage/grateful customer 3.png"
    },
];

const fetchProducts = async () => {
    try {
        const response = await fetch('assets/data.json');
        const data = await response.json();
        return data.data;
    } catch (e) {
        console.error("Failed to fetch products", e);
        return [];
    }
}

const addToCart = (product: any) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find((item: any) => item.id === product.id);
    if (existing) {
        existing.quantity += 1;
    } else {
        const fileName = product.imageUrl.split('/').pop();
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: `assets/images/suitcases/${fileName}`
        });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name} added to cart!`);
}

const setupHomeEventListeners = (allProducts: any[]) => {
    document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;

        // Add to cart
        if (target.classList.contains('btn') && target.hasAttribute('data-id')) {
            const id = target.getAttribute('data-id');
            const product = allProducts.find(p => p.id === id);
            if (product) {
                addToCart(product);
            }
            return;
        }

        // Navigate to product details
        const card = target.closest('.product-card');
        if (card && !target.classList.contains('btn')) {
            const btn = card.querySelector('.btn') as HTMLElement;
            const id = btn?.getAttribute('data-id');
            const product = allProducts.find(p => p.id === id);
            if (product) {
                import('./product').then(({ renderProductDetails }) => {
                    const fullProduct = {
                        ...product,
                        description: ["High quality product suitable for all your travel needs. Enjoy maximum comfort and durability with our exclusive materials."],
                        colors: product.color ? product.color.split(',').map((s: string) => s.trim()) : ["black"],
                        sizes: product.size ? product.size.split(',').map((s: string) => s.trim()) : ["M"]
                    };
                    renderProductDetails(fullProduct as any, allProducts as any);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }
        }
    });
}

const app = async () => {
    const pageName = 'home';
    renderHeader(pageName);
    renderBanner();
    renderFeatures(featureData);

    const allProducts = await fetchProducts();

    const normalize = (p: any) => ({
        id: p.id,
        name: p.name,
        price: p.price,
        image: `assets/images/suitcases/${p.imageUrl.split('/').pop()}`,
        badge: p.salesStatus ? "SALE" : undefined
    });

    const ensureFourItems = (items: any[]) => {
        if (items.length === 0) return [];
        const result = [...items];
        while (result.length < 4) {
            result.push(items[result.length % items.length]);
        }
        return result.slice(0, 4);
    };

    const selectedProductsRaw = allProducts.filter((p: any) => p.blocks.includes("Selected Products"));
    const newArrivalsRaw = allProducts.filter((p: any) => p.blocks.includes("New Products Arrival"));

    const selectedProducts = ensureFourItems(selectedProductsRaw).map(normalize);
    const newArrivals = ensureFourItems(newArrivalsRaw).map(normalize);

    renderProducts("Selected Products", "Duis vestibulum elit vel neque pharetra", selectedProducts);
    renderSpecialOffer(offerData);
    renderProducts("New Products Arrival", "Duis vestibulum elit vel neque pharetra", newArrivals);

    renderReviews(myReviews);
    renderFooter();

    setupHomeEventListeners(allProducts);
    updateCartCount();
}

app();

