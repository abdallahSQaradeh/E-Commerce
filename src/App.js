
import './App.css';
import HomePage from "./pages/homepage/homepage.component"
import {Route, Switch} from 'react-router-dom'
import ShopPage from "./pages/shoppage/shoppage.component"
import SignInSignUp from "./pages/sign-in-page#sign-up-page/sign-in#sign-up.component"
import Header from "./components/header/header.component"
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin-signup" component={SignInSignUp}/>
      </Switch>
      
    </div>
  );
}

export default App;
