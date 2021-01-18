const next = require("next");
const server = require("./server/index");

const app = next({ dev: process.env.NODE_ENV != "production" });

app.prepare().then(async () => {
    server.use(app.getRequestHandler());
	
	server.listen(0, () => {
		console.log("Server started successfully.");
	});
});

// what if when i was breaking the /pages/index.js file our cursors touched 😳
// o_O

// huh :thonk: 