function Footer() {
  function toggleFooterMenus(e){
    let clicked = e.target;
    let feedback = clicked.children[0];
    let menu = clicked.nextSibling;
    if(menu.classList.contains('menu--active')){
      menu.classList.remove('menu--active')
      feedback.innerText = '+';
    }else {
      menu.classList.add('menu--active')
      feedback.innerText = '-'
    }
  }
    return (
        <footer>
          <div className="footer-wrapper">
          <div className="footer-menu">
              <div className="footer-menu__heading heading" onClick={toggleFooterMenus}>
              Customer Service <span className="expand-feedback">+</span>
              </div>
              <ul className="menu">
                <li>
                      <a href="/">Accessibility</a>
                </li>
                <li>
                    <a href="/">Contact Us</a>
                </li>
                <li>
                    <a href="/">Return Policy</a>
                </li>
                <li>
                    <a href="/">FAQ</a>
                </li>
                <li>
                    <a href="/">Gift Certificates</a>
                </li>
                <li>
                    <a href="/">Wishlist</a>
                </li>
              </ul>
            </div>
            <div className="footer-menu">
              <div className="footer-menu__heading heading" onClick={toggleFooterMenus}>
              Company <span className="expand-feedback">+</span>
              </div>
              <ul className="menu">
                <li>
                    <a href="/">About Us</a>
                </li>
                <li>
                    <a href="/">Careers</a>
                </li>
                <li>
                    <a href="/">Press</a>
                </li>
                <li>
                    <a href="/">Affiliates</a>
                </li>
                <li>
                    <a href="/">Gift Certificates</a>
                </li>
              </ul>
            </div>
            <div className="footer-menu social-menu">
              <div className="footer-menu__heading heading">
                Follow Us
              </div>
              <a href="/"><i className="fab fa-facebook-f"></i></a>
              <a href="/"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </footer>
    );
  }

  export default Footer