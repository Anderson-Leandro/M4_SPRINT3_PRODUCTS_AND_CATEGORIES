import { Router } from "express";
import { createCategoriesController } from "../controllers/categories/createCategories.controller";
import deleteCategoryController from "../controllers/categories/deleteCategory.controller";
import { listCategoriesController } from "../controllers/categories/listCategories.controller";
import listCategoryByIdController from "../controllers/categories/listCategoryById.controller";
import updateCategoryController from "../controllers/categories/updateCategory.controller";
import validateSerializersMiddleware from "../middlewares/validateSerializers.middleware";
import validateCategoryAlreadyExistsMiddleware from "../middlewares/validateCategoryAlreadyExists.middleware";
import {
	createCategorySerializer,
	updateCategorySerializer,
} from "../serializers/category.serializer";
import validateCategoryIsValidMiddleware from "../middlewares/validateCategoryIsValid.middleware";

const categoriesRoutes = Router();

categoriesRoutes.get("", listCategoriesController);

categoriesRoutes.get(
	"/:id",
	validateCategoryIsValidMiddleware,
	listCategoryByIdController
);

categoriesRoutes.delete(
	"/:id",
	validateCategoryIsValidMiddleware,
	deleteCategoryController
);

categoriesRoutes.patch(
	"/:id",
	validateCategoryIsValidMiddleware,
	validateSerializersMiddleware(updateCategorySerializer),
	updateCategoryController
);

categoriesRoutes.post(
	"",
	validateSerializersMiddleware(createCategorySerializer),
	validateCategoryAlreadyExistsMiddleware,
	createCategoriesController
);

export { categoriesRoutes };
