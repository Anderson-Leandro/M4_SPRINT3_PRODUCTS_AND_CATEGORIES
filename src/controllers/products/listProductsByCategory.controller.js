import listProductsByCategoryService from "../../services/products/listProductsByCategory.service";

const listProductsByCategoryController = async (request, response) => {
	const data = await listProductsByCategoryService(request.params.id);

	return response.status(200).send(data);
};

export default listProductsByCategoryController;
