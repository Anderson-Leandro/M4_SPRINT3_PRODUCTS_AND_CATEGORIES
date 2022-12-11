import database from "../../database";

const createCategoriesService = async (category) => {
	const newCategory = await database.query(
		`
    INSERT INTO categories 
        (name)
    VALUES 
        ($1)
    RETURNING *;
    `,
		[category.name]
	);

	return newCategory.rows[0];
};

export { createCategoriesService };
