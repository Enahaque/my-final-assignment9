// import React, { useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    // const[reviews,setReviews] = useState();
    const data=[
        {id:1,name:'Mike', src:'https://i.ibb.co/dPJqBHF/resized-image-Promo-1.jpg',review:'*****'},
        {id:2,name:'Nike', src:'https://i.ibb.co/dPJqBHF/resized-image-Promo-1.jpg', review:'****'},
        {id:3,name:'Sike', src:'https://i.ibb.co/dPJqBHF/resized-image-Promo-1.jpg', review:'***'},
    ];
    return (
        <div>
            <h3>This is Reviews section</h3>
            {
                data.map(data=><Review
                key={data.id}
                data={data}
                
                ></Review>)
            }
        </div>
    );
};

export default Reviews;