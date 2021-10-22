import BannerSlideshow from './BannerSlideshow.js';
import FeaturedCollection from './FeaturedCollection.js';
import ProductSlideshow from './ProductSlideshow.js';
import StaticBanner from './StaticBanner.js';
import EmailSignUp from './EmailSignUp.js';

function MainContent() {
    return (
      <div className="">
        <BannerSlideshow />
        <FeaturedCollection />
        <ProductSlideshow />
        <StaticBanner />
        <EmailSignUp />
      </div>
    );
  }
  
  export default MainContent;