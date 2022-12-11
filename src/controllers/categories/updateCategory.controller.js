import updateCategoryServie from "../../services/categories/updateCategory.service";

const updateCategoryController = async (request, response) => {
	const data = await updateCategoryServie(request.params.id, request.body);

	return response.status(200).send(data);
};

export default updateCategoryController;
