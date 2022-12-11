import * as yup from "yup";

const createProductSerializer = yup.object().shape({
	name: yup.string().required(),
	price: yup.number().required(),
	category_id: yup.number().required(),
});

const updateProductSerializer = yup.object().shape({
	name: yup.string(),
	price: yup.number(),
	category_id: yup.number(),
});

export { createProductSerializer, updateProductSerializer };
