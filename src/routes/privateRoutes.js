import Audio from "../pages/Audio";
import Home from "../pages/Home";
import CSV from "../pages/CSV";
import {
  AUDIO_PATH,
  CSV_PATH,
  HOME_PATH,
  ROOT_PATH,
} from "../constants/routingPaths";

const privateRoutes = [
  {
    path: HOME_PATH,
    exact: true,
    name: "Home",
    component: Home,
  },
  {
    path: AUDIO_PATH,
    exact: true,
    name: "Audio",
    component: Audio,
  },
  {
    path: CSV_PATH,
    exact: true,
    name: "CSV",
    component: CSV,
  },
  {
    path: ROOT_PATH,
    exact: true,
    name: "/",
    component: Home,
  },
];
export default privateRoutes;
