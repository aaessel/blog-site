import React from "react";
import "./PageTitle.css"

export default function PageTitle(){
    return(
        <section className="container mt-5">
            <h1 className="text-center">Inside Design: Stories and Interviews</h1>
            <small className="text-center d-block mb-4">Subscribe to learn about new product features, the latest technology, and updates.</small>
            <div className="container d-flex justify-content-center input-group" id="input-section">
                <input type="text" className="form-control" id="email-box"/>               
                <button type="button" className="btn btn-dark" id="subscribe-button">Subscribe</button>
            </div>
        </section>
    )
}