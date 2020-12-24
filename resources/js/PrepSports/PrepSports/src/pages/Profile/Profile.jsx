import React, { useState } from "react";
import SmallHeader from "../../components/SmallHeader/SmallHeader";
// import GeneralSettings from './Settings/GeneralSettings';
import { Link } from "react-router-dom";
import "./styles.scss";
import "./Profile.scss";
import Button from "../../components/Button/Button";
import ProfileTab from "./ProfileTabs/ProfileTab";
import PersonalTab from "./ProfileTabs/PersonalTab";
import AccountTab from "./ProfileTabs/AccountTab";
import SchoolsEmailedTab from "./ProfileTabs/SchoolsEmailedTab";
// import ContentSettings from './Settings/ContentSettings';

const profileTabs = ["Personal", "Account", "Schools Emailed"];

const Profile = () => {
  const [currentTab, setCurrentTab] = useState(profileTabs[0]);

  const pickTab = () => {
    switch (currentTab) {
      case "Personal":
        return <PersonalTab />;
      case "Account":
        return <AccountTab />;
      case "Schools Emailed":
        return <SchoolsEmailedTab />;
      default:
        return <PersonalTab />;
    }
  };

  return (
    <>
      <SmallHeader />
      <div id="profile-container">
        <div className="container " id="container">
          <div id="tooltip" className="tooltipContainer" />
          <div
            className="profilePop"
            id="profilePop"
            style={{ display: "none" }}
          />
          <div className="main clearfix">
            <div className="fantasyMainContainer">
              <div className="mainContainer">
                <div className="contentContainer">
                  <div className="titleBar curve2">
                    <h1>User Profile</h1>
                  </div>

                  <div style={{ clear: "both" }}></div>
                  <div className="tabLinkContainer columnsTabLinkContainer">
                    {profileTabs.map((tab, index) => (
                      <ProfileTab
                        setCurrentTab={setCurrentTab}
                        current={currentTab}
                        length={profileTabs.length}
                        text={tab}
                        index={index}
                      />
                    ))}
                  </div>
                  <div className="tabContainer curve0222">{pickTab()}</div>
                </div>
              </div>
            </div>
            <div style={{ clear: "both", paddingTop: 15 }}>
              <div style={{ paddingTop: 10, paddingBottom: 10 }}></div>
            </div>
            <div className="rightContainer">
              <div className="rightNavContainer">
                <div className="loginContainer">
                  <div className="helpBlock"></div>
                </div>
                <div
                  className="rightNav"
                  style={{ position: "relative", zIndex: 99 }}
                >
                  <style
                    dangerouslySetInnerHTML={{
                      __html: "\n\tdiv.logo {padding:8px 0px 0px 0px;}\n"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
