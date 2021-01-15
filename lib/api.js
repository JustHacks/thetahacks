const req = async (endpoint, method, body) => {
	return await ((await fetch("/api/"+endpoint, {
		method: "method",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body)
	})).json());
};

export const userWrite = async ({ name, email, password }) => {
	return await req("users/write", 'POST', { name, email, password });
};

export const userRead = async ({ name, password }) => {
	return await req("users/read", 'GET', { name, password });
};

export const userLogout = async ({ name, token }) => {
	return await req("users/logout", 'POST', { name, token });
};

export const charityWrite = async ({ name, photo, owner, desc, website, tags, venmo, gofundme, token }) => {
	return await req("charities/write", 'POST', { name, photo, owner, desc, website, tags, venmo, gofundme, token });
};

export const charityRead = async ({ name }) => {
	return await req("charities/read", 'GET', { name });
};

export const charitySearch = async ({ name, tags }) => {
    return await req("charities/filter", 'GET', { name, tags });
};