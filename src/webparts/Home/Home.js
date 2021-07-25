import React from 'react'
import phoneillustration from './PhoneV1.png';
import checkmark from './Check-box.png';
const Home = () =>{
return(

 <div>
  <section>
    <div className="MY-Parallax-Background" style={{width: '100%'}}>
      <div className="container MY-Service-Description" style={{height: 'calc(100vh - 86px)', margin: 0, padding: 0, display: 'initial'}}>
        <div className="row justify-content-md-end" style={{height: 'inherit', backgroundColor: '#ffffff', width: '100%'}}>
          <div className="col-md-5 col-lg-5 col-xl-5 col-xxl-5 d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
            <img className="d-none float-end d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block align-items-xxl-center img-fluid" src={phoneillustration} style={{width: 500, position: 'absolute', top: '59%', left: '21%', transform: 'translate(-50%, -54%)'}} />
          </div>
          <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7 align-items-center align-self-start align-items-xxl-center" style={{marginLeft: 15, marginRight: 15}}>
            <h1 className="MY-hero-h1">Spend Minutes Track Hours</h1>
            <p style={{fontFamily: '"galano_grotesqueregular"', width: '82%'}}>
              <br /><strong>Stop chasing hours with easy manager approvals, automated reminders, and a
                digital in-app employee punch clock for web and mobile in MY Leave</strong><br /><br /></p>
            <ul className="list-unstyled align-items-center justify-content-lg-end justify-content-xxl-center align-items-xxl-start" style={{display: 'block'}}>
              <li className="list-item"><img className="MY-Check-Box" src={checkmark}  />&nbsp; Custom Leave Types</li>
              <li className="list-item"><img className="MY-Check-Box" src={checkmark} />&nbsp; Easy Approvals</li>
              <li className="list-item"><img className="MY-Check-Box" src={checkmark}  />&nbsp; Dashboard</li>
              <li className="list-item"><img className="MY-Check-Box" src={checkmark}  />&nbsp; Tracking</li>
            </ul><button className="btn btn-primary" type="button" style={{borderStyle: 'solid', margin: 14, borderRadius: 20}}>Learn
              More&nbsp;<i className="fa fa-long-arrow-right" /></button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="d-xl-flex justify-content-xl-center align-items-xl-center" style={{backgroundColor: 'var(--primary-color)'}}>
      
      <div className="container d-xl-flex justify-content-xl-center align-items-xl-center" style={{backgroundColor: 'inherit', marginTop: 40, marginBottom: 40}}>
        <div className="row">
          <div className="col-12">
            <h1 className="text-center" style={{color: '#FFF'}}>Our Promise</h1>
            <p className="text-center" style={{color: '#FFF'}}><br /><strong>There are hundreds of vendors you deal
                with, who may promise you a thousand things.Wondering how we’re
                different?&nbsp;</strong><br /><br /></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


)

}

export default Home;