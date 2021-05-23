const { Author } = require("../models");

class AuthorsController {
	static async list(req, res) {
		try {
			const list = await Author.query().select();

			res.status(200).json(list);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	static async findById(req, res) {
		const { id } = req.params;

		try {
			const author = await Author.query().findById(id);

			if (author) res.status(200).json(author);
			else res.status(404).json("author not found.");
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	static async create(req, res) {
		const { name, picture } = req.body;

		try {
			const author = await Author.query().insert({ name, picture });

			res.status(201).json(author);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	static async update(req, res) {
		const { name, picture } = req.body;
		const { id } = req.params;

		try {
			await Author.query().findById(id).patch({ name, picture });
			const author = await Author.query().findById(id);

			res.status(200).json(author);
		} catch (error) {
			res.status(500).json(error.message);
		}
	}

	static async delete(req, res) {
		const { id } = req.params;

		try {
			await Author.query().findById(id).delete();

			res.status(204).json();
		} catch (error) {
			res.status(500).json(error.message);
		}
	}
}

module.exports = AuthorsController;
