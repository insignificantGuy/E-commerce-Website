import React from 'react';
import HomePage from './pages/homepage/homepage.component.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './pages/homepage/homepage.style.scss';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import './App.css';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import {auth} from './firebase/firebase.utils.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
      return( 
      <div>
      <BrowserRouter>
        <Header currentUser={this.state.currentUser}/> 
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route path="/signin" component={SignInAndSignUp}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  } 
}

export default App;
