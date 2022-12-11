import database from "../../database";
import { AppError } from "../../errors/errors";

const updateProductService = async (productId, product) => {
	let query = `UPDATE products SET `;

	const keys = Object.keys(product);
	const values = Object.values(product);

	keys.forEach((key, index) => {
		query += `${key} = \$${index + 1}, `;
	});

	query = query.slice(0, -2);

	query += ` WHERE id = \$${keys.length + 1} RETURNING *`;

	const queryResponse = await database.query(query, [...values, productId]);

	if (queryResponse.rowCount === 0) {
		throw new AppError(
			"Product not found, check the information and try again",
			404
		);
	}

	return queryResponse.rows[0];
};

export default updateProductService;
