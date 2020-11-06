import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const headerStyle = {
        backgroundColor: "black",
        position: "absolute",
        top: "0",
        left: "0",
        height: "80px",
        width: "100%",
    };

    const headerName = {
        color: "white",
        fontSize: "55px",
        fontWeight: "bolder",
        position: "absolute",
        left: "20px",
        top: "25px",
        fontFamily: "Helvetica Neue",
        color: "white",
    };

    return (
        <div style={headerStyle}>
            <span>
                <Link to="/" style={headerName}>
                    yetlify.
                </Link>
            </span>
        </div>
    );
};

export default Header;
