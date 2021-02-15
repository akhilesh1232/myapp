import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Blog1 from "../src/Blogs/Blog1";
import Blog2 from "../src/Blogs/Blog2";
import Review1 from './Blogs/Review1';


const View = (props) =>{
    const location = useLocation();
    const num = props.location.viewProps.number;
    if(num===1)
    {   return(
        <>
            <Blog1 /> 
        </>
        );
    }
    if(num===2)
    {
        return(
            <>
                <Blog2 />
            </>
        );
    }
    if(num==="1r")
    {
        return(
            <>
                <Review1 />
            </>
        );
    }
}
export default View;