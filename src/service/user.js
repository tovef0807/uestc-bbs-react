import { post } from "./serve";

const login = (params) => post("user/login", params);
const register = (params) => post("user/register", params);
const location = (params) => post("user/location", params);

export { login, register, location };
