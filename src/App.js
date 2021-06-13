import HomePage from './pages/homepage/homepage.component.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import './pages/homepage/homepage.style.scss';

const HatsPage = (props) =>{
  return (
    <div>
      <h1>This is a Hat Page</h1>
    </div>
  )
};

function App() {
  return( 
    <BrowserRouter>
        <Route exact path="/" component={ HomePage }/>
        <Route exact path="/shop/hats" component={ HatsPage }/>
    </BrowserRouter>
  )
}

export default App;
