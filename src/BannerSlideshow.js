import TinySlider from "tiny-slider-react";

const slideImages = [
  './images/slide-image1.jpg',
  './images/slide-image2.jpg',
  './images/slide-image3.jpg'
];

const BannerSlideshow = () => {
    const properties = {
      lazyload: true,
      nav: true,
      mouseDrag: true,
      controls: false,
      autoplay: true,
      autoplayButtonOutput: false
    }
    return (
      <div className="banner-slideshow">
        <TinySlider settings={properties}>
          <div className="each-slide">
            <div className="slide" style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
            <div className="slide-content slide-content-1">
                <div className="heading">
                    Shop New Arrivals
                </div>
                <div className="subheading">
                    Our coolest new items are waiting for you!
                </div>
                <a className="slide-btn" href="/">shop now</a>
            </div>
          </div>
          <div className="each-slide">
            <div className="slide" style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
            <div className="slide-content slide-content-2">
                <div className="heading">
                    Our Fave Tees
                </div>
                <div className="subheading">
                    Shop all our favorites.
                </div>
                <a className="slide-btn" href="/">shop now</a>
            </div>
          </div>
          <div className="each-slide">
            <div className="slide" style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
            <div className="slide-content slide-content-3">
                <div className="heading">
                    Men's Tees
                </div>
                <div className="subheading">
                    Find the perfect shirt.
                </div>
                <a className="slide-btn" href="/">shop now</a>
            </div>
          </div>
        </TinySlider>
      </div>
    )
};

export default BannerSlideshow;
