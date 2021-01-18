import React from "react";

const Footer = () => {
	return (
		<div className="footer">
            <div className="socials">
				<div className="icons">
					<h3>Follow us on</h3>
					<i className="fab fa-github"></i>
					<i className="fab fa-twitter"></i>
					<i className="fab fa-instagram"></i>
				</div>
				
				<div className="copyright">&#xA9; Pana 2021</div>
			</div>

			<div className="links">
				<ul><h3>Donate Via</h3>
					<li>Amazon pay</li>
					<li>Apple pay</li>
					<li>Paypal</li>
					<li>Google pay</li>
				</ul>
				<ul><h3>Donate To</h3>
					<li>Individuals</li>
					<li>Orphanage</li>
					<li>Organizations</li>
					<li>Old age home</li>
				</ul>
				<ul><h3>Donate For</h3>
					<li>Covid-19</li>
					<li>Children</li>
					<li>Women</li>
					<li>Medical</li>
					<li>Environment</li>
					<li>Elders</li>
				</ul>
            </div>
        </div>
	);
};

export default Footer;
