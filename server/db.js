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
    constructor(name, photo, owner, desc, website, tags, venmo, gofundme) {
        this.name = name.replace(/[^A-Za-z0-9- ]/g, '');
        this.photo = photo;
        this.owner = owner.replace(/[^A-Za-z0-9- ]/g, '');
        this.desc = desc;
        this.website = website.replace(/[^A-Za-z0-9-/:?&. ]/g, '');
        this.tags = tags.replace(/[^A-Za-z0-9- ]/g, '');
        this.venmo = venmo;
        this.gofundme = gofundme;
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
        await db.run("CREATE TABLE IF NOT EXISTS charities (name text, photo text, owner text, desc text, website text, tags text, venmo text, gofundme text)");
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

    async readCharity(name) {
        const row = await this.db.get("SELECT photo, owner, desc, website, tags, venmo, gofundme FROM charities WHERE name=?", name);
        if (!row) {
            return undefined;
        }
        return new Charity(name, row.photo, row.owner, row.desc, row.website, row.tags, row.venmo, row.gofundme);
    }

    async writeCharity(charity) {
        await this.db.run("INSERT INTO charities VALUES (?, ?, ?, ?, ?, ?, ?, ?)", charity.name, charity.photo, charity.owner, charity.desc, charity.website, charity.tags, charity.venmo, charity.gofundme);
    }

    async filterCharity(name, tags) {
        name = name.replace(/[^a-zA-Z0-9- ]/g, ''); // aha best validation
        tags = tags.replace(/[^a-zA-Z0-9- ]/g, ''); // still feels like quite vulnerable code :thonk:
        return await this.db.all("SELECT * FROM charities WHERE name LIKE ? OR tags LIKE ?", `%${name}%`, `%${tags}%`); // major cve vibes here
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