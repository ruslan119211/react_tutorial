import preloader from "../../../img/preloader_head.gif";
import React from "react";

let Preloader =(props)=>{
    return  <div className='preloader_container'>
                <img src={preloader} className='preloader_img'/>
            </div>

}
export default Preloader;