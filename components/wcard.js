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
					</div>
				</div>
            </div>

            <div className="w-card">
				<img src="images/doc.jpg" alt="orgImg" />
				<div className="card-text">
					<h4>Lorem ipsum dolor sit.</h4>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsa, libero blanditiis numquam modi beatae voluptat</p>
					
					<div className="btns">
						<a className="btn primary-btn" href="">Donate Now</a>
						<a className="btn secondary-btn" href="">Read More</a>
					</div>
				</div>
            </div>

            <div className="w-card">
				<img src="images/edu.jpg" alt="orgImg" />
				<div className="card-text">
					<h4>Lorem ipsum dolor sit.</h4>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsa, libero blanditiis numquam modi beatae voluptat</p>
					
					<div className="btns">
						<a className="btn primary-btn" href="">Donate Now</a>
						<a className="btn secondary-btn" href="">Read More</a>
					</div>
				</div>
            </div>
					<div id="modal" className="modal">
						<div className="modalContent">
							<span className="close">X</span>
							<p>	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare elementum nunc, eget pulvinar felis aliquet at. Suspendisse a eleifend mauris, et pretium sapien. Donec tempus interdum tortor nec mattis. Duis eu nibh porta libero blandit rhoncus quis quis augue.</p>
						</div>
					</div>
        </div>
	);
};

export default wCard;
