import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/login";
import Signup from "./components/signup";
import PrivateRoute from "./PrivateRoute";
import Navigation from './components/Navigation';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navigation />
      <Switch>
        <PrivateRoute exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
