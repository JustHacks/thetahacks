import React, { useState, useEffect } from "react";
import { Formik } from "formik";

const NewCharity = () => {
	
	const onSubmit = async ({ email, password }, { setSubmitting }) => {
		setSubmitting(false);
	};

	const validate = ({ photo, name, description, donationLinks, infoLinks }) => {
		const errors = {};
		
		if(name.length < 8){
			errors.name = "Charity name too short."
		} else if(name.length > 64){
			errors.name = "Charity name too long.";
		} else if(description.length < 32){
			errors.description = "Description too short.";
		} else if(description.length > 512){
			errors.description = "Description too long.";
		} else if(photo.size > 1024*1024*5){
			errors.photo = "File too large.";
		} else {
			const dLinks = donationLinks.split(",").map(link =>  link.trim()).filter(link => link);

			dLinks.forEach(link => {
				let url;
				try {
					url = new URL(link);
				} catch(e){
					errors.donationLinks = "Invalid donation links.";
					return;
				}
				if(url.protocol != "https" || url.protocol != "http"){
					errors.donationLinks = "Invalid donation links.";
				}
			});
		}

		return errors;
	};

	return (
		<Formik
			initialValues={{ name: '', description: '', donationLinks: '', infoLinks: '' }}
			validate={validate}
			onSubmit={onSubmit}
		>
			{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
				<form onSubmit={handleSubmit}>
					<input
						type="file"
						name="photo"
						onChange={e => setFieldValue("photo", e.target.files[0])}
						onBlur={handleBlur}
					/>
					{errors.photo && touched.photo && errors.photo}
					
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