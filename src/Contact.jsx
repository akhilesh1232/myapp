import React from "react";
import "./Contact.css";

const Contact = () =>{
    return(
        <>
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row" id="form">
                    <h1 class="mx-auto">Contact Me</h1>                
                        <form action="https://submit-form.com/KKFAakT0" >
                        <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <input type="text" Name="First_name_input" className="form-control my-3" placeholder="Enter First Name"/>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <input type="text" name="last_name_input" className="form-control my-3" placeholder="Enter Last Name"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="email" name="email_input" className="form-control my-3" placeholder="Enter Email"/>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control my-3" name="message_input" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-success">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;