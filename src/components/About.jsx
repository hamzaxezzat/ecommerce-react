import React from "react";

function About() {
    return (
        <div className="container">
            <div className=" mt-5 row ">
                <div className="col-3">
                    <div className="image-about  object-center text-center">
                        <img src="./assets/poster.jpg" alt="Aboutus" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="text">
                        <span className="text-gray-500 border-b-2 lead border-indigo-600 uppercase">
                            About us
                        </span>
                        <h2 className="my-4 font-bold text-3xl display-6 fw-bolder ">
                            About{" "}
                            <span className="text-indigo-600">Our Company</span>
                        </h2>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aliquid, commodi doloremque, fugiat illum
                            magni minus nisi nulla numquam obcaecati placeat
                            quia, repellat tempore voluptatum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
