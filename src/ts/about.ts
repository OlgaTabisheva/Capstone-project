import { renderHeader } from './../ts/components/header';
import { renderHighlights } from './../ts/components/highlights';
import { renderFooter } from './../ts/components/footer';
import { renderTeam } from './../ts/components/team';
import './../scss/layouts/header.scss';
import './../scss/layouts/footer.scss';
import './../scss/components/_buttons.scss';
import './../scss/components/_highlights.scss';
import './../scss/components/_new-arrivals.scss';
import './../scss/components/_team.scss';
import './../scss/main.scss';
import { renderNewArrivals } from './components/newArrivals';
import './../scss/components/_specialOffer.scss';
import { renderSpecialOffer } from './../ts/components/specialOffer';

const path = window.location.pathname;
const isHtmlDir = path.includes('/html/') || path.includes('html/');
const rootPath = isHtmlDir ? '../' : './';


const highlightsData = {
  title: "About Us",
  description: "Duis vestibulum elit vel neque pharetra vulputate",
  backgroundImage: `${rootPath}assets/images/About Us/banner image.jpg`,
  items: [
    { iconSrc: `${rootPath}assets/images/about1.svg`, title: "Superior Accuracy", text: "Qewist vestibulum elit vel neque pharetra vulputate scelerisque nisi urna." },
    { iconSrc: `${rootPath}assets/images/award2.svg`, title: "Awards", text: "Vestibulum elit vel neque pharetra vulputate scelerisque nisi urna." },
    { iconSrc: `${rootPath}assets/images/ecolog3.svg`, title: "Ecological", text: "Elit vel neque duis vestibulum  pharetra vulputateuisque scelerisque nisi urna." },
    { iconSrc: `${rootPath}assets/images/about4.svg`, title: "Shipping Worlwide", text: "Quisque scelerisque nisi urna. Duis vestibulum elit vel neque pharetra vulputate. " }
  ]
};

const offerData = {
    percent: "50 %",
    shortText: "Curabitur vulputate arcu odio, ac facilisis diam.",
    title: "Offer Of The Month",
    description: "Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet leo in vulputate.",
    buttonText: "Get Offer Today",
    backgroundImage: `${rootPath}assets/images/Homepage/offer of the month image.png`
};

const app = () => {
    const pageName = 'about';
    renderHeader(pageName);
    renderHighlights(highlightsData);
    renderNewArrivals();
    renderTeam();
    renderFooter();
     renderSpecialOffer(offerData);
}
app();

