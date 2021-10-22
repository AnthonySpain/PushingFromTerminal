function ProductCard(props) {
    return (
        <div className="product-card">
            <a href="/">
            <div className="product-card__image">
                <img src={props.image} alt={props.category}/>
            </div>
            <div className="product-card__title">
                {props.title}
            </div>
            <div className="product-card__category">
                {props.category}
            </div>
            <div className="product-card__price">
                <span>$</span>19.99
            </div>
            </a>

        </div>
    );
  }

  export default ProductCard