import React, { useState, useEffect } from "react";
import Head from 'next/head';
import SignupForm from "../components/signupForm";

const SignupPage = () => {
	return (
		<>
			<Head>
				<title>Pana | Sign-up</title>
				<link rel="stylesheet" href="../styles/login.css" />
			</Head>
			<SignupForm />
		</>
	);
};

export default SignupPage;