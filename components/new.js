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
				title="Logo for your Charity"
				/>
				<label htmlFor="name">Charity Name:</label>
				<input
				type="text"
				autoComplete="off"
				required
				name="name"
				id="name"
				placeholder="Charity.."
				title="Name of your Charity"
				/>
				<input
				type="text"
				name="description"
				id="description"
				autoComplete="on"
				placeholder="Description.."
				minLength="50"
				maxLength="30000000"
				title="Description for your Charity, minimun of 50 characters."
				required
				/>
				<label htmlFor="location">Location</label>
				<input
				type="text"
				name="location"
				id="location"
				placeholder="Location.."
				autoComplete="off"
				title="Location for your charity"
				/>
				<label htmlFor="charityNo">Charity Number</label>
				<input
				type="number"
				name="charityNo"
				id="charityNo"
				placeholder="Charity number"
				title="Charity Number"
				/>
				<input
				type="text"
				name="founders"
				id="founders"
				placeholder="Founder/s.."
				title="Founder/s of your charity"
				required
				/>
				<label htmlFor="twitter">Twitter Handle</label>
				<input
				type="url"
				name="twitter"
				id="twitter"
				placeholder="Twitter.."
				title="Add a Twitter handle for your Charity"
				/>
				<label htmlFor="website">Website</label>
				<input
				type="url"
				name="website"
				id="website"
				placeholder="Website.."
				title="Add a website for your charity"
				/>
				<label htmlFor="socials">Other Social Media</label>
				<input
				type="url"
				name="socials"
				id="socials"
				placeholder="Socials.."
				title="Link your Websites Socials"
				/>
				<input
				type="submit"
				name="submit"
				id="submit"
				title="submit your charity"
				/>
			</form>
		</div>
	)
}

export default New;