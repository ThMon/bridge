export default (dependencies) => {
  const { usersRepository } = dependencies;
  if (!usersRepository) {
    throw new Error("the users repository should be exist in dependencies");
  }

  const execute = async ({
    login,
    password,
  }: {
    login: string;
    password: string;
  }) => {
    const res = await usersRepository.login(login, password);
    return res;
  };

  return { execute };
};
