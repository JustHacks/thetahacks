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
						    <a onClick={() => setModal(true)} className="btn secondary-btn" >Read More</a>
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
						    <a onClick={() => setModal(true)} className="btn secondary-btn" >Read More</a>
					</div>
				</div>
      </div>
			<div id="modal" className={modalStyles.modal + ' ' +(modal ? '' : modalStyles.hidden)}>
  			<div className={modalStyles.modalContent}>
    	<span className={modalStyles.close} onClick={() => setModal(false)}>&times;</span>
			<h2 className={modalStyles.headerTwo}>Lorem ipsum dolor</h2>
    	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut massa mi, finibus ut elit sed, pellentesque eleifend mauris. Donec accumsan eros ligula, a convallis risus feugiat ut. Mauris eget ex id lorem consectetur commodo. Mauris et vulputate magna. In lectus nibh, faucibus nec venenatis ac, egestas ac nisl. Praesent lacinia convallis egestas. Praesent egestas ullamcorper iaculis. Aenean massa quam, ultrices ut eros et, luctus porttitor nisl. Cras tempor vehicula porta. Sed ornare elit ac turpis auctor ornare. Suspendisse blandit quis elit nec dignissim.</p>
  		</div>

    </div>
		</div>
		</>
	);
};

export default wCard;
