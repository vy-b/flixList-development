import React from 'react';
import Rating from '@material-ui/lab/Rating'
import Star from "@material-ui/icons/Star";
import './ReviewTab.css'
import {Card} from 'react-bootstrap'

class FriendReviews extends React.Component{
    render(){
        const {username,rating,date} = this.props.review;
        return(
            <div style={{marginTop:"10px"}}>
                <Card className="reviews-card">
                    <Card.Body className="reviews-cardbody">
                        <Card.Title>{username}</Card.Title>
                        <p className="text-muted" style={{fontSize:"12px"}}>{date ? date.slice(0,10): undefined}</p>
                        <Rating name="read-only customized" defaultValue={0}
                        emptyIcon={ <Star style={{ color: "grey" }} fontSize="inherit"/>} 
                        value={rating.stars} readOnly /> 
                        <Card.Text style={{fontSize:"20px"}}>
                        {rating.review}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default FriendReviews