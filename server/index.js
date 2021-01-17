"use strict";
const express = require("express");
const db = require('./db');
const admin = require("firebase-admin");

const server = express();

const VALID_TYPES = [
    'png',
    'jpg',
    'jpeg',
    'gif',
    'webp'
];

server.use(require('body-parser').json());

const newToken = () => {
    return Buffer.from(Math.random().toString()).toString('base64');
};
const tokens = {};

console.log('Initializing routes');
let database;

db.Database.create('app.db').then((d) => { database = d; });
admin.initializeApp({ credential: admin.credential.cert(require("./key")) });

/*
server.post('/api/users/read', async (req, res) => {
	const { name, password } = req.body;
	const user = await database.readUser(name);
	
	if (!user) {
		return res.json({ ok: false, reason: "User does not exist" });
	}

	if (await user.verify(password)) {
		res.json({
			ok: true,
			token: tokens[name] || (tokens[name] = newToken()),
			user: { name, email: user.email, photo: user.photo }
		});
	} else {
		res.json({ ok: false, reason: "Password incorrect" });
	}
});

server.post('/api/users/write', async (req, res) => {
	// kaka: add some firebase stuff here for file upload maybe?
	const { name, email, password } = req.body;
	
	if (await database.readUser(name)) {
		res.json({
			ok: false,
			reason: "User already exists"
		});
	} else {
		await database.writeUser(await db.User.create(name, email, password, ''));
		
		res.json({
			ok: true,
			token: tokens[name] || (tokens[name] = newToken()),
			user: { name, email: user.email, photo: user.photo }
		});
	}
});

server.post('/api/users/logout', async (req, res) => {
	const { name, token } = req.body;

	if (tokens[name] != token) {
		res.json({
			ok: false,
			reason: "Provided token doesn't match user to logout"
		});
	} else {
		delete tokens[name];
        res.json({
            ok: true
        });
	}
});
*/

server.post('/api/charities/read', async (req, res) => {
	const { name } = req.body;
	const charity = await database.readCharity(name);

	if (!charity) {
		res.json({
			ok: false,
			reason: "Charity doesn't exist"
		});
	} else {
		res.json({
			ok: true,
			charity: charity
		});
	}
});

server.post('/api/charities/search', async (req, res) => {
	const { name, tags } = req.body;
	const charities = await database.filterCharity(name, tags);

	res.json({
		ok: true,
		data: charities
	});
});

server.post('/api/charities/write', async (req, res) => {
	const { name, photo, desc, website, tags, links, token } = req.body;
	const { uid: owner } = await admin.auth().verifyIdToken(token);

	if (await database.readCharity(name)) {
		res.json({ ok: false, reason: "Charity already exists" });
	} else {
		// charities/{name}/photo.{ext}
        const naive = photo.name.split(".")[1];
        const type = VALID_TYPES.includes(naive) ? naive : 'png'; // i updated this but we could change it back if you want
		//const photoUrl = admin.storage().ref().child(`charities/${name}/photo.${type}`).put(photo.data /*or smth*/).getDownloadURL();
		await database.writeCharity(new db.Charity(name, '', owner, desc, website, tags, links));
	
		res.json({ ok: true });
	}
});

module.exports = server;