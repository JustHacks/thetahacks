import React, { useState } from "react";
import Link from 'next/link';
import { Formik } from "formik";
import firebase from "firebase";

const LoginPage = () => {
	
	const onSubmit = async ({ email, password }, { setSubmitting }) => {
		await firebase.auth().signInWithEmailAndPassword(email, password);
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
		<Formik
			initialValues={{ email: '', password: '' }}
			validate={validate}
			onSubmit={onSubmit}
		>
			{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
				<form onSubmit={handleSubmit}>
					<input
						type="email"
						name="email"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.email}
					/>
					{errors.email && touched.email && errors.email}

					<input
						type="password"
						name="password"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.password}
					/>
					{errors.password && touched.password && errors.password}
					
					<button type="submit" disabled={isSubmitting}> Submit </button>
					<p id="bottomText">Don't have an account? <Link href="/signup"><a>Sign Up</a></Link></p>
				</form>
			)}
		</Formik>
	);
};

export default LoginPage;