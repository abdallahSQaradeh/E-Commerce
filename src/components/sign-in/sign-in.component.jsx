import React,{Component} from 'react';
import "./sign-in.style.scss"
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import {signInwithGoogle} from "../../firebase/firebase.utils"
class signIn extends Component{

    state={
        email:'',
        password:''
    }
    handleSubmit = (e)=>
    {
        e.preventDefault();
this.setState((prevState,prevProps)=>
        {
            return {email:prevState.email, password:prevState.password}
        })
    }
    changeHandler =(e)=>
    {
        const {value,name} = e.target;
        this.setState({[name]:value})
    }
    render()
    {
        return<div class="sign-in">
            <h1>I already have an account</h1>
            <span>Sign in with your email and password</span>
        
        <form onSubmit={this.handleSubmit}>
            <FormInput label="email" changeHandler={this.changeHandler} type="email" name="email" value={this.state.email} required/>
           
            <FormInput label="password" changeHandler={this.changeHandler} type="password" name="password" value={this.state.password} required/>
            
            <div className="buttons">
            <CustomButton type="submit" >SIGN IN</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInwithGoogle} >SIGN IN With Google</CustomButton>
      

            </div>
             </form>
        </div>
    }
}
export default  signIn;