import React, { useStarte } from 'react';
import myleave from './MyLeave.png';
function Navbar() {

    return (
<nav className="navbar navbar-light navbar-expand-md" style={{backgroundColor: 'rgba(255,255,255,0.9)'}}>
  <div className="container-fluid"> <a href="/"><img src={myleave} style={{width: 159, paddingTop: 8}} /></a><span className="d-none d-print-none d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none ms-auto justify-content-sm-end"><button className="btn btn-primary" type="button" style={{borderStyle: 'solid', margin: 14, borderRadius: 20}}>Sign
        Up</button><button className="btn btn-primary" type="button" style={{background: 'rgba(255,255,255,0)', borderRadius: 20, border: '1px solid var(--primary2-color)', color: 'var(--primary2-color)'}}>Login</button></span><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-2" style={{borderColor: 'transparent'}}><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler hamburger-menu" /></button>
    <div className="collapse navbar-collapse navbar-inner" id="navcol-2">
      <ul className="navbar-nav" style={{marginRight: 'auto'}}>
        <li className="nav-item nav-active nav-passive"> <a className="nav-link" href="#">Get Started</a></li>
        <li className="nav-item nav-passive"> <a className="nav-link" href="#">Pricing</a></li>
        <li className="nav-item nav-passive"> <a className="nav-link" href="#">About</a></li>
      </ul><span className="d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block navbar-text"><button className="btn btn-primary" type="button" style={{borderStyle: 'solid', margin: 9, borderRadius: 20}}>Sign Up</button><button className="btn btn-primary" type="button" style={{background: 'rgba(255,255,255,0)', borderRadius: 20, border: '1px solid var(--primary2-color)', color: 'var(--primary2-color)'}}>Login</button></span>
    </div>
  </div>
</nav>


    )
}
export default Navbar;