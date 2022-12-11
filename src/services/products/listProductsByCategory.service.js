import database from "../../database";
import { AppError } from "../../errors/errors";

const listProductsByCategoryService = async (categoryId) => {
	const queryResponse = await database.query(
		`
        SELECT p.name, p.price, c.name AS category
        FROM products p 
        JOIN categories c 
        ON p.category_id = c.id 
        WHERE p.category_id = $1;
        `,
		[categoryId]
	);

	if (queryResponse.rowCount === 0) {
		throw new AppError("Dont found products in this category", 404);
	}

	return queryResponse.rows;
};

export default listProductsByCategoryService;
