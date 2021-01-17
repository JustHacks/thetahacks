import React from "react";
import Link from "next/link";
import styles from './modal.module.css';

const wCard = () => {
	return (
		<div className="card-area">
            <div className="w-card">
          		<img src="/images/env.jpg" alt="orgImg" />
           		<div className="card-text">
					<h4>Greenpeace</h4>
					<p>Help save the environment by donating to Greenpeace.</p>
				
					<div className="btns">
                        <Link href="/charity/view/greenpeace">
						    <a className="btn primary-btn" >Donate Now</a>
                        </Link>
                        <Link href="/charity/view/greenpeace">
						    <a className="btn secondary-btn" >Read More</a>
                        </Link>
					</div>
				</div>
            </div>

            <div className="w-card">
				<img src="images/doc.jpg" alt="orgImg" />
				<div className="card-text">
					<h4>St. Jude Hospital</h4>
					<p>Support children's health and curing diseases with ad donation to St. Jude.</p>
					
					<div className="btns">
                        <Link href="/charity/view/st--jude-children-s-hospital">
						    <a className="btn primary-btn" >Donate Now</a>
                        </Link>
                        <Link href="/charity/view/st--jude-children-s-hospital">
						    <a id="btn" className="btn secondary-btn" >Read More</a>
                        </Link>
					</div>
				</div>
            </div>

            <div className="w-card">
				<img src="images/edu.jpg" alt="orgImg" />
				<div className="card-text">
					<h4>Save the Children</h4>
					<p>A donation to Save the Children helps fund children's education nad health.</p>
					
					<div className="btns">
                        <Link href="/charity/view/save-the-children">
						    <a className="btn primary-btn" >Donate Now</a>
                        </Link>
                        <Link href="/charity/view/save-the-children">
						    <a className="btn secondary-btn" >Read More</a>
                        </Link>
					</div>
				</div>
      </div>
			<div id="modal" className="modal">
				<div className={styles.modalContent}>
					<span className="close">%times;</span>
					<p>	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare elementum nunc, eget pulvinar felis aliquet at. Suspendisse a eleifend mauris, et pretium sapien. Donec tempus interdum tortor nec mattis. Duis eu nibh porta libero blandit rhoncus quis quis augue.</p>
				</div>
			</div>
    </div>
	);
};

export default wCard;
