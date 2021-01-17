import React, { useState, useEffect } from "react";
import Link from 'next/link';
import firebase from "firebase";

const Header = () => {
    const [hamburger, setHamburger] = useState(false);
	const [isLoggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		const user = firebase.auth().currentUser;
		
		if(user){
			setLoggedIn(true);
		}
	}, []);

	return (
		<div className="header">
            <div className="logo">
                <img src="/images/logo.png" alt="logo"/>
            </div>
                <div className="nav">
                    <div className="search-bar">
                        <input type="text" placeholder="Search.."/><i className="fas fa-search"></i>
                    </div>
					{
						isLoggedIn ?
						<>
							<Link href="/login">
								<a className="btn primary-btn" >Login</a>
							</Link>
							<Link href="/signup">
								<a className="btn secondary-btn" >Sign up</a>
							</Link>
						</> :
						<>
							<Link href="/new/charity">
								<a className="btn primary-btn" >Create</a>
							</Link>
							<Link href="/logout">
								<a className="btn secondary-btn" >Logout</a>
							</Link>
						</>
					}

					<div className={`hamburger ${hamburger ? 'hamburger-active' : ''}`}>
                        <i className="fas fa-bars" onClick={() => setHamburger(true)}></i>
                        
						<ul className="contents">
                            <div className="close">
                                <i className="fas fa-times" onClick={() => setHamburger(false)}></i>
                            </div>
                            <li><Link href="/login"><a className="btn primary-btn">Create</a></Link></li>
                            <li><Link href="/logout"><a className="btn secondary-btn">Logout</a></Link></li>
                        </ul>
                    </div>
                </div>
        </div>
	);
};

export default Header;
