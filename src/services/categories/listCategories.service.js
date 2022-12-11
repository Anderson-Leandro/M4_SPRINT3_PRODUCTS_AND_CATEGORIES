import database from "../../database";
import { AppError } from "../../errors/errors";

const listCategoriesService = async () => {
	const queryResponse = await database.query(
		`
        SELECT * FROM categories
        `
	);

	if (queryResponse.rowCount === 0) {
		throw new AppError("No categories found", 404);
	}

	return queryResponse.rows;
};

export { listCategoriesService };
