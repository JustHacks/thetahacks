import React from "react";
import { Formik } from "formik";
import { charitySearch } from "../lib/api";

const SearchBar = ({ onSearch }) => {

	const onSubmit = ({ text }, { setSubmitting }) => {
		let name = "";
		let tags = [];
		let state = 0;

		for(let char of text){
			switch(state){
			case 0:
				if(char == '['){
					state = 1;
					tags.push("");
				} else {
					name += char;
				}
			case 1:
				if(char == ']'){
					state = 2;
				} else {
					tags[tags.length-1] += char;
				}
			case 2:
				if(char == '['){
					state = 1;
					tags.push("");
				}
			}
		}
		charitySearch({ name, tags: tags.slice(1).join(' ') }).then(onSearch);
    };
	
	return (
		<Formik
			initialValues={{ text: '' }}
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
						onChange={({ ...props }) => handleChange({ ...props }) || handleSubmit({ ...props })}
					/>
					<i className="fas fa-search" onClick={handleSubmit}></i>
				</div>
			)}
		</Formik>
	);
};

export default SearchBar;