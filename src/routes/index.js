import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import FormRegister from "../components/Formregister";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <FormRegister />
      </Route>
      <Route path="/home/:name">
        <Home />
      </Route>
    </Switch>
  );
};
export default Routes;
