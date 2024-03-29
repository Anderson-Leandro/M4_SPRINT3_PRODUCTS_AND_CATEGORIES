class AppError extends Error {
	constructor(message, statusCode = 400) {
		super();
		this.message = { message };
		this.statusCode = statusCode;
	}
}

const errorHandler = (error, request, response, next) => {
	if (error instanceof AppError) {
		return response.status(error.statusCode).send(error.message);
	}

	console.log(error);

	return response.status(500).send({ message: "Internal server error!" });
};

export { AppError, errorHandler };
