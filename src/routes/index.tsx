// import { ROUTES } from "@constants/routes";
// import useAuth from "@hooks/useAuth";
import SignIn from "@pages/Authentications/SignIn";
import SignUp from "@pages/Authentications/SignUp";
import WithEmail from "@pages/Authentications/WithEmail";
import { ROUTES } from "constants/routes";
import { Navigate, Outlet, Route } from "react-router-dom";

const useAuth = () => {
  return { accessToken: "" };
};
export const NotHaveAuthCheck = () => {
  const { accessToken } = useAuth();
  return accessToken ? <Navigate to={ROUTES.ALL} /> : <Outlet />;
};

export const NotHaveAuthRoute = () => {
  return (
    <>
      <Route element={<NotHaveAuthCheck />}>
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTES.WITH_EMAIL} element={<WithEmail />} />
      </Route>
    </>
  );
};
