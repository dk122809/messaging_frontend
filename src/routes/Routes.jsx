import { Switch } from "react-router-dom";
import Dashboard from "pages/dashboard/Dashboard";
import Signin from "pages/auth/Signin";
import CreateTeam from "pages/team/CreateTeam";
import JoinTeam from "pages/team/JoinTeam";
import Signup from "pages/auth/Signup";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";

const Router = () => {
  return (
    <Switch>
      <ProtectedRoute exact path="/" component={Dashboard} />
      <PublicRoute exact path="/register" component={Signup} />
      <PublicRoute exact path="/login" component={Signin} />
      <ProtectedRoute exact path="/teamCreate" component={CreateTeam} />
      <ProtectedRoute exact path="/teamJoin" component={JoinTeam} />
    </Switch>
  );
};

export default Router;