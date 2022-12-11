import listProductByIdService from "../../services/products/listProductById.service";

const listProductByIdController = async (request, response) => {
	const data = await listProductByIdService(request.params.id);

	return response.status(200).send(data);
};

export default listProductByIdController;
