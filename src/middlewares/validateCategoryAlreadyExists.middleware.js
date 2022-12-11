import database from "../database";
import { AppError } from "../errors/errors";

const validateCategoryAlreadyExistsMiddleware = async (
	request,
	response,
	next
) => {
	const queryResponse = await database.query(
		`
        SELECT * FROM categories WHERE name = $1;
        `,
		[request.validatedBody.name]
	);

	if (queryResponse.rowCount > 0) {
		throw new AppError("This category already exists", 400);
	}

	return next();
};

export default validateCategoryAlreadyExistsMiddleware;
