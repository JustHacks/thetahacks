import React, { useEffect, useState } from "react";
import firebase from "firebase";

const Profile = () => {
	
	const onSubmit = ({ displayName }) => {
		const user = firebase.auth().currentUser;

		user.updateProfile({ displayName });
		// firebase.storage().child("users/images/pfp");
	};

	return (
		<div>
		</div>
	)
};

export default Profile;