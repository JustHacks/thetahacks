import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { useRouter } from "next/router";
import Link from 'next/link';
import firebase from "firebase";
import styles from "./form.module.css";
import buttonStyles from './button.module.css';

const SignupForm = () => {
	const router = useRouter();

	useEffect(() => {
		firebase.auth().onAuthStateChanged(() => {
			if (firebase.auth().currentUser) {
				router.push("/dashboard");
			}
		});
	}, []);
	
	const [submitError, setSubmitError] = useState("");

	const onSubmit = async ({ email, displayName, password }, { setSubmitting }) => {
		if(submitError){
			setSubmitError("");
		}
		try {
    		await firebase.auth().createUserWithEmailAndPassword(email, password);
			router.push("/dashboard");
		} catch(e){
			setSubmitError(e.message);
		}
	};

	const validate = ({ email, password,displayName }) => {
		const errors = {};

		if (!email) {
			errors.email = "*Required";
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
				<div className={styles.container}>
					<h1 className={styles.headerOne}>
						Sign Up
					</h1>
					
					<form onSubmit={handleSubmit}>
						<label htmlFor="displayName">Display Name</label>
						<input
							type="text"
							name="displayName"
							placeholder="Display.."
							id="displayName"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.displayName}
							required
						/>
						
						<div className={styles.formError}>{errors.displayName && touched.displayName && errors.displayName}</div>
						
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
						
						<div className={styles.formError}>{errors.email && touched.email && errors.email}</div>

						<div className={styles.wrap}>
							<label htmlFor="password">Password:</label>
							<input
								type="password"
								name="password"
								placeholder="Password.."
								id="password"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
								required
							/>
						</div>
					
						<div className={styles.formError}>
							{errors.password && touched.password && errors.password}
						</div><br/>
						{
							submitError &&
							<div className={styles.formError}>
								{submitError}
							</div>
						}
						<button className={`${styles.submitButton} ${buttonStyles.btn} ${buttonStyles.primaryBtn} `} type="submit" disabled={isSubmitting}> Submit </button>
						<p className={styles.bottomText}>Have an account? <Link href="/login"><a className={styles.link}>Login</a></Link></p>
					</form>
				</div>
			)}
		</Formik>
	);
};

export default SignupForm;