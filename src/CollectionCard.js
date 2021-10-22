function CollectionCard(props) {
    const style={
        backgroundImage: "url(" + props.image + ")"
    }
    return (
        <div className="collection-card">
            <a href="/">
            <div className="collection-card__image" style={style}>
            </div>
            <div className="collection-card__title heading">
            {props.title}
            </div>
            </a>
        </div>
    );
  }

  export default CollectionCard