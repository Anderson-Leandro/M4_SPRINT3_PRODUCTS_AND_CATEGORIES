import deleteProductService from "../../services/products/deleteProduct.service";

const deleteProductController = async (request, response) => {
	await deleteProductService(request.params.id);

	return response.status(204).send();
};

export default deleteProductController;
