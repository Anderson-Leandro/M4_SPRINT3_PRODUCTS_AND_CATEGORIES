import database from "../../database";
import { AppError } from "../../errors/errors";

const listProductByIdService = async (productId) => {
	const queryResponse = await database.query(
		`
        SELECT * FROM products WHERE id = $1;
        `,
		[productId]
	);

	if (queryResponse.rowCount === 0) {
		throw new AppError("Product not found", 404);
	}

	return queryResponse.rows[0];
};

export default listProductByIdService;
