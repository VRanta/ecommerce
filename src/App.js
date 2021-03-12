

import {Route, BrowserRouter, Switch, Link} from"react-router-dom"
import HomePage from './pages/homepage/homepage.js';
import ShopPage from './pages/shop/shop.js';
import Header from "./component/header/header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-out.js";
// const Hats = (props => (<h1>Hats Page</h1>))
// const Jackets = (props => (<h1>Jackets Page</h1>))
// const Sneakers = (props => (<h1>Sneakers Page</h1>))
// const Womens = (props => (<h1>Women Page</h1>))
// const Mens = (props => (<h1>Mens Page</h1>))
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path="/sign-in" component={SignInAndSignUpPage}/>
        </Switch>
      {/* <BrowserRouter>
        <Route exact path="/" component = {Homepage}/>
        <Route path="/hats" component = {Hats}/>
        <Route path="/jackets" component={Jackets}/>
        <Route path="/sneakers" component = {Sneakers}/>
        <Route path="/womens" component={Womens}/>
        <Route path="/mens" component = {Mens}/>

        </BrowserRouter> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
