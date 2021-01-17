import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { charityRead } from "../../../lib/api.js";

const ViewCharityPage = () => {
	const { id } = useRouter().query;
    
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
			<h1>{charity.name}</h1>
			<img src={charity.photo} />
            <a href={charity.website}>Website</a>
			<p>{charity.desc}</p>
            <h2>Links</h2>
			<ul>
				{
					charity.links.split(',').map(item =>
						<li><a href={item}>{item}</a></li>
					)
				}
			</ul>
		</main>
		:
		error ?
        <>
		    <span>Error loading charity. Check the link you are using and try again.</span><br/>
            <span>Exact error: {reason}</span>
        </>
		:
		<span>Loading...</span>
	);
};

export default ViewCharityPage;