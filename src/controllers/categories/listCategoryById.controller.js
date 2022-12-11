import listCategoryByIdService from "../../services/categories/listCategoryById.service";

const listCategoryByIdController = async (request, response) => {
	const data = await listCategoryByIdService(request.params.id);

	return response.status(200).send(data);
};

export default listCategoryByIdController;
