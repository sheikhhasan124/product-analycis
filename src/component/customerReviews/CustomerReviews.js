import React from 'react';
import './CustomerReview.css'

const CustomerReviews = ({review}) => {
    console.log(review)
    const {name,ratings,comments,img}=review;
    return (
        <div className='customer-review'>
            <div className="customer-profile">
            <img src={img} alt="" />
            <h3>{name}</h3>
            </div>
            <p>"{comments}"</p>
            <h4 className='rating'>Ratings: <span className='rating-text'>{ratings}</span> </h4>

        </div>
    );
};

export default CustomerReviews;