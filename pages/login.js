import React, { useState } from "react";
import Link from 'next/link';
import Head from 'next/head';
import { Formik } from "formik";
import firebase from "firebase";

import Footer from '../components/footer';

const LoginPage = () => {
    const user = firebase.auth().currentUser;
    if (user) {
        window.location = '/dashboard'; // is this the right way to do this?
    }

	const onSubmit = async ({ email, password }, { setSubmitting }) => {
		await firebase.auth().signInWithEmailAndPassword(email, password);
        window.location = '/dashboard';
		setSubmitting(false);
	};

	const validate = ({ email, password }) => {
		const errors = {};

		if (!email) {
			errors.email = "Required";
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
			errors.email = "Invalid email address";
		} else if (password.length < 8){
			errors.password = "Password too short.";
		} else if (password.length > 128){
			errors.password = "Password too long.";
		}
		return errors;
	};

	return (
		<>
		<Head>
			<title>Pana | Login</title>
		</Head>
			<Formik
				initialValues={{ email: '', password: '' }}
				validate={validate}
				onSubmit={onSubmit}
			>
				{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
				<div className="container">
					<form onSubmit={handleSubmit}>
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Email.."
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
						{errors.email && touched.email && errors.email}

						<label htmlFor="password">Password:</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Password.."
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
						/>
						{errors.password && touched.password && errors.password}
					
						<button type="submit" disabled={isSubmitting}> Submit </button>
						<p id="bottomText">Don't have an account? <Link href="/signup"><a>Sign Up</a></Link></p>
					</form>
					</div>
				)}
			</Formik>
			/*<style jsx>{`
			
			`}</style>*/
		</>
	);
};

export default LoginPage;