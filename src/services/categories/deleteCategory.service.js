import database from "../../database";
import { AppError } from "../../errors/errors";

const deleteCategoryService = async (categoryId) => {
	const queryResponse = await database.query(
		`
        DELETE FROM categories
        WHERE id = $1
        `,
		[categoryId]
	);

	if (queryResponse.rowCount === 0) {
		throw new AppError("Category not found", 404);
	}

	return queryResponse;
};

export default deleteCategoryService;
