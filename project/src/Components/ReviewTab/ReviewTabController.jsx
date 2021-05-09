import React from 'react';
import ReviewTabView from './ReviewTabView'
import { withRouter } from "react-router-dom";
import { getFriends, getMovieDetails, getRatings } from "../../Utils/Utils.jsx";

class ReviewTabController extends React.Component {
    constructor(props) {
        super(props);
        this.state = { reviews: [], ratingsOnly: [], myRating: '', movieRating: {totalRating:'', totalUsersRated:''}};
    }
    
    componentDidMount(){
        this.fetchRatings();
    }
    
    componentDidUpdate(prevProps) {
        if(prevProps.username !== this.props.username){
            this.fetchRatings();
        }
    }
    
    fetchRatings = () => {
        const username = this.props.username;
        const imdbID = this.props.location.state.movieInfo.imdbID;
        getFriends(username).then((friendsList) => {
            getRatings(imdbID, friendsList).then((friendreviews) => {
                let reviewArr = [];
                let ratingsArr = [];
                friendreviews.forEach((response) => {
                    if (response.rating.review !== "") {
                        reviewArr.push(response);
                    } else {
                        ratingsArr.push(response);
                    }
                });
                this.setState({reviews: reviewArr, ratingsOnly: ratingsArr});
            });
        });
        // get my rating
        getRatings(imdbID, username).then((myRating) => {
            this.setState({myRating:myRating[0]})
        });
        getMovieDetails(imdbID).then( details => {
            this.setState({movieRating:{totalRating: details.totalRating,totalUsersRated:details.totalUsersRated}});
        });
    }
    
    submitHandler = (newReview) => {
        this.setState({ myRating: newReview });
        setTimeout( () => {
            getMovieDetails(newReview.imdbID).then( details => {
                this.setState({movieRating:{totalRating: details.totalRating,totalUsersRated:details.totalUsersRated}});
            });
        }, 100);
    }
    
    render() {
        return(
            <div className = "App">
                <header className="Review-header">
                    <ReviewTabView  username={this.props.username}
                                    reviews={this.state.reviews}
                                    ratingsOnly={this.state.ratingsOnly}
                                    myRating={this.state.myRating}
                                    movieRating={this.state.movieRating}
                                    movieInfo={this.props.location.state.movieInfo}
                                    submitHandler={this.submitHandler}/>
                </header>
            </div>
        )
    }
}

export default withRouter(ReviewTabController);
