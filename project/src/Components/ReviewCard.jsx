import React from 'react';
import Rating from '@material-ui/lab/Rating'
import Star from "@material-ui/icons/Star";
import {Button} from 'react-bootstrap'
import {getMovieDetails} from '../Utils/Utils'
import './ReviewCard.css'
import User from "./ProfileTab/UserSearch/User.jsx"; 
import { withRouter } from "react-router-dom"
class ReviewCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {movieInfo:[]};
    }

    onMovieClick = () => {
        this.props.history.push({
            pathname:"/Review",
            state: {movieInfo: this.state.movieInfo}
        })
    }
    
    componentDidMount() {
        getMovieDetails(this.props.review.imdbID).then((details) => {
            this.setState({movieInfo: details});
        })
    }

    componentDidUpdate(prevProps){
        if(prevProps.review.imdbID !== this.props.review.imdbID){
            getMovieDetails(this.props.review.imdbID).then((details) => {
                this.setState({movieInfo: details});
            })
        }
    }

    render(){
        const {username,rating,date} = this.props.review;
        const {title,poster,year,rated} = this.state.movieInfo;
        
        return(
            <div style={{marginTop:"10px"}}>
                <div className="card browse-card">
                <div className="card-header">
                    <User username={username} myUsername={this.props.username} userClass={'reviewUser'}/>
                    <p className="text-muted date" >{date ? date.slice(0,10): undefined}</p>
                </div>
                    <div className="row no-gutters" style={{padding:"5px"}}>
                        <div className="col-auto">
                        <div className="card-block px-2">
                                <img className="poster" style={{height:"250px"}} src={poster} alt="movie cover"/> 
                                </div></div>
                        <div className="col">
                        <div className="card-block px-2">
                            <h5 className="title">{title}</h5> 
                            <p className="text-muted" style={{fontSize:"12px"}}>{year} | {rated}</p>

                            <Rating name="read-only customized" defaultValue={0}
                            emptyIcon={ <Star style={{ color: "grey" }} fontSize="inherit"/>} 
                            value={rating.stars} readOnly /> 

                            <p style={{fontSize:"16px"}}>{rating.review}</p>
                            <Button variant="secondary" type="submit" onClick={this.onMovieClick}>Rate this movie</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ReviewCard)