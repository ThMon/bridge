import { repositories } from '../../../server/frameworks/repository/inMemory';
import User from '../../../server/entities/User';
const bcrypt = require('bcrypt');
const saltRounds = 10;

const { usersRepository } = repositories;

describe('Users repository login', () => {
    test('Should return status 200 and refresh_token', async () => {
      const user = new User({
        login: "BankinUser",
        password: '12345678',
      });
  
      const loggedUser = await usersRepository.login(user.login, user.password);
      console.log("loggedUser",loggedUser);
      expect(loggedUser.status).toBe(200);
      expect(loggedUser.content.refresh_token).toBeDefined();
    });

    test('Should return status 404', async () => {
      const user = new User({
        login: "Gérard",
        password: '12345678',
      });
  
      const loggedUser = await usersRepository.login(user.login, user.password);
      console.log("loggedUser",loggedUser);
      expect(loggedUser.status).toBe(404);
    });

    test('Should return status 401', async () => {
      const user = new User({
        login: "BankinUser",
        password: 'azerty',
      });
  
      const loggedUser = await usersRepository.login(user.login, user.password);
      console.log("loggedUser",loggedUser);
      expect(loggedUser.status).toBe(401);
    });
});
  