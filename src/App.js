import './App.css';
import './Auth.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";
import Welcome from "./components/Welcome";
import Shop from "./components/Shop";
import Product from "./components/Product";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {

  return (
      <Router>
          <div className="App">
              <Header/>
              <Switch>
                  <Route path='/' exact component={Welcome}></Route>
                  <Route path='/shop' exact component={Shop}></Route>
                  <Route path='/shop/product'  component={Product}></Route>
                  <Route exact path='/auth/login'  component={Login}></Route>
                  <Route path='/auth/register'  component={Register}></Route>
              </Switch>
              <Footer/>
          </div>
      </Router>
  )
}

export default App;
