import fetch from "isomorphic-unfetch";

const req = (endpoint, body) => {
	return fetch("/api/"+endpoint, {
		method: 'POST',
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body)
	}).then(res => console.log(res) || res.json());
};

/*
export const userWrite = ({ name, email, password }) => {
	return req("users/write", 'POST', { name, email, password });
};

export const userRead = ({ name, password }) => {
	return req("users/read", 'GET', { name, password });
};

export const userLogout = ({ name, token }) => {
	return req("users/logout", 'POST', { name, token });
};
*/

export const charityWrite = ({ name, photo, desc, website, tags, links, token }) => {
	return req("charities/write", { name, photo, desc, website, tags, links, token });
};

export const charityRead = ({ name }) => {
	return req("charities/read", { name });
};

export const charitySearch = ({ name, tags }) => {
    return req("charities/search", { name, tags });
};