import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import NotFound from "./components/NotFound/NotFound";
import AboutSport from "./pages/AboutSport/AboutSport";
import { CurrentSportContextProvider } from "./state/CurrentSportContext";
import { IsLoggedContextProvider, IsLoggedContext } from "./state/IsLogged";
import { IsBlogPageContextProvider } from "./state/isBlogPageContext";
import Blog from "./pages/Blog/Blog";
import Layout from "./components/Layout/Layout";
import { IsAllowedNotificationsContextProvider } from "./state/isAllowedNotifications";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";
import Contact from "./pages/Contact/Contact";
import AboutUs from "./pages/AboutUs/AboutUs";
import Faq from "./pages/Faq/Faq";
import { UserInfoContextProvider, UserInfoContext } from "./state/userInfo";
import Profile from "./pages/Profile/Profile";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Plans from "./pages/Plans/Plans";
import Payment from "./pages/Payment/Payment";
import ColleagueSearch from "./pages/ColleagueSearch/ColleagueSearch";
import ScrollToTop from "./components/ScrollToTop";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import { AuthMeInfoContextProvider } from "./state/authMeInfo";
import { AccountDataContextProvider } from "./state/accountData";
import PasswordReset from "./pages/PasswordReset/PasswordReset";

const App = () => {
  return (
    <AuthMeInfoContextProvider>
      <AccountDataContextProvider>
        <IsLoggedContextProvider>
          <IsBlogPageContextProvider>
            <UserInfoContextProvider>
              <IsAllowedNotificationsContextProvider>
                <CurrentSportContextProvider>
                  <Router>
                    <Layout>
                      <ScrollToTop>
                        <Switch>
                          <Route exact={true} path="/" component={Homepage} />
                          <Route path="/sport/:abbr" component={AboutSport} />
                          <Route path="/blog/:id?" component={Blog} />
                          <Route path="/about" component={AboutUs} />
                          <Route path="/terms-of-service" component={Terms} />
                          <Route path="/privacy-policy" component={Privacy} />
                          <Route path="/contact" component={Contact} />
                          <Route path="/faq" component={Faq} />
                          {/* <Route path="/login" component={Login} /> */}
                          <Route path="/register" component={SignUp} />
                          <Route
                            path="/forgot-password"
                            component={ForgotPassword}
                          />
                          <Route
                            path="/password/reset/:reset_token"
                            component={PasswordReset}
                          />
                          <Route path="/plans" component={Plans} />
                          <Route
                            path="/colleague-search"
                            component={ColleagueSearch}
                          />
                          <PrivateRoute path="/profile" component={Profile} />
                          <PrivateRoute path="/payment" component={Payment} />
                          <Route component={NotFound} />
                        </Switch>
                      </ScrollToTop>
                    </Layout>
                  </Router>
                </CurrentSportContextProvider>
              </IsAllowedNotificationsContextProvider>
            </UserInfoContextProvider>
          </IsBlogPageContextProvider>
        </IsLoggedContextProvider>
      </AccountDataContextProvider>
    </AuthMeInfoContextProvider>
  );
};

export default App;
