import { createCategoriesService } from "../../services/categories/createCategories.service";

const createCategoriesController = async (request, response) => {
	const data = await createCategoriesService(request.validatedBody);

	return response.status(201).send(data);
};

export { createCategoriesController };
