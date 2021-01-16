import React from "react";
import Head from "next/head";
import firebase from "firebase";
import '../styles/style.css';

const firebaseConfig = {
	apiKey: "AIzaSyBmYQrav3uuCnk28KCTmSUbRRV9fAATr3A",
	authDomain: "dbdb-b9027.firebaseapp.com",
	projectId: "dbdb-b9027",
	storageBucket: "dbdb-b9027.appspot.com",
	messagingSenderId: "844628096387",
	appId: "1:844628096387:web:563fd8ae9db78024d4b2b6",
	measurementId: "G-WFBCFV9JJ2"
};

class App extends React.Component {
	constructor(props){
		super(props);
	};
	async componentDidMount(){
		try {
			await firebase.initializeApp(firebaseConfig);
		} catch(e){
			console.error(e);
		}
		await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
	};
	render(){
		const { Component, pageProps } = this.props;
		return <>
			<Head>
				<script src="https://kit.fontawesome.com/43c1b0f304.js" crossorigin="anonymous"></script>
			</Head>
			<Component {...pageProps}/>
		</>
	};
};

export default App;