import React from "react";
import "./Contact.css";

export const Contact = ({ data }) => {

    const sendThanks = () => {
        alert(`Thank you and welcome to our address: ${data.address}`)
    }

    return (
        <div className="contact-container">
            <span className="contact-title">Tel</span>
            <p className="contact-content">{data.tel}</p>
            <span className="contact-title">Address</span>
            <p className="contact-content">{data.address}</p>
            <span className="contact-title">Email</span>
            <p className="contact-content">{data.email}</p>
            <button onClick={sendThanks}>Send</button>
        </div>
    )
}