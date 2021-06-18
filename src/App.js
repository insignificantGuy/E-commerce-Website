import HomePage from './pages/homepage/homepage.component.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './pages/homepage/homepage.style.scss';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import './App.css';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';

function App() {
  return( 
    <div>
    <BrowserRouter>
      <Header/>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInAndSignUp}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
