import Contact from "../model/contact.model.js";
import dayjs from "dayjs";

export const getContactsListHandler = async (req, res) => {
	const contactsList = await Contact.find({});

	const updatedContactsList = contactsList.map(contact => ({
		name: contact.name,
		subject: contact.subject,
		message: contact.message,
		contactInfo: contact.contactInfo,
		createdAt: dayjs(contact.createdAt).format("DD/MM/YYYY"),
	}));

	res.render("contactList", {
		contacts: updatedContactsList,
	});
};

export const postContactHandler = async (req, res) => {
	try {
		const { name, contactInfo, message, subject } = req.body;

		await Contact.create({
			name,
			contactInfo,
			message,
			subject,
		});

		res.redirect("/");
	} catch (err) {
		console.log(err);
		res.redirect("/");
	}
};
