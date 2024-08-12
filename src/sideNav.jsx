import React from "react";
import './App.css'

function SideBar(props) {
    const {
        showSideNav,
        setShowSideNav
    } = props
    return (
        <>
            <div className={showSideNav ? "sideBar active" : "sideBar"}>
                <button onClick={() => setShowSideNav(false)}>
                    Click Me!!!
                </button>
                <p>
                    CONTACT US
                </p>
            </div>
        </>
    )
}

export default SideBar