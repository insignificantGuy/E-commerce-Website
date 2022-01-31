import React from 'react';
import HomePage from './pages/homepage/homepage.component.jsx';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './pages/homepage/homepage.style.scss';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component.jsx';
import './App.css';
import {auth, createUserProfileDocument} from './firebase/firebase.utils.js';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import {selectCurrentUser} from './redux/user/user.selectors';
class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth); 
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
                id:snapShot.id,
                ...snapShot.data()
            }); 
        });
      }
       setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
      return( 
      <div>
      <BrowserRouter>
        <Header/> 
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route exact path="/checkout" component={CheckoutPage} />
              <Route exact path="/signin" render={()=>
                this.props.currentUser ? (
                  <Redirect to="/" />
                ):(
                  <SignInAndSignUp/>
                )}
              />
          </Switch>
        </BrowserRouter>
      </div>
    );
  } 
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispactToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispactToProps)(App);
