import database from "../../database";
import { AppError } from "../../errors/errors";

const deleteProductService = async (productId) => {
	const queryResponse = await database.query(
		`
        DELETE FROM products
        WHERE id = $1
        `,
		[productId]
	);

	if (queryResponse.rowCount === 0) {
		throw new AppError("Product not found");
	}

	return queryResponse;
};

export default deleteProductService;
