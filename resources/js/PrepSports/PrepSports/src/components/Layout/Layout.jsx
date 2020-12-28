import React, { useState, useEffect, useContext } from "react";
import Navbar from "../Navbar/Navbar";
import LoggedNavbar from "../Navbar/LoggedNavbar";
import cn from "classnames";
import Footer from "../Footer/Footer";
import BottomNavigation from "../BottomNavigation/BottomNavigation";
import { IsLoggedContext } from "../../state/IsLogged";
import { UserInfoContext } from "../../state/userInfo";
import { authMe, getAccountData } from "../../api/auth.api";
import { AuthMeInfoContext } from "../../state/authMeInfo";
import { AccountDataContext } from "../../state/accountData";
import Loader from "../Loader/Loader";

const Layout = ({ children }) => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);
  const [isBottomNavigation, setIsBottomNavigation] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { setUserInfo } = useContext(UserInfoContext);
  const { isLogged, setIsLogged } = useContext(IsLoggedContext);
  const { setAuthMeInfo } = useContext(AuthMeInfoContext);
  const { setAccountData } = useContext(AccountDataContext);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const localUserInfo = JSON.parse(localStorage.getItem("localUserInfo"));
        setUserInfo(localUserInfo);

        if (localUserInfo && localUserInfo.access_token) {
          setIsLogged(true);
          const response = await authMe(localUserInfo.access_token);
          if (response.id) {
            setAuthMeInfo(response);
            const accDataResponse = await getAccountData(
              {
                id: response.id
              },
              localUserInfo.access_token
            );
            setAccountData(accDataResponse.data);
          } else {
            setIsLogged(false);
          }
        } else {
          setIsLogged(false);
        }
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLogged(false);
        setIsLoading(false);
      }
    })();
  }, []);

  //Debounce can be implemented here:
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleWindowResize);
    if (window.innerWidth < 1020) {
      setIsBottomNavigation(true);
    } else {
      setIsBottomNavigation(false);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleScroll = () => {
    let scrollTop = window.pageYOffset;
    if (scrollTop === 0) {
      setIsNavbarCollapsed(false);
    } else {
      setIsNavbarCollapsed(true);
    }
  };

  const handleWindowResize = () => {
    if (window.innerWidth < 1020) {
      setIsBottomNavigation(true);
    } else {
      setIsBottomNavigation(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <app-root>
      <div
        className={cn("layout", {
          "navbar--collapse": isNavbarCollapsed
        })}
      >
        {!isBottomNavigation && !isLogged ? <Navbar /> : null}
        {!isBottomNavigation && isLogged ? <LoggedNavbar /> : null}
        <main>{children}</main>
        <Footer />
        {isBottomNavigation ? <BottomNavigation /> : null}
      </div>
    </app-root>
  );
};

export default Layout;
