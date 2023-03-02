import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
    console.log("NavBar randered");
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a
                    className="navbar-brand"
                    href="#"
                >
                    Navbar
                    <span className="badge badge-pill badge-secondary m-2">{totalCounters}</span>
                </a>
            </div>
        </nav>
    );
};

export default NavBar;
