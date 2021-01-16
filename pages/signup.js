import React, { useState } from "react";
import { Formik } from "formik";
import Link from 'next/link';
import firebase from "firebase";

const SignupPage = () => {
	
	const onSubmit = async ({ email, password }, { setSubmitting }) => {
		const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
		setSubmitting(false);
	};

	const validate = ({ email, password }) => {
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
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="displayName"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.email}
					/>
					{errors.displayName && touched.displayName && errors.displayName}
					
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
					<p>Have an account? <Link href="/login"><a>Login</a></Link></p>
				</form>
			)}
		</Formik>
	);
};

export default SignupPage;