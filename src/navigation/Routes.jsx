import { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";

// import PrivateRoute from "../shared/components/PrivateRoute";
import PublicRoute from "../shared/components/PublicRoute";

const MainPage = lazy(() => import("../pages/MainPage/MainPage"));
const PricePage = lazy(() => import("../pages/PricePage/PricePage"));
const ContactPage = lazy(() => import("../pages/ContactPage/ContactPage"));
const Navbar = lazy(() => import("../client/Navbar/Navbar"));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <PublicRoute restricted exact path="/" redirectTo="/">
          <Navbar />
          <MainPage />
        </PublicRoute>
        <PublicRoute restricted exact path="/price" redirectTo="/">
          <Navbar />
          <PricePage />
        </PublicRoute>
        <PublicRoute restricted exact path="/contacts" redirectTo="/">
          <Navbar />
          <ContactPage />
        </PublicRoute>
        {/* <PublicRoute restricted exact path="/login" redirectTo="/">
          <Navbar />
          <LoginPage />
        </PublicRoute>
        <PublicRoute restricted exact path="/register" redirectTo="/">
          <Navbar />
          <RegisterPage />
        </PublicRoute> */}
      </Switch>
    </Suspense>
  );
};

export default Routes;
