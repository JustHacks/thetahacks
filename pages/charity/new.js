import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import firebase from "firebase";
import Head from 'next/head';
import Link from 'next/link';
import newStyles from '../../components/new.module.css';
import { charityWrite } from "../../lib/api";
import { useRouter } from "next/router";

const NewCharity = () => {
	const router = useRouter();

    const [loaded, setLoaded] = useState(true);

	useEffect(() => {
		firebase.auth().onAuthStateChanged(() => {
			if (!firebase.auth().currentUser) {
				router.push("/login");
			}
		});
	}, []);

	const onSubmit = async ({ donationLinks, description, website, name, tags, photo }, { setSubmitting }) => {
    	const user = firebase.auth().currentUser;
		
		if (!user) {
            router.push("/login");
        }
        const reader = new FileReader();
        
		reader.addEventListener('load', async () => {
            await charityWrite({ 
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
            router.push("/dashboard");
        });
        reader.readAsBinaryString(photo);
		setSubmitting(false);
	};

	const validate = ({ photo, name, description, donationLinks, website, tags }) => {
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

		if(name.length < 2){
			errors.name = "Charity name too short. Should have a minimun of at least 2 chars."
		} else if(name.length > 64){
			errors.name = "Charity name too long. Name must be shorter than 64.";
		} else if(description.length < 32){
			errors.description = "Description too short.";
		} else if(description.length > 512){
			errors.description = "Description too long.";
		} else {
			const dLinks = donationLinks.split(",").map(link =>  link.trim()).filter(link => link);

			const t = dLinks.some(link => {
				let url;
				try {
					url = new URL(link);
				} catch(e){
					errors.donationLinks = "Invalid donation links.";
					return true;
				}
				if(url.protocol != "https" || url.protocol != "http"){
					errors.donationLinks = "Invalid donation links.";
					return true;
				}
			});
			if(t) return;

			const sTags = tags.split(",").map(tag => tag.trim()).filter(tag => tag);

			if(sTags.length > 10){
				errors.tags = "Too many tags";
				return;
			}
			sTags.some((tag) => {
				if(!(/[a-zA-Z0-9-]+/.match(tag))){
					errors.tags = "Invalid tag";
					return true;
				}
			});
		}

		return errors;
	};

	return (
		<>
			<Head>
				<title>Pana | New</title>
			</Head>
			<Link href="/dashboard">
				<a className={newStyles.btn}>Back</a>
			</Link>
			<Formik
				initialValues={{ name: '', description: '', donationLinks: '', website: '', tags: '' }}
				validate={validate}
				onSubmit={onSubmit}
			>
				{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
					<div className={newStyles.newContainer}>
						<form onSubmit={handleSubmit}>
							<div className={newStyles.wrap}>
							{/*
								<input
									type="file"
									name="photo"
									id="photo"
									accept="image/*"
									title="Upload Image for your charity"
									onChange={e => setFieldValue("photo", e.target.files[0])}
									onBlur={handleBlur}
								/>
								{errors.photo && touched.photo && errors.photo}
							*/}
							</div>
							<div className={newStyles.wrap}>
								<label htmlFor="name">Charity Name:</label><br></br>
								<input
									type="text"
									name="name"
									id="name"
									placeholder="Name..."
									title="Name for your charity"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.name}
								/>
								{errors.name && touched.name && errors.wrap}
							</div>
							<div className={newStyles.wrap}>
								<label htmlFor="description">Description/About: </label>
								<textarea
									type="text"
									name="description"
									placeholder="Description..."
									id="description"
									title="Description for your charity"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.description}
								/>
								{errors.description && touched.description && errors.description}
							</div>
							<div className={newStyles.wrap}>
								<label htmlFor="website">Website:</label><br></br>
								<input
									type="url"
									name="website"
									id="website"
									placeholder="Website..."
									title="Add a website for your charity"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.website}
								/>
								{errors.website && touched.website && errors.website}
							</div>
							<div className={newStyles.wrap}>
								<label htmlFor="donationLinks">Donation Links:</label><br></br>
								<input
									type="text"
									name="donationLinks"
									id="donationLinks"
									placeholder="Links (comma separated)..."
									title="Donation links to your website"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.donationLinks}
								/>
								{errors.donationLinks && touched.donationLinks && errors.donationLinks}
							</div>
							<div className={newStyles.wrap}>
							<div className={newStyles.label}>
								<label htmlFor="tags">Tags:</label><br></br>
							</div>
								<input
									type="text"
									name="tags"
									id="tags"
									placeholder="Tags (comma separated)..."
									title="Tags to make it easier for people to find your charity"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.tags}
								/>
								{errors.tags && touched.tags && errors.tags}
							</div>

							<button className={newStyles.btn} type="submit" disabled={loaded && isSubmitting}> Submit </button>
						</form>
					</div>
				)}
			</Formik>
		</>
	);
};

export default NewCharity;