import deleteCategoryService from "../../services/categories/deleteCategory.service";

const deleteCategoryController = async (request, response) => {
	await deleteCategoryService(request.params.id);

	return response.status(204).send();
};

export default deleteCategoryController;
