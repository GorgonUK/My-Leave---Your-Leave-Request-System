import React, { useStarte } from 'react';
function SignUp() {

    return (
<section className="login-clean">
  <form method="post">
    <h2 className="visually-hidden">Login Form</h2>
    <div className="illustration" style={{/*paddingLeft: 22, */lineHeight: '0.5', marginBottom: 22}}>
      <h2 className="text-center" style={{color: 'var(--primary2-color)', fontFamily: '"galano_grotesqueregular"', /*margin: 0, *//*padding: 0, *//*fontSize: 21, */marginTop: 20}}>Welcome Back</h2>
    </div>
    <div className="mb-3"><input type="text" className="form-control" name="Register-First-Name" placeholder="First Name" minLength={2} maxLength={50} required autoComplete="on" pattern="([A-Z][a-zA-Z]*)" /></div>
    <div className="mb-3"><input type="text" className="form-control" name="Register-Last-Name" placeholder="Last Name" required maxLength={50} autoComplete="on" pattern="([A-Z][a-zA-Z]*)" /></div>
    <div className="mb-3"><input type="tel" className="form-control" name="Register-Phone" placeholder="Phone Number" required maxLength={50} autoComplete="on" pattern="^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$" /></div>
    <div className="mb-3"><input className="form-control" type="email" name="email" placeholder="Email" required maxLength={50} autoComplete="on" pattern="(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|&quot;(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*&quot;)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])" /></div>
    <div className="mb-3"><input type="password" className="form-control" name="Register-Password" placeholder="Password" required maxLength={50} autoComplete="on" pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$" /></div>
    <div className="mb-3"><input className="form-control" type="password" name="Register-Retype-Password" placeholder="Retype Password" required maxLength={50} autoComplete="on" pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$" /></div>
    <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit">REGISTER</button></div><a className="forgot" href="Sign-in.html">Already have an account? <strong>Sign In</strong></a>
  </form>
</section>



    )
}
export default SignUp;