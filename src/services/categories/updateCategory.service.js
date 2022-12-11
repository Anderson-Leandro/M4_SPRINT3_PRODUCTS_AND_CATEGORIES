import database from "../../database";
import { AppError } from "../../errors/errors";

const updateCategoryServie = async (categoryId, data) => {
	const queryResponse = await database.query(
		`
        UPDATE categories
        SET name = $1
        WHERE id = $2
        RETURNING *
        `,
		[data.name, categoryId]
	);

	if (queryResponse.rowCount === 0) {
		throw new AppError(
			"Update category failed, check the information and try again",
			400
		);
	}

	return queryResponse.rows[0];
};

export default updateCategoryServie;
