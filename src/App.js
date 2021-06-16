import HomePage from './pages/homepage/homepage.component.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import './pages/homepage/homepage.style.scss';
import ShopPage from './pages/shop/shop.component.jsx';
import './App.css';

function App() {
  return( 
    <BrowserRouter>
        <Route exact path="/" component={ HomePage }/>
        <Route exact path="/shop" component={ ShopPage }/>
    </BrowserRouter>
  )
}

export default App;
