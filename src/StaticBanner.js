function StaticBanner() {
const style={
    backgroundImage: "url(./images/static-banner.jpg)"
}
    return (
        <div className="static-banner">
            <div className="static-banner-bg-image" style={style}></div>
           <div className="banner-content">
                <div className="heading">
                    Our Favorite Tees
                </div>
                <div className="subheading">
                    Everyday tees you need.
                </div>
                <a className="slide-btn banner-btn" href="/">shop now</a>
            </div>
        </div>
    );
  }

  export default StaticBanner