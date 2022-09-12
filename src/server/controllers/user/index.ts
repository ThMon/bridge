import loginUserController from "./loginUserController";

export const userControllers = (dependencies) => ({
  loginUserController: loginUserController(dependencies),
});
