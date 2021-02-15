import React from "react";
import { NavLink } from "react-router-dom";


const Content = () =>{ 
    return(
    <>

    <div className="continer-fluid my-3">
    <div className="row">
    <div className="col-10 mx-auto">
    <div className="row">
    <div className="col">
        <div className="card">      
        <div className="card-body">
            <h5 className="card-title">Farmers Protest</h5>
            <p className="card-text">This blog talks about the ongoing farmers protest and the views of author on it. The blog is published on 8/2/021</p>
            <NavLink to={{
                pathname: "/View",
                viewProps: {
                    number:1
                }
        }} className="btn btn-success">Read</NavLink>
        </div>
        </div>
    </div>
    <div className="col">
        <div className="card">      
        <div className="card-body">
            <h5 className="card-title">Indian Education System</h5>
            <p className="card-text">This blog talks about the indian education system and views of author on it. The blog is published on 19/11/019</p>
            <NavLink to={{
                pathname: "/View",
                viewProps: {
                    number: 2
                }
            }} className="btn btn-success">Read</NavLink>
        </div>
        </div>
    </div>
    <div className="col">
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
    );
}
export default Content;
