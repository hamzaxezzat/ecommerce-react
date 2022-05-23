import React from "react";

function About() {
    return (
        <section className="about-section">
            <div className="container">
                <div className="row">
                    <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="title">About Us</span>
                                <h1>All you want</h1>
                                <h2 className="display-8">in one place</h2>
                            </div>
                            <div className="text">
                                That’s what gets us up every day. Working with
                                you to make ground-breaking, industry-defining,
                                heart-racing moves. The kind of work that speaks
                                to possibility and progress, unlocking
                                opportunity to drive positive impact for your
                                brand—and for the world around us.
                            </div>
                            <ul className="list-style-one">
                                <li>Men's Clothing</li>
                                <li>Women's Clothing</li>
                                <li>Electronics</li>
                                <li>Jewelries</li>
                            </ul>
                            <div className="btn-box">
                                <a href="/" className="theme-btn btn-style-one">
                                    Shopping
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column wow fadeInLeft">
                            <img src="./assets/poster.jpg" alt="s" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
