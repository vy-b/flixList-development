import React from 'react';
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './SignUp.css'

class SignUpView extends React.Component {
  constructor(){
    super()
    this.state = {
        username: '',
        password: '',
        confirmPassword:''
    }
    this.changeUsername = this.changeUsername.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.changeConfirmPassword = this.changeConfirmPassword.bind(this)
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
  changeConfirmPassword(event){
    event.preventDefault();
    this.setState({
        confirmPassword:event.target.value
    })
  }
  onSubmit = (event) => {
    event.preventDefault();
    const signUpUser = {
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    }
    this.props.onSignUp(signUpUser);
  }

  render() {
    const {errorMessage} = this.props;
    return (
      
    <div className="App">
    <header className="App-header">
    
      <Form>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="examplename123" onChange={this.changeUsername}/>
          <Form.Text className="text-muted" >
            Choose something unique!
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={this.changePassword}/>
          <Form.Text className="text-muted" >
            Password should be at least 6 characters
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" onChange={this.changeConfirmPassword}/>
        </Form.Group>
      </Form>
      <div className="error">{errorMessage}</div>
      <Button className="button" type="submit" onClick={this.onSubmit} > Sign Up </Button>
      <div className="words">Already have an account? <a href="Login">Login</a> </div>
      
      
    </header>
    </div>
    );
  }
}
export default SignUpView
