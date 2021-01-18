import React, { useState, useEffect } from "react";
import Link from 'next/link';
import firebase from "firebase";
import SearchBar from "./searchBar";

const Header = ({ doStuff }) => {
    const [hamburger, setHamburger] = useState(false);
	const [isLoggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged(() => {
			if (firebase.auth().currentUser) {
				setLoggedIn(true);
			}
		});
	}, []);

	return (
		<div className="header">
            <div className="logo">
                 <img src="/images/logo.png" alt="logo"/>
                            <h2 id="title">Pana</h2>
            </div>
                <div className="nav">
                            <SearchBar onSearch={doStuff}/>

				  	{
						!isLoggedIn ?
						<>
							<Link href="/login">
								<a className="btn primary-btn" >Login</a>
							</Link>
							<Link href="/signup">
								<a className="btn secondary-btn" >Sign up</a>
							</Link>
						</> :
						<>
							<Link href="/login">
								<a className="btn primary-btn" >Login</a>
							</Link>
							<Link href="/signup">
								<a className="btn secondary-btn" >Sign Up</a>
							</Link>
						</>
					}

					<div className={`hamburger ${hamburger ? 'hamburger-active' : ''}`}>
                        <i className="fas fa-bars" onClick={() => setHamburger(true)}></i>
                        
						<ul className="contents">
                            <div className="close">
                                <i className="fas fa-times" onClick={() => setHamburger(false)}></i>
                            </div>
                            <li><Link href="/login"><a className="btn primary-btn">Login</a></Link></li>
                            <li><Link href="/signup"><a className="btn secondary-btn">Sign Up</a></Link></li>
                        </ul>
                    </div>
                </div>
        </div>
	);
};

export default Header;
