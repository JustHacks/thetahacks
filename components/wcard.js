import React, { useState } from "react";
import Link from "next/link";
import modalStyles from './modal.module.css';
import Head from 'next/head';

const wCard = () => {
    const [modal, setModal] = useState(false);
	return (
		<>
			<Head>
			</Head>
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
						    <a onClick={() => setModal(true)} className="btn secondary-btn" >Read More</a>
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
						    <a onClick={() => setModal(true)} className="btn secondary-btn" >Read More</a>
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
						    <a onClick={() => setModal(true)} className="btn secondary-btn" >Read More</a>
                        </Link>
					</div>
				</div>
      </div>
			<div id="modal" className={modalStyles.modal + ' ' +(modal ? '' : modalStyles.hidden)}>
  			<div className={modalStyles.modalContent}>
    	<span className={modalStyles.close} onClick={() => setModal(false)}>&times;</span>
    	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel vestibulum neque. Integer elementum molestie tristique. Nunc euismod, felis eu facilisis iaculis, odio nibh ornare mi, dapibus sagittis sem mi et nulla. Aenean posuere rhoncus ipsum, in fermentum metus. Nam blandit urna vel sem pharetra, a condimentum mauris hendrerit.</p>
  		</div>

    </div>
		</div>
		</>
	);
};

export default wCard;
