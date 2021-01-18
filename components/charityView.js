import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from './id.module.css';
import { charityRead } from "../lib/api.js";

const CharityView = ({ id }) => {
	const [charity, setCharity] = useState(null);

    const [error, setError] = useState(false);
    const [reason, setReason] = useState('');

    useEffect(() => { (async () => {
        const data = await charityRead({ id });
        if (data.ok) {
            setCharity(data.charity);
        } else {
            setError(true);
            setReason(data.reason);
        }
    })() }, []);	

	return (
		charity ?
		<main>
			<div className="container">
				<h1>{charity.name}</h1>
				<img src={charity.photo} />
				
				<Link href={charity.website}>
					<a>Website</a>
				</Link>

				<br/><br/>
				<p>{charity.desc}</p>
				
				<h2>Donation links</h2>
				<ul>
					{charity.links.split(',').map(item => <li><a className={styles.link} href={item}>{item}</a></li>)}
				</ul>
				<ul class="tags">
					{charity.tags.split(' ').map(item => <li>{item}</li>)}
				</ul>
			</div>
		</main> :
		error ?
        <>
		    <span>Error loading charity. Check the link you are using and try again.</span><br/>
            <span>Exact error: {reason}</span>
        </> :
		<span>Loading...</span>
	);
};

export default CharityView;