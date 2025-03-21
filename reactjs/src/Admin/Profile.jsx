import React from "react";
import "./css/styles.css";
import "./js/scripts.js";
import Navbar from "./paths/Navbar.jsx";
import Sidebar from "./paths/Sidebar.jsx";
import Footer from "./paths/Footer.jsx";
import Profile from "../Components/adminpage/Profile.jsx";

const profile = () => {
    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <Profile />
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default profile;
