import database from "../../database";
import { AppError } from "../../errors/errors";

const listProductsService = async () => {
	const queryResponse = await database.query(
		`
    SELECT * FROM products;
    `
	);

	if (queryResponse.rowCount === 0) {
		throw new AppError("Not found products", 404);
	}

	return queryResponse.rows;
};

export { listProductsService };
