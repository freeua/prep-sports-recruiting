import React, { useContext } from "react";
import { IsLoggedContext } from "../../state/IsLogged";
import AvatarPlaceholder from "../AvatarPlaceholder";
import { UserInfoContext } from "../../state/userInfo";
import { Link } from "react-router-dom";
import { logout } from "../../api/auth.api";
import { AuthMeInfoContext } from "../../state/authMeInfo";

const ProfileBox = ({ setIsProfile }) => {
  const { setIsLogged } = useContext(IsLoggedContext);
  const { userInfo, clearUser } = useContext(UserInfoContext);
  const { authMeInfo } = useContext(AuthMeInfoContext);

  const handleLogout = async () => {
    await logout(userInfo.access_token);
    localStorage.removeItem("localUserInfo");
    setIsLogged(false);
    clearUser();
  };

  return (
    <div
      className="nav-menu ng-tns-c255-33 ng-trigger ng-trigger-menuState ng-star-inserted"
      style={{ transform: "translateX(-50%) scale(1)", opacity: 1 }}
    >
      <nav-profile className="ng-tns-c255-33">
        <div className="nav-profile ng-star-inserted">
          <div className="nav-profile__info">
            <AvatarPlaceholder url={authMeInfo.avatar} />
            <dl>
              <dt>
                <h3> </h3>
              </dt>
              <dt>
                <i
                  role="img"
                  className="icons mat-icon notranslate material-icons mat-icon-no-color"
                  aria-hidden="true"
                >
                  email
                </i>{" "}
                {userInfo.username}{" "}
              </dt>
            </dl>
          </div>
          <div
            onClick={() => setIsProfile(false)}
            className="nav-profile__btns"
          >
            <Link
              mat-raised-button
              color="primary"
              to="/profile"
              className="mat-focus-indicator mat-raised-button mat-button-base mat-primary"
              tabIndex={0}
              aria-disabled="false"
            >
              <span className="mat-button-wrapper">
                <i
                  role="img"
                  className="icons mat-icon notranslate material-icons mat-icon-no-color"
                  aria-hidden="true"
                >
                  account_circle
                </i>
                My Account{" "}
              </span>
              <div matripple className="mat-ripple mat-button-ripple" />
              <div className="mat-button-focus-overlay" />
            </Link>
            {/* eslint-disable-next-line */}
            <a
              mat-raised-button
              className="mat-focus-indicator mat-raised-button mat-button-base"
              tabIndex={0}
              aria-disabled="false"
            >
              <span onClick={handleLogout} className="mat-button-wrapper">
                <i
                  role="img"
                  className="icons mat-icon notranslate material-icons mat-icon-no-color"
                  aria-hidden="true"
                >
                  power_settings_new
                </i>
                Logout{" "}
              </span>
              <div matripple className="mat-ripple mat-button-ripple" />
              <div className="mat-button-focus-overlay" />
            </a>
          </div>
        </div>
      </nav-profile>
    </div>
  );
};

export default ProfileBox;
