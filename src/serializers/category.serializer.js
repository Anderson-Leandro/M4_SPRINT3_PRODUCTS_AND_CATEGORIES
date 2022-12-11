import * as yup from "yup";

const createCategorySerializer = yup.object().shape({
	name: yup.string().required(),
});

const updateCategorySerializer = yup.object().shape({
	name: yup.string().required(),
});

export { createCategorySerializer, updateCategorySerializer };
