import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './components/shop/shop.component';
import Header from './components/header/header.component';


const HatsPage = () =>(
  <div>
    <h1>hats page</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
     <Route exact path='/' component={HomePage} />
     <Route  exact path='/hats' component={HatsPage} />
     <Route path="/shop" component={ShopPage}/>
     </Switch>
    </div>
  );
}

export default App;
