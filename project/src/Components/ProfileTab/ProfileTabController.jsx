import React from 'react';
import ProfileTabView from "./ProfileTabView";
import './ProfileTab.css'
import {getRatings} from '../../Utils/Utils.jsx'

class ProfileTabController extends React.Component{
    constructor(props) {
        super(props);
        this.state = { reviews: [] };
    }
    componentDidMount() {
        this.updateReviews();
    }

    componentDidUpdate(prevProps){
        if(prevProps.username !== this.props.username){
            this.updateReviews();
        }
    }

    updateReviews = () => {
        const username = this.props.username;
        getRatings(undefined, username).then((userReviews) => {
            this.setState({reviews: userReviews});
        });
    }

    render(){
        return(
            <ProfileTabView username = {this.props.username} reviews = {this.state.reviews} />
            )
    }
}

export default ProfileTabController