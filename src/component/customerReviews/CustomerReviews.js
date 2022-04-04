import React from 'react';
import './CustomerReview.css'

const CustomerReviews = ({review}) => {
    console.log(review)
    const {name,ratings,comments}=review;
    return (
        <div className='customer-review'>
            <p>{comments}</p>
            <h3>{name}</h3>
            <h4>Ratings:{ratings}</h4>

        </div>
    );
};

export default CustomerReviews;