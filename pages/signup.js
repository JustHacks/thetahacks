import React, { useState } from "react";
import { Formik } from "formik";
import Link from 'next/link';
import firebase from "firebase";

const SignupPage = () => {
	
	const onSubmit = async ({ email, displayName, password }, { setSubmitting }) => {
		const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
        window.location = '/dashboard';
		setSubmitting(false);
	};

	const validate = ({ email, password,displayName }) => {
		const errors = {};

		if (!email) {
			errors.email = "Required";
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
			errors.email = "Invalid email address";
		} else if (password.length < 6){
			errors.password = "Password too short.";
		} else if (displayName.length < 3){
			errors.displayName = "Display name too short.";
		}
		return errors;
	};

	return (
		<Formik
			initialValues={{ email: '', password: '', displayName: '' }}
			validate={validate}
			onSubmit={onSubmit}
		>
			{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
				<div className="container">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="displayName"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.displayName}
					/>
					{errors.displayName && touched.displayName && errors.displayName}
					
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
						placeholder="Password.."
						id="password"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.password}
					/>
					{errors.password && touched.password && errors.password}
					
					<button type="submit" disabled={isSubmitting}> Submit </button>
					<p>Have an account? <Link href="/login"><a>Login</a></Link></p>
				</form>
				</div>
			)}
		</Formik>
	);
};

export default SignupPage;