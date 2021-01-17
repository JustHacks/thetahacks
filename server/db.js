"use strict";

const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');
const bcrypt = require('bcrypt');

class User {
    constructor(name, email, hash, photo) {
        this.name = name.replace(/[^A-Za-z0-9- ]/g, '');
        this.email = email;
        this.hash = hash;
        this.photo = photo;
    }

    static async create(name, email, password, photo) {
        return new User(name, await bcrypt.hash(password, 10), photo);
    }

    async verify(password) {
        return await bcrypt.compare(password, this.hash);
    }
}

class Charity {
    constructor(name, photo, owner, desc, website, tags, links) {
		this.id = name.toLowerCase().replace(/[^A-Za-z0-9-]/g, '-'); Math.random().toString();
        this.name = name;
        this.photo = photo;
        this.owner = owner.replace(/[^A-Za-z0-9- ]/g, '');
        this.desc = desc;
        this.website = website.replace(/[^A-Za-z0-9-/:?&. ]/g, '');
        this.tags = tags.replace(/[^A-Za-z0-9- ]/g, '');
        this.links = links.replace(/[^a-zA-Z0-9-:\/?&,.]/, '');
    }
}

class Database {
    constructor(filename, db) {
        this.filename = filename;
        this.db = db;
    }

    static async create(filename) {
        const db = await sqlite.open({
            filename,
            driver: sqlite3.Database
        });
        await db.run("CREATE TABLE IF NOT EXISTS users (name text, email text, hash text, photo text)");
        await db.run("CREATE TABLE IF NOT EXISTS charities (id text, name text, photo text, owner text, desc text, website text, tags text, links text)");
        return new Database(filename, db);
    }

    async readUser(name) {
        const row = await this.db.get("SELECT hash, photo FROM users WHERE name=?", name);
        if (!row) {
            return undefined;
        }
        return new User(name, row.email, row.hash, row.photo);
    }

    async writeUser(user) {
        await this.db.run("INSERT INTO users VALUES (?, ?, ?, ?)", user.name, user.email, user.hash, user.photo);
    }

    async readCharity(id) {
        const row = await this.db.get("SELECT photo, owner, desc, website, tags, links FROM charities WHERE id=?", id);
       
	    if (!row) {
            return undefined;
        }
        return new Charity(name, row.photo, row.owner, row.desc, row.website, row.tags, row.links);
    }

    async readCharityFromId(id) {
        const row = await this.db.get("SELECT name, photo, owner, desc, website, tags, links FROM charities WHERE id=?", id);
       
	    if (!row) {
            return undefined;
        }
        return new Charity(row.name, row.photo, row.owner, row.desc, row.website, row.tags, row.links);
    }
	
    async writeCharity(charity) {
        await this.db.run("INSERT INTO charities VALUES (?, ?, ?, ?, ?, ?, ?, ?)", charity.id, charity.name, charity.photo, charity.owner, charity.desc, charity.website, charity.tags, charity.links);
    }

    async filterCharity(name, tags) {
        name = name.replace(/[^a-zA-Z0-9- ]/g, ''); // aha best validation
        tags = tags.replace(/[^a-zA-Z0-9- ]/g, ''); // still feels like quite vulnerable code :thonk:
        return await this.db.all("SELECT * FROM charities WHERE name LIKE ? AND tags LIKE ?", `%${name}%`, `%${tags}%`); // major cve vibes here
    }

    close() {
        this.db.close();
    }
}

module.exports = {
    User, 
    Charity,
    Database
};