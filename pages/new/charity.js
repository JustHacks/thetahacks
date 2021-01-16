import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import firebase from "firebase";
import { charityWrite } from "../../lib/api";

const NewCharity = () => {
	
	const onSubmit = async ({ donationLinks, description, website, name, tags, photo }, { setSubmitting }) => {
		const user = firebase.auth().currentUser;
        if (!user) {
            window.location = '/login'; // is this the right way to do this?
        }
        const reader = new FileReader();
        reader.addEventListener('load', async () => {
            charityWrite({ 
                name, 
                photo: {
                    name: photo.name,
                    body: reader.result,
                }, 
                desc: description, 
                website, 
                tags, 
                links: donationLinks, 
                owner: user.name, 
                token: await user.getIdToken()
            });
        });
        reader.readAsBinaryString(photo);

		setSubmitting(false);
	};

	const validate = ({ photo, name, description, donationLinks, website }) => {
		const errors = {};
		
		let url;
		try {
			url = new URL(website);
		} catch(e){
			errors.website = "Invalid donation links.";
			return;
		}
		if(url.protocol != "https" || url.protocol != "http"){
			errors.donationLinks = "Invalid donation links.";
			return;
		}

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
					return;
				}
			});
		}

		return errors;
	};

	return (
		<Formik
			initialValues={{ name: '', description: '', donationLinks: '', website: '' }}
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
						name="website"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.website}
					/>
					{errors.website && touched.website && errors.website}

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