import React from 'react';

const New = () => {
	return (
		<div className="new">
			<form>
				<label htmlFor="logo">Upload Logo</label>
				<input
				type="file"
				accept="image/*"
				name="logo"
				id="logo"
				/>
				<label htmlFor="name">Charity Name:</label>
				<input
				type="text"
				autoComplete="off"
				required
				name="name"
				id="name"
				placeholder="Charity.."
				/>
			</form>
		</div>
	)
}

export default New;