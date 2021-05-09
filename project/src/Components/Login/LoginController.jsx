import React from 'react';
import LoginView from './LoginView'
import { getUser} from '../../Utils/Utils';
import { withRouter } from 'react-router-dom';

class LoginController extends React.Component {
    constructor() {
        super()
        this.state = {
            errorMessage: ''
        }
    }

    sendLogin = (loginUser) => {
        const { username, password } = loginUser;
        getUser(username, password).then((exists) => {
            if(exists){
                this.setState({ errorMessage: 'login successful'});
                this.props.setUsername(username);
                this.props.history.push('/');
            }else{
                this.setState({ errorMessage: 'invalid credentials'});
            }
        }).catch(()=> this.setState({ errorMessage: 'an error occurred'}));
    }


    render() {
        return (
            <LoginView onLogin={this.sendLogin} errorMessage={this.state.errorMessage} />
        )
    }
}

export default withRouter(LoginController)