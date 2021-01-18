import React from "react";
import Link from "next/link";

const About = () => {
	return (
		<div className="about">
            <h2>About Us</h2>
            <br />
            
			<p>Have you ever wanted to donate to a charity, but not known where to start? Maybe you want to find a specific cause to put your money towards. Well, now you can! Pana makes finding and donating to charities simple and painless. Simply search for a particular charity, open it, and you can access its website and many forms of payment. It's never been easier to give to a cause! On top of that, anyone with a cause they want to spread can create a charity for others to donate to!</p>
            <br />
			
			<h3>Donate Now for Elderly Care, Child Education, Orphanage, Women’s Welfare.</h3> 
            <br />

            <Link href="/signup">
                <a className="btn primary-btn" >Join Now</a>
            </Link>
        </div>
	);
};

export default About;
