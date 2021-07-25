import React from 'react'
import facebook from './facebook.png';
import google from './Google.png';
const Login = () => {
  return(
   <div>
  <section className="login-clean">
    <form method="post">
      <h2 className="visually-hidden">Login Form</h2>
      <div className="illustration" style={{lineHeight: '0.5', marginBottom: 22}}>
        <h2 className="text-center" style={{color: 'var(--primary2-color)', fontFamily: '"galano_grotesqueregular"', marginTop: 20}}>Welcome Back</h2>
      </div>
      <div className="mb-3"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
      <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Password" /></div>
      <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit">LOGIN</button></div>
      <h1 className="text-center" style={{color: 'var(--primary2-color)', fontFamily: '"galano_grotesquebold"', fontSize: 17, marginTop: 36}}>OR</h1>
      <div className="mb-3"><button className="btn btn-primary text-center Facebook-button" type="button" style={{paddingLeft: 0}}>&nbsp;<img src={facebook} style={{width: 35, transform: 'translateY(-4px)', margin: 0}} /> &nbsp;Continue with Facebook</button><button className="btn btn-primary text-center Google-Button" type="button" style={{marginTop: 12, paddingLeft: 0}}>&nbsp;<img src={google} style={{width: 30, transform: 'translateY(-1px)'}} />&nbsp; &nbsp;Continue with Google</button></div><a className="forgot" href="#">Forgot your email or password?</a>
    </form>
  </section>
</div>

  )
}
export default Login;