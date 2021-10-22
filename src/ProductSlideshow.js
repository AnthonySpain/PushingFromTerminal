import TinySlider from "tiny-slider-react";
import ProductCard from "./ProductCard.js"

const ProductSlideshow = () => {
    const properties = {
        lazyload: true,
        nav: false,
        mouseDrag: true,
        items: 2,
        prevButton: '.prev',
        nextButton: '.next',
        responsive: {
            640: {
              edgePadding: 20,
              gutter: 20,
              items: 2
            },
            700: {
              gutter: 30
            },
            900: {
              items: 4
            }
          }
    }
    return (
      <div className="product-slideshow__wrapper">
        <h1 className="slideshow-heading heading text-center">New Arrivals</h1>
        <div className="tinyslider-wrapper">
        <TinySlider settings={properties}>
        <ProductCard image="./images/product-image.jpg" title="Product Title" category="Women's T-Shirt"/>
        <ProductCard image="./images/product-image.jpg" title="Product Title" category="Women's T-Shirt"/>
        <ProductCard image="./images/product-image.jpg" title="Product Title" category="Women's T-Shirt"/>
        <ProductCard image="./images/product-image.jpg" title="Product Title" category="Women's T-Shirt"/>
        <ProductCard image="./images/product-image.jpg" title="Product Title" category="Women's T-Shirt"/>
        <ProductCard image="./images/product-image.jpg" title="Product Title" category="Women's T-Shirt"/>
        </TinySlider>
        <div className="prev arrow"><i className="fas fa-chevron-left"></i></div>
        <div className="next arrow"><i className="fas fa-chevron-right"></i></div>
        </div>
      </div>
    )
};

export default ProductSlideshow;
