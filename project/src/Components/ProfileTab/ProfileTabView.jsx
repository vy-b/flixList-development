import React from 'react';
import "./ProfileTab.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserSearchController from "./UserSearch/UserSearchController"
import ReviewCard from '../ReviewCard.jsx'

class ProfileTabView extends React.Component{
    render(){
        return(
            <div>
                <header className = "profile">
                    <div className = "reviewcard">
                            {this.props.reviews.map((review, i) => {
                                return i<10 ? <ReviewCard username={this.props.username} review={review} key={i} />:undefined;
                            })}
                        </div>
                    <div className = "parent">
                        <div className = "name">{this.props.username}</div>
                        <div className = "friendSearch">
                            <div className = "friends">Friends List</div>
                            <div className = "friendList">
                                <UserSearchController username = {this.props.username} />
                            </div>
                        </div>
                    </div>
               </header>
            </div>
        )
    }
}

export default ProfileTabView