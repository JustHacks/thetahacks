const req = (endpoint, method, body) => {
	return fetch("/api/"+endpoint, {
		method: "method",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body)
	}).then(res => .json());
};

export const userWrite = ({ name, email, password }) => {
	return req("users/write", 'POST', { name, email, password });
};

export const userRead = ({ name, password }) => {
	return req("users/read", 'GET', { name, password });
};

export const userLogout = ({ name, token }) => {
	return req("users/logout", 'POST', { name, token });
};

export const charityWrite = ({ name, photo, owner, desc, website, tags, venmo, gofundme, token }) => {
	return req("charities/write", 'POST', { name, photo, owner, desc, website, tags, venmo, gofundme, token });
};

export const charityRead = ({ name }) => {
	return req("charities/read", 'GET', { name });
};

export const charitySearch = ({ name, tags }) => {
    return req("charities/filter", 'GET', { name, tags });
};