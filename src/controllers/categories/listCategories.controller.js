import { listCategoriesService } from "../../services/categories/listCategories.service";

const listCategoriesController = async (request, response) => {
	const data = await listCategoriesService();

	return response.status(200).send(data);
};

export { listCategoriesController };
