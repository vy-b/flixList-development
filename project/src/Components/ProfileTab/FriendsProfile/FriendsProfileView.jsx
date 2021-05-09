import React from 'react';
import ReviewCard from '../../ReviewCard.jsx'
import User from '../UserSearch/User'
import {Button} from 'react-bootstrap'
class FriendsProfileView extends React.Component{
    render(){
        const {reviews,users,friendUsername,isMyFriend,myUsername} = this.props
        return(
            <div>
                <header className = "profile">
                    <div className = "reviewcard">
                        {reviews.length === 0 
                        ? <i style={{paddingTop:"90px"}}> {friendUsername} has not reviewed anything</i>
                        : undefined
                        }
                        {reviews.map((review, i) => {
                            return i<10 ? <ReviewCard username={myUsername} review={review} key={i} />:undefined;
                        })}

                    </div>
                    <div className = "parent">
                        <div className = "name">
                            {this.props.friendUsername}
                        </div>
                        <Button className="my-button" variant="outline-dark" style={{marginTop:"10vh"}} onClick={this.props.clickHandler}>
                            {isMyFriend === true
                            ?<div>following</div> 
                            : <div>follow</div> 
                            }
                            
                        </Button>
                        {users.length !== 0 
                        ? <div className = "friends" style={{marginBottom:"10px",paddingTop:"10vh"}}>{friendUsername}'s Friends List</div>
                        : <div className="font-italic" style={{marginTop:"10px"}}>{friendUsername} is not following anyone</div>
                        }
                        <div className="listFriends">
                        {
                        users.map((searchUser, i) => {
                            return <User username={searchUser} myUsername={myUsername} userClass={'User'} key={i}/>
                        })
                        }
                        </div>
                    </div>
               </header>
            </div>
        )
    }
}

export default FriendsProfileView