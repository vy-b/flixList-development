import React from 'react';
import '.././ProfileTab.css'
import { withRouter } from "react-router-dom";
class User extends React.Component {
    onProfileClick = () => {
        if(this.props.username===this.props.myUsername){
            this.props.history.push("/Profile")
        }
        else{
        this.props.history.push({
            pathname:"/FriendsProfile",
            state: {
                friendUsername: this.props.username,
                myUsername: this.props.myUsername
            }
        })
        }
    }
   render() {
       return (
            <p className={this.props.userClass} onClick={this.onProfileClick} >{this.props.username}</p>
       )
   }
}
export default withRouter(User);