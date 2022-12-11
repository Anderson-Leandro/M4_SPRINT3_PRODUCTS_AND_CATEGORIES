const validateSerializersMiddleware =
	(serializer) => async (request, response, next) => {
		try {
			const validatedBody = await serializer.validate(request.body, {
				stripUnknown: true,
				abortEarly: false,
			});

			request.validatedBody = validatedBody;

			return next();
		} catch (error) {
			return response.status(400).send({ message: error.errors });
		}
	};

export default validateSerializersMiddleware;
