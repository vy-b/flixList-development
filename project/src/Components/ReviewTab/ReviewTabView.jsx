import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Rating from "@material-ui/lab/Rating";
import Star from "@material-ui/icons/Star";
import "./ReviewTab.css";
import UserReviewController from "./UserReviewController";
import FriendReviews from "./FriendReviews.jsx";
class ReviewTabView extends React.Component {

  render() {
    const {username, ratingsOnly, reviews, myRating, movieRating, submitHandler,
      movieInfo: {title, poster, year, plot, rated, imdbID}} = this.props;
    
    return (
      <div className="App ">
        <header className="Review-header">
          <div className="row no-gutters review-page">
            <div className="col-auto">
              <div className="card-block px-2" style={{ marginRight: "10px" }}>
                <img className="movie-poster" src={poster} alt="movie cover" />

                <div style={{ marginTop: "13px" }}>
                  {ratingsOnly.map((review, i) => {
                    return <FriendReviews review={review} key={i} />;
                  })}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card-block " style={{ marginTop: "10px" }}>
                <h1 className="title">{title}</h1>
                <h5 className="text-muted">
                  <span className="year">{year}</span> |{" "}
                  <span className="rated">{rated}</span>
                </h5>

                <Rating
                  name="half-rating-read"
                  value={movieRating.totalRating/movieRating.totalUsersRated}
                  precision={0.1}
                  emptyIcon={
                    <Star style={{ color: "grey" }} fontSize="inherit" />
                  }
                  readOnly
                />
                <p className="text-muted" style={{ fontSize: "16px" }}>
                  (from {movieRating.totalUsersRated} total ratings)
                </p>

                <p className="plot">{plot}</p>

                <UserReviewController
                  imdbID={imdbID}
                  username={username}
                  submitHandler={submitHandler}/>

                <div style={{ marginTop: "14px" }}>
                  {myRating !== '' && myRating !== undefined ? <FriendReviews review={myRating} /> : undefined}
                  {reviews.map((review, i) => {
                    return <FriendReviews review={review} key={i} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default ReviewTabView;
