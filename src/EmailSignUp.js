function EmailSignUp() {

    return (
        <div className="email-sign-up">
           <div className="email-sign-up__header">
               <div className="email-sign-up__logo">
                   <i className="fas fa-envelope"></i>
               </div>
               <span className="heading">Sign Up &amp; Stay Connected</span>
           </div>
           <div className="email-copy-input__wrapper">
                <div className="email-copy">
                    Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!
                </div>
                <form className="email-input__wrapper">
                    <input className="email-input" type="text" placeholder="johndoe@gmail.com" />
                    <input className="email-submit" type="submit" value="subscribe" />
                </form>
           </div>
        </div>
    );
  }

  export default EmailSignUp