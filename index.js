import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import {
	getContactsListHandler,
	postContactHandler,
} from "./controller/contact.controller.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config();

const app = express();
const DB_URI =
	process.env.MONGO_URI || "mongodb://localhost:27017/primeItSolutions";
const PORT = process.env.PORT || 8000;

// basic configuration
app.set("view engine", "ejs");
const viewsPath = path.join(__dirname, "views");
app.set("views", viewsPath);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
	res.render("index", {
		error: null,
	});
});
app.get("/admin/contact", getContactsListHandler);
app.post("/contact", postContactHandler);

const startServer = async () => {
	// connect to database
	await mongoose.connect(DB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	console.log("Connected to database");

	// start server
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
};

startServer();
