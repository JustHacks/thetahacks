import React, { useState } from "react";
import Link from "next/link";
import modalStyles from './modal.module.css';
import Head from 'next/head';
import { charityRead } from "../lib/api.js";
import CharityView from "./charityView";

const wCard = () => {
    const [modal, setModal] = useState(false);

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
						<button onClick={() => setModal("greenpeace")} className="btn secondary-btn" >Read More</button>
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
						<button onClick={() => setModal("st--jude-children-s-hospital")} className="btn secondary-btn" >Read More</button>
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
						<button onClick={() => setModal("save-the-children")} className="btn secondary-btn" >Read More</button>
					</div>
				</div>
			</div>
			{
				modal &&
				<div id="modal" className={modalStyles.modal}>
					<div className={modalStyles.modalContent}>
						<span className={modalStyles.close} onClick={() => setModal(null)}>&times;</span>
						<CharityView id={modal} />
					</div>
				</div>
			}
		</div>
	);
};

export default wCard;