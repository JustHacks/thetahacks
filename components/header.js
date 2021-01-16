import React, { useState } from "react";

const Header = () => {
    const [hamburger, setHamburger] = useState(false);

	return (
		<div className="header">
            <div className="logo">
                <img src="/images/logo.png" alt="logo"/>
            </div>
                <div className="nav">
                    <div className="search-bar">
                        <input type="text" placeholder="Search.."/><i className="fas fa-search"></i>
                    </div>
                    <a className="btn primary-btn" href="">Login</a>
                    <a className="btn secondary-btn" href="">Create</a>
                    
					<div className={`hamburger ${hamburger ? 'hamburger-active' : ''}`}>
                        <i className="fas fa-bars" onClick={() => setHamburger(true)}></i>
                        
						<ul className="contents">
                            <div className="close">
                                <i className="fas fa-times" onClick={() => setHamburger(false)}></i>
                            </div>
                            <li>this is a</li>
                            <li>hamburger</li>
                            <li>menu</li>
                        </ul>
                    </div>
                </div>
        </div>
	);
};

export default Header;
