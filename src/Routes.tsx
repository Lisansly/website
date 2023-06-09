import { Route, Routes as ReactRouterDomRouters } from "react-router-dom";
import { RequireAuth, useIsAuthenticated } from "react-auth-kit";
import Dashboard from "./components/dashboard/Dashboard";
import PageNotFound from "./components/PageNotFound";
import Profile from "./components/profile/Profile";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import Home from "./components/home/Home";

const Routes = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <ReactRouterDomRouters>
      <Route path="/profile/:tabValue?" element={<Profile />} />
      <Route
        path="/signup"
        element={isAuthenticated() ? <Home /> : <SignUp />}
      />
      <Route
        path="/signin"
        element={isAuthenticated() ? <Home /> : <SignIn />}
      />
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard/:tabValue?/:projectName?"
        element={
          <RequireAuth loginPath={"/signin"}>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route path="/*" element={<PageNotFound />} />
    </ReactRouterDomRouters>
  );
};

export default Routes;
