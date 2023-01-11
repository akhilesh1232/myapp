import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Blog1 from "../src/Blogs/Blog1";
import Blog2 from "../src/Blogs/Blog2";
import Blog3 from "../src/Blogs/Blog3";
import Blog4 from "../src/Blogs/Blog4";
import Blog5 from "../src/Blogs/Blog5";
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
    if(num===3)
    {
        return(
            <>
                <Blog3 />
            </>
        );
    }
    if(num===4)
    {
        return(
            <>
                <Blog4 />
            </>
        );
    }
    if(num===5)
    {
        return(
            <>
                <Blog5 />
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