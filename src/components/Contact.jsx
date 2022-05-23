import React from "react";

function Contact() {
    return (
        <section className="contact_us d-flex flex-column vh-100">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="contact_inner">
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="contact_form_inner">
                                        <div className="contact_field">
                                            <h3>Contatc Us</h3>
                                            <p>
                                                Feel Free to contact us any
                                                time. We will get back to you as
                                                soon as we can!.
                                            </p>
                                            <input
                                                type="text"
                                                className="form-control form-group"
                                                placeholder="Name"
                                            />
                                            <input
                                                type="text"
                                                className="form-control form-group"
                                                placeholder="Email"
                                            />
                                            <textarea
                                                className="form-control form-group"
                                                placeholder="Message"
                                            ></textarea>
                                            <button className="contact_form_submit">
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="right_conatct_social_icon d-flex align-items-end justify-content-center">
                                        <div className="socil_item_inner d-flex">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-facebook-square "></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
