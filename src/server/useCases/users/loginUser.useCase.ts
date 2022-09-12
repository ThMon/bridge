export default (dependencies) => {
    const { usersRepository } = dependencies;
    if (!usersRepository) {
      throw new Error('the users repository should be exist in dependencies');
    }
  
    const execute = ({
      login,
      password,
    }: {
        login: string;
      password: string;
    }) => {
      return usersRepository.login(login, password);
    };
  
    return { execute };
  };
