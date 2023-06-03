import "./styles/style.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import privateRoutes from "./routes/privateRoutes";
import { v4 as uuidv4 } from "uuid";
import { getUser } from "./helper/localStorage";

const App = (props) => {
  return (
    <Router>
      <Routes>
        {getUser()
          ? // private routes navigation
            privateRoutes.map((ele) => (
              <Route
                key={uuidv4()}
                path={ele.path}
                exact={ele.exact}
                name={ele.name}
                element={<ele.component {...props} />}
              />
            ))
          : // public routes navigation
            routes.map((ele) => (
              <Route
                key={uuidv4()}
                path={ele.path}
                exact={ele.exact}
                name={ele.name}
                element={<ele.component {...props} />}
              />
            ))}
      </Routes>
    </Router>
  );
};

export default App;
