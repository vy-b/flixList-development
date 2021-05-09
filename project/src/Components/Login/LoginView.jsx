import React from 'react';
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../SignUp/SignUp.css'

class LoginView extends React.Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.changeUsername = this.changeUsername.bind(this)
        this.changePassword = this.changePassword.bind(this)
      }
      
    
      changeUsername(event){
        event.preventDefault();
        this.setState({
            username:event.target.value
        })
      }
    
      changePassword(event){
        event.preventDefault();
        this.setState({
            password:event.target.value
        })
      }
      onSubmit = (event) => {
        event.preventDefault();
        const loginUser = {
          username: this.state.username,
          password: this.state.password
        }
        this.props.onLogin(loginUser);
      }
    render(){
        const {errorMessage} = this.props;
        return(
            <div className = "App">
            <header className = "App-header">
                <Form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="examplename123" onChange={this.changeUsername}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type = "password" placeholder = "Password" onChange={this.changePassword}/>
                    </Form.Group>
                </Form>
                <div className="error">{errorMessage}</div> 
                
                <Button className="button" type = "submit" onClick={this.onSubmit}>Login</Button>
                <div className="words">Don't have an account? <a href="/SignUp">Sign Up</a> </div>
            </header>
            </div>
        );
    }
}
export default LoginView