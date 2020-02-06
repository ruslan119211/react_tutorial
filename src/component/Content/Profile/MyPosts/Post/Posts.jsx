import React from 'react';
import { useState } from 'react'; // Добавление хуков

const Posts = (props) =>{
    const [count, setCount] = useState(props.countLikes);
    return(
       <div className="item">
           <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg" alt="" className="user-image"/>
           <span>{props.message}</span>
           <div className="btn_like">
               <button onClick={ ()=>setCount(count + 1 )}>Like </button><span>{count}</span>
           </div>
        </div>
    );
}

export default Posts;