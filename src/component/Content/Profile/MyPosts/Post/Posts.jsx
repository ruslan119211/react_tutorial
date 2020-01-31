import React from 'react';

const Posts = (props) =>{
    return(
       <div className="item">
           <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg" alt="" className="user-image"/>
           <span>{props.message}</span>
           <div className="btn_like">
               <a href="#!">Like </a><span>{props.countLikes}</span>
           </div>
        </div>
    );
}

export default Posts;