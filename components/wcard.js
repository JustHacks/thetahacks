import React from "react";
import styles from './modal.module.css';

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
					// ow watcha doin cow (u mean sugar i think perhaps)
					// ow ya sugar?
					// anyways you are supposed to make a file with styles and import it yk
						<div className={styles.modalContent}>
							<span className="close">X</span>
							<p>	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare elementum nunc, eget pulvinar felis aliquet at. Suspendisse a eleifend mauris, et pretium sapien. Donec tempus interdum tortor nec mattis. Duis eu nibh porta libero blandit rhoncus quis quis augue.</p>
						</div>
					</div>
        </div>
	);
};

export default wCard;
