import React, { useEffect, useState } from 'react';
import img from '../../img/tshirt.jpg'
import CustomerReviews from '../customerReviews/CustomerReviews';
import './Home.css'

const Home = () => {
    const [reviews, setReviews]=useState([])

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className=''>
            
            <div className="shop">
                <div className="shop-header">
                    <h1>Best T-Shirt shop</h1>
                    <p>A T-shirt, or tee shirt, was originally worn only by men as an undershirt. Now it is defined as a short-sleeved, collarless undershirt or any outer shirt of a similar design. It got its name because it resembles the capital letter T in shape.</p>
                    <button>Live demo</button>
                </div>
                <div className="shop-banner">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="customer-reviews">
                <h2 className='heading'>Customer Review</h2>
                  <div className="customer-reviews-section">
                       {reviews.slice(0,3).map(review=><CustomerReviews key={review.id} review={review}></CustomerReviews>)}
                  </div>
                <button>see reviwe</button>
            </div>
        </div>
    );
};

export default Home;