import React from "react";
import Link from "next/link";

const Hero = () => {
	return (
		<div className="hero">
        <h1>Donate money easily.</h1>
        <h4>Pana makes donating money to charities and causes easier than ever.</h4>
        <div className="btns">
            <Link href="/dashboard">
                <a className="btn primary-btn" >Donate Now</a>
            </Link>
            <Link href="/dashboard">
                <a className="btn tertiary-btn" >Read More</a>
            </Link>
        </div>
        </div>
	);
};

export default Hero;
