import React from "react";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div className="main-footer">
            <h1 className="list-unstyled">
                <ul>949-420-6969</ul>
                <ul>Laguna Beach, CA, USA</ul>
                <ul>1438 Pacific Coast Highway</ul>
            </h1>
            <div className="last-line">
                &copy;{new Date().getFullYear()} ONLY-T'S | All rights reserved |
            <Link to="/aboutus">About Us</Link>
            </div>
        </div>
    );
}





export default Footer