import { listProductsService } from "../../services/products/listProducts.service";

const listProductsController = async (request, response) => {
	const data = await listProductsService();

	return response.status(200).send(data);
};

export { listProductsController };
