import Response from '../../frameworks/common/response';

export default (dependencies) => {
  const {
    useCases: {
      userUseCases: { loginUserUseCase },
    },
  } = dependencies;
  const loginUser = async (request, response) => {
    try {
      const { body = {} } = request;

      const { login, password } = body;
        console.log(login)
      const response = await loginUserUseCase(dependencies).execute({
        login,
        password,
      });

      return response;
    } catch (err) {
      return new Response({ status: err.status || 500, error: err });
    }
  };

  return loginUser;
};
