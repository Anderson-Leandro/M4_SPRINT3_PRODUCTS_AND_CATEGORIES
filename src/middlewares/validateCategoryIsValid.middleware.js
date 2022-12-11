import database from "../database";
import { AppError } from "../errors/errors";

const validateCategoryIsValidMiddleware = async (request, response, next) => {
	try {
		const categoryId = request.params.id;

		await database.query(
			`
            SELECT * FROM categories WHERE id = $1;
            `,
			[categoryId]
		);

		return next();
	} catch (error) {
		throw new AppError("Category not found", 404);
	}
};

export default validateCategoryIsValidMiddleware;
