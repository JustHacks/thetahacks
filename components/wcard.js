import React from "react";

const wCard = () => {
	return (
		<div className="card-area">
            <div className="w-card">
            <img src="/images/env.jpg" alt="orgImg" />
            <div className="card-text">
            <h4>Lorem ipsum dolor sit.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsa, libero blanditiis numquam modi beatae voluptat</p>
            <div className="btns">
            <a className="btn primary-btn" href="">Donate Now</a>
            <a className="btn secondary-btn" href="">Read More</a>
            </div></div>
            </div>

            <div className="w-card">
            <img src="images/doc.jpg" alt="orgImg" />
            <div className="card-text">
            <h4>Lorem ipsum dolor sit.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsa, libero blanditiis numquam modi beatae voluptat</p>
            <div className="btns">
            <a className="btn primary-btn" href="">Donate Now</a>
            <a className="btn secondary-btn" href="">Read More</a>
            </div></div>
            </div>

            <div className="w-card">
            <img src="images/edu.jpg" alt="orgImg" />
            <div className="card-text">
            <h4>Lorem ipsum dolor sit.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsa, libero blanditiis numquam modi beatae voluptat</p>
            <div className="btns">
            <a className="btn primary-btn" href="">Donate Now</a>
            <a className="btn secondary-btn" href="">Read More</a>
            </div></div>
            </div>
        </div>
	);
};

export default wCard;
