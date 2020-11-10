import React from 'react'
import './App.css';
import HomePage from "./pages/homepage/homepage.component"
import {Route, Switch} from 'react-router-dom'
import ShopPage from "./pages/shoppage/shoppage.component"
import SignInSignUp from "./pages/sign-in-page#sign-up-page/sign-in#sign-up.component"
import Header from "./components/header/header.component"
import {auth} from "./firebase/firebase.utils"
class App extends React.Component {

  state = {
    currentUser:null
  }
  render(){

    return <div className="App">
      <Header currentUser = { this.state.currentUser}/>
      <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin-signup" component={SignInSignUp}/>
      </Switch>
      
    </div>
  
  }
  unSubscribeFromAuth = null; 
  componentDidMount() {

    this.unSubscribeFromAuth = auth.onAuthStateChanged(user=> {
      this.setState({currentUser:user})
      console.log(user)
    })

  }
  
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
}

export default App;
