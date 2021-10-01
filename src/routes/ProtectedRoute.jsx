import { Route, Redirect } from "react-router-dom";
import { authenticate } from "utils/authenticate";

export const ProtectedRoute = ({ ...props }) => {
  const isAllowed = authenticate();
  return isAllowed ? <Route {...props} /> : <Redirect to="/login" />;
};
