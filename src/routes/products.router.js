import { Router } from "express";
import { createProductsController } from "../controllers/products/createProducts.controller";
import deleteProductController from "../controllers/products/deleteProduct.controller";
import listProductByIdController from "../controllers/products/listProductById.controller";
import { listProductsController } from "../controllers/products/listProducts.controller";
import listProductsByCategoryController from "../controllers/products/listProductsByCategory.controller";
import updateProductController from "../controllers/products/updateProduct.controller";
import validateProductIsValidMiddleware from "../middlewares/validateProductIsValid.middleware";
import validateSerializersMiddleware from "../middlewares/validateSerializers.middleware";
import {
	createProductSerializer,
	updateProductSerializer,
} from "../serializers/product.serializer";

const productsRoutes = Router();

productsRoutes.get("", listProductsController);

productsRoutes.get(
	"/:id",
	validateProductIsValidMiddleware,
	listProductByIdController
);

productsRoutes.get("/category/:id", listProductsByCategoryController);

productsRoutes.patch(
	"/:id",
	validateProductIsValidMiddleware,
	validateSerializersMiddleware(updateProductSerializer),
	updateProductController
);

productsRoutes.delete(
	"/:id",
	validateProductIsValidMiddleware,
	deleteProductController
);

productsRoutes.post(
	"",
	validateSerializersMiddleware(createProductSerializer),
	createProductsController
);

export { productsRoutes };
