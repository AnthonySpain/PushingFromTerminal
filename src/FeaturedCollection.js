import CollectionCard from "./CollectionCard.js";
function FeaturedCollection() {
    return (
        <div className="featured-collection">
            <CollectionCard image='./images/womens-image.jpg' title="Women's" />
            <CollectionCard image='./images/mens-image.jpg' title="Men's" />
            <CollectionCard image='./images/accessories-image.jpg' title="Accessories" />
        </div>
    );
  }

  export default FeaturedCollection