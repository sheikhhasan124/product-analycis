import React from 'react';
import UserReviews from '../../customHook/UserReviews';
import CustomerReviews from '../customerReviews/CustomerReviews';

const Reviews = () => {
    const [reviews, setReviews]=UserReviews()
    return (
        <div>
            <div className="customer-reviews-section">
            {reviews.map(review=><CustomerReviews key={review.id} review={review}></CustomerReviews>)}
        </div>
        </div>
    );
};

export default Reviews;