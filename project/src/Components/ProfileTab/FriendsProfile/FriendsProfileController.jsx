import React from 'react';
import FriendsProfileView from './FriendsProfileView'
import {getRatings, getFriends, addFriend} from '../../../Utils/Utils.jsx'
import FriendTableEntry from '../../../Objects/FriendTableEntry.jsx';
class FriendsProfileController extends React.Component {
    constructor(props) {
        super(props);
        this.state = { reviews: [], users:[], isMyFriend:false };
    }
    componentDidMount(){
        this.getProfile();
    }
    
    componentDidUpdate(prevProps) {
        if(prevProps.location.state.friendUsername !== this.props.location.state.friendUsername){
            this.getProfile();
        }
    }
    
    getProfile = () =>{
        const {friendUsername, myUsername} = this.props.location.state;
        getRatings(undefined, friendUsername).then((reviews) => {
            this.setState({reviews: reviews});
        });

        getFriends(friendUsername).then((response) => {
            this.setState({users: response})
        })

        getFriends(myUsername).then((response) => {
            if (response.includes(friendUsername)){
                this.setState({isMyFriend:true});
            }
            else{
                this.setState({isMyFriend:false});
            }
        })
    }

    followButtonHandler = ()=> {
        const friendTableEntry = new FriendTableEntry(this.props.location.state.myUsername, this.props.location.state.friendUsername);
        addFriend(friendTableEntry).then((response) => {
            this.setState({isMyFriend:true})
        }).catch(err=>console.log(err))
    }

    render() {

        return(
            <FriendsProfileView myUsername={this.props.location.state.myUsername}
                                friendUsername={this.props.location.state.friendUsername} 
                                reviews={this.state.reviews} 
                                users={this.state.users} 
                                isMyFriend={this.state.isMyFriend}
                                clickHandler={this.followButtonHandler}/>
        )
    }
}

export default FriendsProfileController