import React from 'react';
import SignUpView from './SignUpView'
import { addUser, getUser} from '../../Utils/Utils';

class SignUpController extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errorMessage: ''
        }

    }


    sendSignUp = (signUpUser) => {
        const { username, password, confirmPassword } = signUpUser;
        getUser(username).then(exists => {
            if (exists) {
                this.setState({ errorMessage: "username taken" })
            } else{
                if (password.length < 6) {
                    this.setState({ errorMessage: 'passwords must be 6 characters or more' })
                } else if (password !== confirmPassword) {
                    this.setState({ errorMessage: "passwords don't match" })
                } else {
                    addUser(signUpUser).then(() => {
                        //User successfully added.
                        this.props.history.push('/Login');
                    }).catch(() => this.setState({ errorMessage: 'an error occurred'}));
                }   
            }
        }).catch(() => this.setState({errorMessage: 'an error occurred'}));
    }

    render() {
        return (
            <SignUpView onSignUp={this.sendSignUp} errorMessage={this.state.errorMessage} />
        )
    }
}

export default SignUpController