import { RequireAuth, useIsAuthenticated, useSignOut } from "react-auth-kit";
import Dashboard from "./components/dashboard/Dashboard";
import PageNotFound from "./components/PageNotFound";
import Profile from "./components/profile/Profile";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import Home from "./components/home/Home";
import { useEffect } from "react";
import {
  Routes as ReactRouterDomRouters,
  useLocation,
  Route,
} from "react-router-dom";
import { useIdle } from "@mantine/hooks";

const Routes = () => {
  const isAuthenticated = useIsAuthenticated();
  const { pathname } = useLocation();
  const signOut = useSignOut();
  const idle = useIdle(300000);

  useEffect(() => {
    if (idle && isAuthenticated()) {
      signOut();
    }
  }, [idle]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ReactRouterDomRouters>
      <Route
        path="/signup"
        element={isAuthenticated() ? <Home /> : <SignUp />}
      />
      <Route
        path="/signin"
        element={isAuthenticated() ? <Home /> : <SignIn />}
      />
      <Route
        path="/profile/:tabValue?"
        element={
          <RequireAuth loginPath={"/signin"}>
            <Profile />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/:tabValue?/:projectName?"
        element={
          <RequireAuth loginPath={"/signin"}>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<PageNotFound />} />
    </ReactRouterDomRouters>
  );
};

export default Routes;
