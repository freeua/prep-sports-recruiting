import React from "react";

const NotificationBox = ({ logged = false }) => {
  return (
    <div
      className="nav-menu ng-tns-c254-2 ng-trigger ng-trigger-menuState ng-star-inserted"
      style={{ transform: "translateX(-50%) scale(1)", opacity: 1 }}
    >
      <div className="nav-menu__scrollbar ng-tns-c254-2">
        <div className="nav-menu__scrollbar__fix ng-tns-c254-2">
          <notification-center className="ng-tns-c254-2">
            <div className="notification-center">
              <div
                className="notification-center__header nav-menu__sport-header ng-star-inserted"
                style={{}}
              >
                <h5>Notifications</h5>
                <div>
                  {/* eslint-disable-next-line */}
                  <a
                    aria-haspopup="true"
                    className="mat-menu-trigger icons icons--smaller"
                  >
                    tune
                  </a>
                </div>
              </div>

              <mat-menu
                yposition="below"
                xposition="before"
                className="ng-tns-c108-3"
              ></mat-menu>

              <alert className="ng-star-inserted" style={{}}>
                {logged ? (
                  <div className="alert alert--success">
                    <div className="alert__icon ng-star-inserted">
                      <i className="icons icons--medium ng-star-inserted">
                        check_circle
                      </i>
                    </div>

                    <article>
                      <h6 className="alert__spacing">
                        <div alert-heading>All caught up!</div>
                      </h6>
                      <div className="alert__spacing ng-star-inserted">
                        <p alert-content>
                          Check back later for new notifications
                        </p>
                      </div>
                      {/* eslint-disable-next-line */}
                      <a className="alert__click" />
                    </article>
                  </div>
                ) : (
                  <div className="alert">
                    <div className="alert__icon ng-star-inserted">
                      <i className="icons icons--medium ng-star-inserted">
                        info
                      </i>
                    </div>

                    <article>
                      <h6 className="alert__spacing">
                        <div alert-heading>You're not logged in!</div>
                      </h6>
                      <div className="alert__spacing ng-star-inserted">
                        <p alert-content>
                          Please login to see your notifications
                        </p>
                      </div>
                      {/* eslint-disable-next-line */}
                      <a className="alert__click" />
                    </article>
                  </div>
                )}
              </alert>
            </div>
          </notification-center>
        </div>
      </div>
    </div>
  );
};

export default NotificationBox;
