import React, { useEffect } from "react";
import firebase from "firebase";
import { useRouter } from "next/router";

const LogoutPage = () => {
	const router = useRouter();

	useEffect(() => {
		if(firebase.auth().currentUser){
			firebase.auth().signOut().then(() => {
				router.push("/");
			});
		} else {
			router.push("/");
		}
	}, []);

	return <div></div>;
};

export default LogoutPage;