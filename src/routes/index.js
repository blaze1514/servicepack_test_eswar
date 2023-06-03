import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import {
  LOGIN_PATH,
  REGISTER_PATH,
  ROOT_PATH,
} from "../constants/routingPaths";

const routes = [
  {
    path: ROOT_PATH,
    exact: false,
    name: "ROOT",
    component: Main,
  },
  {
    path: LOGIN_PATH,
    exact: true,
    name: "Login",
    component: Login,
  },
  {
    path: REGISTER_PATH,
    exact: true,
    name: "Register",
    component: Register,
  },
];
export default routes;
