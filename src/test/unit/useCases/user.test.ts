import { useCases } from '../../../server/useCases';
import { repositories } from '../../../server/frameworks/repository/inMemory';
const { usersRepository } = repositories;

const {
  userUseCases: { loginUserUseCase },
} = useCases;

describe('Users repository login', () => {
    const dependencies = {
        usersRepository: usersRepository,
    };
    const loginUser = loginUserUseCase(dependencies).execute;


    test('Should return 200 with good login and password', async () => {
      const testUserData = {
        login: 'BankinUser',
        password: '12345678'
      };

      const loggedUser = await loginUser({
        login: testUserData.login,
        password: testUserData.password,
      });

      expect(loggedUser.status).toEqual(
        200
      );
      expect(loggedUser.content.refresh_token).toBeDefined();
    });

    test("Should return error if login doesn't exist", async () => {
      const testUserData = {
        login: 'BankinUser2',
        password: '12345678',
      };

      const loggedUserName = await loginUser({
        login: testUserData.login,
        password: testUserData.password,
      });
      expect(loggedUserName.status).toBe(404);
      expect(loggedUserName.error).toEqual({
        error: "Login doesn't exist",
        msg: "We doesn't find this login in the database, please register user or use other login",
      });
    });

    test("Should return error if bad password", async () => {
        const testUserData = {
          login: 'BankinUser',
          password: 'azerty',
        };
  
        const loggedUser = await loginUser({
          login: testUserData.login,
          password: testUserData.password,
        });

        expect(loggedUser.status).toEqual(401);
        expect(loggedUser.error).toEqual({
          error: "Bad password",
          msg: "Your password is not good try again",
        });
      });
});


