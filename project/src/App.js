import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TopNavView from "./Components/TopNavView"
import SearchController from "./Components/MovieSearch/SearchController"
import SignUpController from "./Components/SignUp/SignUpController"
import LoginController from "./Components/Login/LoginController"
import ProfileTabController from "./Components/ProfileTab/ProfileTabController"
import ReviewTabController from './Components/ReviewTab/ReviewTabController'
import BrowseTabController from './Components/BrowseTab/BrowseTabController'
import FriendsProfileController from './Components/ProfileTab/FriendsProfile/FriendsProfileController'

class App extends React.Component{
  _isMounted = false;
  
  constructor(props) {
    super(props);
    this.state = {username: ''}
  }

  componentDidMount(){
    this._isMounted = true;
    var username = sessionStorage.getItem('username');
    if(this._isMounted){
      this.setState({username: username});
    }
  }
 
  setUsername = (username) => {
    var newUsername = username ? username : ''
    if(this._isMounted){
      this.setState({username: newUsername});
    }
    sessionStorage.setItem('username', newUsername);
  }

  componentWillUnmount(){
    this._isMounted = false;
  }

  render(){
    const username = this.state.username;
    const setUsername = this.setUsername;
    return (
      <React.Fragment>
        <Router>
          <TopNavView username={username} setUsername={setUsername} />
          <Switch>
            <Route exact path="/">
              { !username
              ? <LoginController setUsername={setUsername} />
              : <BrowseTabController username={username}></BrowseTabController>
              }
            </Route>
            <Route exact path="/SignUp" component={SignUpController} />
            <Route exact path="/FriendsProfile" component={FriendsProfileController} />
            <Route exact path="/Review">
              <ReviewTabController username={username}/>
            </Route>
            <Route exact path="/Login">
              <LoginController setUsername={setUsername} />
            </Route>
            <Route exact path="/Profile">
              <ProfileTabController username={username} />
            </Route>
            <Route exact path="/Search" component={SearchController} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;