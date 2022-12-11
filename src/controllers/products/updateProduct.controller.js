import updateProductService from "../../services/products/updateProduct.service";

const updateProductController = async (request, response) => {
	const data = await updateProductService(
		request.params.id,
		request.validatedBody
	);

	return response.status(200).send(data);
};

export default updateProductController;
