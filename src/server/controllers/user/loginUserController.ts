import Response from '../../frameworks/common/response';

export default (dependencies) => {
  const {
    useCases: {
      userUseCases: { loginUserUseCase },
    },
  } = dependencies;
  const loginUser = async (req, res) => {

    try {
      const { body = {} } = req;

      const { login, password } = body;
      const response = await loginUserUseCase(dependencies).execute({
            login,
            password,
        });
       
        res.json(response);
    } catch (err) {
      return new Response({ status: err.status || 500, error: err });
    }
  };

  return loginUser;
};
