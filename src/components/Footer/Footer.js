import React from "react";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div className="main-footer">
            <h1 className="list-unstyled">

                <ul>KESLER SURF &copy;{new Date().getFullYear()}</ul>
                <Link>Size Chart</Link>
                <Link>Terms and Policies</Link>
                <Link>Returns and Exchanges</Link>
                <Link>Contact Us</Link>
                <Link>Newsletter</Link>
            </h1>

        </div>
    );
}





export default Footer