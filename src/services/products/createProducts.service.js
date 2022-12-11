import database from "../../database";
import { AppError } from "../../errors/errors";

const createProductsService = async (product) => {
	const queryResponse = await database.query(
		`
    INSERT INTO products 
        (name, price, category_id)
    VALUES 
        ($1, $2, $3)
    RETURNING *;
    `,
		[product.name, product.price, product.category_id]
	);

	if (queryResponse.rowCount === 0) {
		throw new AppError("Error to create product", 400);
	}

	return queryResponse.rows[0];
};

export { createProductsService };
