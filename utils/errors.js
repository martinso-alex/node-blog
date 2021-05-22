class InternalServerError extends Error {
	constructor(mensagem) {
		super(mensagem);
		this.name = "InternalServerError";
	}
}

class InvalidArgumentError extends Error {
	constructor(mensagem) {
		super(mensagem);
		this.name = "InvalidArgumentError";
	}
}

class BadRequestError extends Error {
	constructor(mensagem) {
		super(mensagem);
		this.name = "BadRequestError";
	}
}

module.exports = {
	InvalidArgumentError: InvalidArgumentError,
	InternalServerError: InternalServerError,
	BadRequestError: BadRequestError,
};
