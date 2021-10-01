import { Route, Redirect } from "react-router-dom";
import { authenticate } from "utils/authenticate";

export const PublicRoute = ({ auth, ...props }) => {
  const isAllowed = authenticate();
  return isAllowed ? <Redirect to="/" /> : <Route {...props} />;
};
