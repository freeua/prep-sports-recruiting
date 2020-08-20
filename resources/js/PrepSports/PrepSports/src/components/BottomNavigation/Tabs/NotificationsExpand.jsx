import React from 'react';

const NotificationsExpand = ({ isLogged }) => {
  return (
    <section class="ng-star-inserted">
      <notification-center>
        <div class="notification-center">
          <div class="content__header ng-star-inserted">
            <div class="content__header__title">
              <h1>Notifications</h1>
            </div>
            <div class="content__header__buttons">
              <button
                aria-haspopup="true"
                mat-icon-button=""
                color="primary-highlight"
                class="mat-focus-indicator mat-menu-trigger mat-icon-button mat-button-base mat-primary-highlight"
              >
                <span class="mat-button-wrapper">
                  <mat-icon
                    role="img"
                    class=" mat-icon notranslate material-icons mat-icon-no-color"
                    aria-hidden="true"
                  >
                    tune
                  </mat-icon>
                </span>
                <div class="mat-ripple mat-button-ripple mat-button-ripple-round"></div>
                <div class="mat-button-focus-overlay"></div>
              </button>
            </div>
          </div>
          <mat-menu
            yposition="below"
            xposition="before"
            class="ng-tns-c108-4"
          ></mat-menu>
          {isLogged ? (
            <alert
              type="success"
              icon="check_circle"
              className="ng-star-inserted"
            >
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
                    <p alert-content>Check back later for new notifications</p>
                  </div>
                </article>
              </div>
            </alert>
          ) : (
            <alert class="ng-star-inserted">
              <div class="alert">
                <div class="alert__icon ng-star-inserted">
                  <i class="icons icons--medium ng-star-inserted">info</i>
                </div>
                <article>
                  <h6 class="alert__spacing">
                    <div alert-heading="">You're not logged in!</div>
                  </h6>
                  <div class="alert__spacing ng-star-inserted">
                    <p alert-content="">
                      Please login to see your notifications
                    </p>
                  </div>
                  {/* eslint-disable-next-line */}
                  <a class="alert__click"></a>
                </article>
              </div>
            </alert>
          )}
        </div>
      </notification-center>
    </section>
  );
};

export default NotificationsExpand;
