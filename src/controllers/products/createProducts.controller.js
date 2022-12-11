import { createProductsService } from "../../services/products/createProducts.service";

const createProductsController = async (request, response) => {
	const data = await createProductsService(request.validatedBody);

	return response.status(201).send(data);
};

export { createProductsController };
