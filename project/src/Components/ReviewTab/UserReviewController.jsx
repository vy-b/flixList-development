import React from 'react';
import UserReviewView from './UserReviewView'
import {addRating} from '../../Utils/Utils';
import RatingTableEntry from '../../Objects/RatingTableEntry.jsx';
class UserReviewController extends React.Component {
    constructor(){
    super();
    this.state = {
        errorMessage:'',
        success:''
    }
    }

    sendReview=(userReview)=>{
        this.setState({errorMessage:'',success:''});
        const {rating,review} = userReview;
        if (rating === null){
            this.setState({errorMessage: 'A star rating out of five is required.'})
            return null;
        }
        const ratingTableEntry = new RatingTableEntry(this.props.imdbID,this.props.username,Number(rating),review);
        
        addRating(ratingTableEntry).then((response)=> {
            if (response.data.errors){
                if (response.data.errors.username){
                    this.setState({errorMessage: "You must log in before leaving a review."})
                }
                else if(response.data.errors.rating){
                    this.setState({errorMessage: 'A star rating out of five is required.'})
                }
            }
            else{
                this.setState({success:'Your review has been posted!'})
                this.props.submitHandler(response.data);
                
            }
        })
    }

render(){
    return(
    <div>
        <UserReviewView onReview={this.sendReview} err={this.state.errorMessage} success={this.state.success} />
    </div>
    );
}
}

export default UserReviewController