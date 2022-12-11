import database from "../database";
import { AppError } from "../errors/errors";

const validateProductIsValidMiddleware = async (request, response, next) => {
	try {
		const productId = request.params.id;

		await database.query(
			`
            SELECT * FROM products WHERE id = $1;
            `,
			[productId]
		);

		return next();
	} catch (error) {
		throw new AppError("Product not found", 404);
	}
};

export default validateProductIsValidMiddleware;
