import React from "react";
import './App.css'
import { RxCross2 } from "react-icons/rx";

function SideBar(props) {
    const {
        showSideNav,
        setShowSideNav
    } = props
    return (
        <>
            <div className={showSideNav ? "sideBar active" : "sideBar"}>
                <div className="close-button" onClick={() => setShowSideNav(false)}>
                    <RxCross2 size={30} />
                </div>
                <div className="components">
                    <button className="sb-button">
                        Home
                    </button>
                    <button className="sb-button">
                        Contact Us
                    </button>
                </div>
            </div>
        </>
    )
}

export default SideBar