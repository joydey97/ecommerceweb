import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route } from 'react-router-dom';
import ShopPage from './components/shop/shop.component';


const HatsPage = () =>(
  <div>
    <h1>hats page</h1>
  </div>
);

function App() {
  return (
    <div className="App">
     <Route exact path='/' component={HomePage} />
     <Route  exact path='/hats' component={HatsPage} />
     <Route path="/shop" component={ShopPage}/>
    </div>
  );
}

export default App;
