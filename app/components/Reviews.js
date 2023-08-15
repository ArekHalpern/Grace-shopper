import React, {useEffect} from "react";
import { allReviewsOneProductThunk } from "../reducers/reviews";
import { connect } from 'react-redux';

function stars(starCount){
    let rating = "";
    for(let i = 1; i < 6; i++){
        rating = i > starCount ? rating.concat("☆") : rating.concat("★")
    }
    return rating;
}

function Reviews(props){
    const reviews = Array.from(props.reviews);

    return <div>
        {reviews.map( x => {
            // console.log(x);
            return <div key={`${x.id}`} className="card">
                <h5>{`${x.user.username}`} says: </h5>
                <h6>{`${x.review}`}</h6>
                <h4>{stars(parseInt(x.rating))}</h4>
            </div>
        })}
    </div>
}


function mapStateToProps(state){
    return {
        reviews: state.reviews,
    }
}

function mapDispatchToProps(dispatch){
    return {
        allReviewsOneProductThunk: id => dispatch( allReviewsOneProductThunk(id) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);