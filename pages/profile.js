import React, { useEffect, useState } from "react";
import firebase from "firebase";
import Head from 'next/head';

const Profile = () => {
	
	const onSubmit = ({ displayName }) => {
		const user = firebase.auth().currentUser;

		user.updateProfile({ displayName });
		// firebase.storage().child("users/images/pfp");
	};

	return (
		<div>
			<Head>
				<title>Pana | { displayName }</title>
			</Head>
		</div>
	)
};

export default Profile;