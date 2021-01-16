import React, { useState, useEffect } from "react";
import { Formik } from "formik";

const NewCharity = () => {
	
	const onSubmit = async ({ email, password }, { setSubmitting }) => {
		setSubmitting(false);
	};

	const validate = ({ email, password }) => {
		const errors = {};
		/*
		if (!email) {
			errors.email = "Required";
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
			errors.email = "Invalid email address";
		} else if (password.length < 8){
			errors.password = "Password too short.";
		} else if (password.length > 128){
			errors.password = "Password too long.";
		}
		*/
		return errors;
	};

	return (
		<Formik
			initialValues={{ name: '', description: '', donationLinks: '', infoLinks: '' }}
			validate={validate}
			onSubmit={onSubmit}
		>
			{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="name"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.name}
					/>
					{errors.name && touched.name && errors.name}

					<textarea
						type="text"
						name="description"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.description}
					/>
					{errors.description && touched.description && errors.description}
				
					<input
						type="text"
						name="infoLinks"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.infoLinks}
					/>
					{errors.infoLinks && touched.infoLinks && errors.infoLinks}

					<input
						type="text"
						name="donationLinks"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.donationLinks}
					/>
					{errors.donationLinks && touched.donationLinks && errors.donationLinks}

					<button type="submit" disabled={isSubmitting}> Submit </button>
				</form>
			)}
		</Formik>
	);
};

export default NewCharity;