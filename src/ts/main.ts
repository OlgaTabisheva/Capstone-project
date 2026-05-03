import { renderHeader } from './../ts/components/header';
import { renderBanner } from './../ts/components/banner';
import { renderProducts } from './../ts/components/products';
import { renderFeatures } from './../ts/components/features';
import { renderSpecialOffer } from './../ts/components/specialOffer';
import { renderReviews } from './../ts/components/reviews';
import { renderFooter } from './../ts/components/footer';
import { renderuserLogIn } from './../ts/userLogIn';
import './../scss/pages/_userLogin.scss';
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
const selectedItems = [
  { id: 1, name: "Vel vestibulum elit tuvel euqen.", price: 250, image: "assets/images/Homepage/suitcase red.png", badge: "SALE" },
  { id: 2, name: "Vel vestibulum elit tuvel euqen.", price: 200, image: "assets/images/Homepage/suitcase-beige.png", badge: "SALE" },
  { id: 3, name: "Vel vestibulum elit tuvel euqen.", price: 300, image: "assets/images/Homepage/suitcase-pink.png", badge: "SALE" },
  { id: 4, name: "Vel vestibulum elit tuvel euqen.", price: 350, image: "assets/images/Homepage/suitcase blue.png", badge: "SALE" }
];
const selectedItems2 = [
  { id: 1, name: "Vel vestibulum elit tuvel euqen.", price: 250, image: "assets/images/Homepage/suitcase hand grey.png", badge: "SALE" },
  { id: 2, name: "Vel vestibulum elit tuvel euqen.", price: 200, image: "assets/images/Homepage/suitcase small yellow.png", badge: "SALE" },
  { id: 3, name: "Vel vestibulum elit tuvel euqen.", price: 300, image: "assets/images/Homepage/suitcase-blue.png", badge: "SALE" },
  { id: 4, name: "Vel vestibulum elit tuvel euqen.", price: 350, image: "assets/images/Homepage/suitcase dark-blue.png", badge: "SALE" }
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


const app = () => {
  const path = window.location.pathname;
  let pageName = '';
  if (path.includes('catalog.html')) {
    pageName = 'catalog';
    renderHeader(pageName);
    console.log('catalog page');
  } else if (path.includes('about.html')) {
    pageName = 'about';
    renderHeader(pageName);
    renderFeatures(featureData);
  } else if (path.includes('contact.html')) {
    pageName = 'contact';
    renderHeader(pageName);
    renderReviews(myReviews);
  } else if (path.includes('cart.html')) {
    pageName = 'cart';
    renderHeader(pageName);
  } else if (path.includes('index.html') || path === '/' || path.endsWith('/')) {
    pageName = 'home';
    renderHeader(pageName);
    renderBanner();
    renderFeatures(featureData);
    renderProducts("Selected Products", "Duis vestibulum elit vel neque pharetra", selectedItems);
    renderSpecialOffer(offerData);
    renderProducts("New Products Arrival", "Duis vestibulum elit vel neque pharetra", selectedItems2);
    renderReviews(myReviews);
  } else if (path.includes('userLogIn.html')) {
    pageName = 'userLogIn';
    renderHeader(pageName);
    renderuserLogIn();
  }

  renderFooter();
}


app();


