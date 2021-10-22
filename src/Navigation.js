function Navigation() {
    function displayMobileNav(){
        let mobile_nav = document.querySelector('.mobile-nav-list');
        let opaque_window = document.querySelector('.opaque-window');
        if(mobile_nav.classList.contains('mobile-nav-list--active')){
            mobile_nav.classList.remove('mobile-nav-list--active');
            opaque_window.classList.remove('opaque-window--active');
        }else{
            mobile_nav.classList.add('mobile-nav-list--active');
            opaque_window.classList.add('opaque-window--active');
        }
    }
    return (
        <nav className="navigation-container">
           <div className="logo-burger__wrapper">
               <div className="hb-menu" onClick={displayMobileNav}>
                <img src="./images/hamburger-icon.svg" alt="Mobile Navigation Button" />
               </div>
               <div className="logo">
                   <a href="/">logo</a>
               </div>
           </div>
           <div className="desktop-nav-list">
               <ul>
                <a href="/"><li>Men's</li></a>
                <a href="/"><li>Women's</li></a>
                <a href="/"><li>Accessories</li></a>
                <a href="/"><li>Sale!</li></a>
               </ul>
           </div>
           <div className="icon-wrapper">
           <div className="icon search-icon">
               <a href="/">
               <img src="./images/search-icon.svg" alt="Search Button" />
               </a>
           </div>
           <div className="icon account-icon">
               <a href="/">
           <img src="./images/account-icon.svg" alt="Account Button" />
           </a>
           </div>
           <div className="icon cart-icon">
               <a href="/">
           <img src="./images/cart-icon.svg" alt="Cart Button" />
           </a>
           </div>
           </div>
           <div className="mobile-nav-list">
               <div className="close-btn" onClick={displayMobileNav}>
                <i className="fas fa-times"></i>
               </div>
               <div className="logo text-center">logo</div>
               <ul>
                <li>Men's</li>
                <li>Women's</li>
                <li>Accessories</li>
                <li>Sale!</li>
               </ul>
           </div>
           <div className="opaque-window" onClick={displayMobileNav}>
           </div>
        </nav>
    );
  }

  export default Navigation