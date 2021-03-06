import React from 'react';
import { useNavigate } from "react-router-dom";

const Review = (props) => {
    const{src,name,review,id}=props.data;
    const navigate = useNavigate();

    const ShowReviewerDetail=()=>{
        // const path=`/Reviewer/${id}`;
        // navigate(path);
        navigate('/Reviews/'+id);
}
    return (
        <div>
            <img src={src} className="w-5 h-5 rounded" alt=""/>
           <h1>name:{name}</h1>
           <span>{review}</span>
           <button onClick={ShowReviewerDetail}>{name}:{id}</button>
        </div>
    );
};

export default Review;