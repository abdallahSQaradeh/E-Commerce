
import './App.css';
import HomePage from "./pages/homepage/homepage.component"
import {Route, Switch} from 'react-router-dom'
import ShopPage from "./pages/shoppage/shoppage.component"
const HatsPage = ()=>
{return <div>
    <h1>HATS PAGE</h1>
  </div>
}
function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
      </Switch>
      
    </div>
  );
}

export default App;
