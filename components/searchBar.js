import React from "react";
import { Formik } from "formik";
import { charitySearch } from "../lib/api";

const SearchBar = ({ onSearch }) => {
	const onSubmit = async ({ text }, { setSubmitting }) => {
		let name = "";
		let tags = [""];
		let state = 0;

		for(let char of text){
			switch(state){
			case 0:
				if(char == '['){
					state++;
				} else {
					name += char;
				}
			case 1:
				if(char == ']'){
					tags.push("");
				} else{
					tags[tags.length-1] += char;
				}
			}
		}

		charitySearch({ name, tags: tags.slice(0, tags.length-1) }).then(onSearch);
    };
	
	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			validate={() => {}}
			onSubmit={onSubmit}
		>
			{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
				<div className="search-bar">
					<input
						type="text"
						name="text"
						placeholder="Search.."
						value={values.text}
						onChange={handleSubmit}
					/>
					<i className="fas fa-search"></i>
				</div>
			)}
		</Formik>
	);
};

export default SearchBar;