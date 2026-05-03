import { renderHeader } from './../ts/components/header';
import { renderHighlights } from './../ts/components/highlights';
import { renderFooter } from './../ts/components/footer';
import { renderFeedback } from './components/feedback';
import './../scss/layouts/header.scss';
import './../scss/layouts/footer.scss';
import './../scss/components/_buttons.scss';
import './../scss/components/_highlights.scss';
import './../scss/components/_feedback.scss';
import './../scss/components/_forms.scss';
import './../scss/main.scss';



const path = window.location.pathname;
const isHtmlDir = path.includes('/html/') || path.includes('html/');
const rootPath = isHtmlDir ? '../' : './';

const highlightsData = {

  title: "Contact Us",
  description: "Duis vestibulum elit vel neque pharetra vulputate",
  backgroundImage: `${rootPath}assets/images/Contact Us/banner image.jpg`,
  items: [
    { iconSrc: `${rootPath}assets/images/LocationWhite.svg`, title: "Our Location", text: "1234 NW Bobcat Lane, St. Robert, MO 65584-5678" },
    { iconSrc: `${rootPath}assets/images/clockWhite.svg`, title: "Operating Time", text: "Monday - Friday: 9am - 6 pm Weekends: 10:30 am - 6pm" },
    { iconSrc: `${rootPath}assets/images/mailWhite.svg`, title: "Our Email", text: "best@shop.com info@bestshop.com" },
    { iconSrc: `${rootPath}assets/images/phoneWhite.svg`, title: "Call Us", text: "(268)142-8413 (760)265-2917" }
  ]
};



const app = () => {
  const pageName = 'contact';
  renderHeader(pageName);
  renderHighlights(highlightsData);
  renderFeedback();
  renderFooter();
}
app();

