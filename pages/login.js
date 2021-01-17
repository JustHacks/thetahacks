import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Head from 'next/head';
import LoginForm from "../components/loginForm";

const LoginPage = () => {
    
	return (
		<div>
		<Head>
			<title>Pana | Login</title>
			<link rel="stylesheet" href="../styles/login.css"/>
		</Head>
		<LoginForm />
		</div>
	);
};

export default LoginPage;