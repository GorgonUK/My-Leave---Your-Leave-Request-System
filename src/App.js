
import './App.css';
import Navbar from './webparts/Navbar/Navbar';
import Header from './webparts/Header/Header';
import Footer from './webparts/Footer/Footer';
import Home from './webparts/Home/Home';
import Login from './webparts/Login/Login';
import SignUp from './webparts/SignUp/SignUp';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    
    <Router>
      <div className="App">
      <Header/>
    <Navbar/>
    <Switch>
    <Route path="/Home" component={Home}/>
    <Route path="/Login" component={Login}/>
    <Route path="/SignUp" component={SignUp}/>
    </Switch>


    <Footer/>

      </div>
    </Router>
  );
}


