import React from 'react'
const Footer = () => {
  return(  
    <section>
  {/* Start: Footer Basic */}
  <footer className="footer-basic">
    {/* Start: Social Icons */}
    <div className="social"><a href="#"><i className="icon ion-social-instagram" /></a><a href="#"><i className="icon ion-social-snapchat" /></a><a href="#"><i className="icon ion-social-twitter" /></a><a href="#"><i className="icon ion-social-facebook" /></a>
    </div>{/* End: Social Icons */}
    {/* Start: Links */}
    <ul className="list-inline">
      <li className="list-inline-item"><a href="index.html">Home</a></li>
      <li className="list-inline-item"><a href="#">Services</a></li>
      <li className="list-inline-item"><a href="#">About</a></li>
      <li className="list-inline-item"><a href="#">Terms</a></li>
      <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
    </ul>{/* End: Links */}
    {/* Start: Copyright */}
    <p className="copyright">MY Leave © 2021</p>{/* End: Copyright */}
  </footer>{/* End: Footer Basic */}
</section>


  )
}
export default Footer;