import { inMemoryDB } from "../../database/inMemory";
import UserQuery from "../../../models/user.interface";
const { users } = inMemoryDB;
import Response from '../../common/response';
import ResponseError from '../../common/responseError';
import jwt from "jsonwebtoken";


export default {
    login: async (login: string, password: string): Promise<Response> => {
        const user = users.find((user) => user.login === login);
        if (!user) {
            return new Response({
              status: 404,
              error: new ResponseError({
                error: "Login doesn't exist",
                msg: "We doesn't find this login in the database, please register user or use other login",
              }),
            });
          }  

          const same = user.password === password
          if (!same) {
            return new Response({
              status: 401,
              error: new ResponseError({
                error: 'Bad password',
                msg: 'Your password is not good try again',
              }),
            });
          }

        const refresh_token = await jwt.sign({data: {user: user.login}}, user.clientSecret)


        return new Response({status: 200, content: {user: user, refresh_token}})
    },

}