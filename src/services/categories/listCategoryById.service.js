import database from "../../database";
import { AppError } from "../../errors/errors";

const listCategoryByIdService = async (categoryId) => {
	const queryResponse = await database.query(
		`
        SELECT * FROM categories WHERE id = $1
        `,
		[categoryId]
	);

	if (queryResponse.rowCount === 0) {
		throw new AppError("Category not found", 404);
	}

	return queryResponse.rows[0];
};

export default listCategoryByIdService;
