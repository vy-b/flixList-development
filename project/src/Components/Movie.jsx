import React from 'react';
import Rating from '@material-ui/lab/Rating'
import Star from "@material-ui/icons/Star";
import "bootstrap/dist/css/bootstrap.min.css";
import './Movie.css'
import { withRouter } from "react-router-dom";

class Movie extends React.Component {

    onMovieClick = () => {
        this.props.history.push({
            pathname:"/Review",
            state: {movieInfo: this.props.movieInfo}
        })
    }

    render() {
        const {title, poster, year,plot,rated,runtime,genre,actors,totalRating,totalUsersRated} = this.props.movieInfo;
        const movieRating = totalRating/totalUsersRated;
        return (
        <div className= "card movie-card">
            <div className="card-block stretched-link text-decoration" onClick={this.onMovieClick}>
                <div className="row no-gutters">
                    <div className="col-auto">
                    <div className="card-block px-2">
                        <img className="poster" src={poster} alt="movie cover"/> 
                    </div>
                    </div>
                    <div className="col">
                        <div className="card-block px-2">
                            <h1 className="title">{title}</h1>
                            <h5 className="text-muted"><span className="year">{year}</span> | <span className="rated">{rated}</span></h5>

                            <Rating name="half-rating-read" value={movieRating} precision={0.1}
                            emptyIcon={ <Star style={{ color: "grey" }} fontSize="inherit"/>} 
                            readOnly /> 
                            <p className="text-muted" style={{fontSize:"16px"}}>(from {totalUsersRated} total ratings)</p>
                            
                            <p className="plot" >{plot}</p>
                            <p><span className="font-weight-bold">Cast: </span><span className="cast"><span id="other" >{actors}</span></span></p>
                            <p><span className="font-weight-bold">Runtime: </span><span id="other" className="runtime">{runtime}</span></p>
                            <p id="other" className="genre">{genre}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       )
   }
}
export default withRouter(Movie);