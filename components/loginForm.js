import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Head from 'next/head'; //no need for Head will just cause unnecesary dgiohefg
import { Formik } from "formik";
import firebase from "firebase";
import styles from "./form.module.css";
import buttonStyles from "./button.module.css";

const LoginForm = () => {
	useEffect(() => {
		firebase.auth().onAuthStateChanged(() => {
			if (firebase.auth().currentUser) {
				window.location = '/dashboard'; // is this the right way to do this?
			}
		});
	}, []);

	const onSubmit = async ({ email, password }, { setSubmitting }) => {
		await firebase.auth().signInWithEmailAndPassword(email, password);
    };

	const validate = ({ email, password }) => {
		const errors = {};

		if (!email) {
			errors.email = "Required";
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
			errors.email = "Invalid email address";
		} else if (!password){
			errors.password = "Required";
		} else if (password.length < 8){
			errors.password = "Password too short.";
		} else if (password.length > 128){
			errors.password = "Password too long.";
		}
		return errors;
	};

	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			validate={validate}
			onSubmit={onSubmit}
		>
			{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
				<div className={styles.bodyWrap}>
				<div className={styles.container}>
				<h1 className={styles.headerOne}>Login</h1>
					<form onSubmit={handleSubmit}>
						<div className={styles.wrap}>
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
						</div>
						{errors.email && touched.email && errors.email}
						
						<div className={styles.wrap}>
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
						</div>
						{errors.password && touched.password && errors.password}
						
						<button className={`${styles.submitButton} ${buttonStyles.btn} ${buttonStyles.primaryBtn}`} type="submit" disabled={isSubmitting}> Submit </button> <br />
						
						<p className={styles.bottomText}>
							Don't have an account?  
							<Link href="/signup"><a className={styles.link}> Sign Up</a></Link>
						</p>
					</form>
				</div>
				</div>
			)}
		</Formik>
	);
};

export default LoginForm;