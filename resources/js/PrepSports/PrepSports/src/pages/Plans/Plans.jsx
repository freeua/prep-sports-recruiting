import React, { useState, useEffect } from "react";
import PlanCard from "./PlanCard";
import Loader from "../../components/Loader/Loader";
import { getSports, getPlans } from "../../api/coaches.api";
import { useContext } from "react";
import { UserInfoContext } from "../../state/userInfo";
import { IsLoggedContext } from "../../state/IsLogged";
import { useHistory } from "react-router-dom";

const Plans = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { userInfo } = useContext(UserInfoContext);
  const [remoteSports, setRemoteSports] = useState([]);
  const [remotePlans, setRemotePlans] = useState([]);
  const { isLogged } = useContext(IsLoggedContext);
  const history = useHistory();

  useEffect(() => {
    if (!isLogged) {
      history.push("/register");
    }
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const sportsResponse = await getSports(userInfo.access_token);
        const plansResponse = await getPlans(userInfo.access_token);
        setRemoteSports(sportsResponse?.data);
        setRemotePlans(plansResponse?.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="layout__outlet ">
      <router-outlet name="header" role="banner" />
      <app-header>
        <div className="header accent">
          <figure />
        </div>
      </app-header>

      <router-outlet name="notice" />

      <div className=" ng-trigger ng-trigger-chatLayoutAnimation">
        <router-outlet role="main" />
        <app-plans>
          <div className="content content--center">
            <section
              tabIndex={-1}
              className="main-content content__main content__main--small content__main--center "
            >
              <div className="content__headline">
                <h2>Ad-Free Plans</h2>
              </div>
              <alert type="accent">
                <div className="alert alert--accent">
                  <div className="alert__icon ">
                    <i className="icons icons--medium ">info</i>
                  </div>

                  <article>
                    <h6 className="alert__spacing">
                      <div alert-heading>GO AD-FREE!</div>
                    </h6>
                    <div className="alert__spacing ">
                      <div alert-content>
                        No more ads! Choose one of our plans and enjoy:
                        <ul>
                          <li>Lightning-fast ad-free app/website</li>
                          <li>Online privacy</li>
                          <li>Less bandwidth usage on all devices/laptops</li>
                          <li>Lower battery usage on all devices/laptops</li>
                        </ul>
                        Ad-free will apply to the entire site, including all
                        leagues you're in.
                        <br />
                        <br />
                        <b>
                          *If you are in a paid Premium League, you are eligible
                          for a 30% discount off the fees below.
                        </b>
                      </div>
                    </div>
                    {/* eslint-disable-next-line */}
                  </article>
                </div>
              </alert>

              <div className="pricing-plans__container">
                {remotePlans?.map(plan => (
                  <PlanCard
                    key={plan?.id}
                    planId={plan?.id}
                    emailsCount={plan?.term}
                    price={plan?.price}
                    isFree={plan?.id === 1}
                    sports={remoteSports}
                  />
                ))}

                {/* <div className="pricing-plans pricing-plans--free ">
                  <figure>Free</figure>

                  <h1>
                    Trial
                    <mark>(2 Days)</mark>
                  </h1>
                  <Link
                    to={{
                      pathname: '/payment',
                      state: {
                        period: '2 Days',
                        price: 'Free',
                      },
                    }}
                  >
                    <div className="button-group button-group--center">
                      <a
                        mat-flat-button
                        color="white"
                        className="mat-focus-indicator mat-flat-button mat-button-base mat-white"
                        href="/newui/subscriptionPayment.go?spId=001&sd=phb2kl90jmqtw1on"
                        tabIndex={0}
                        aria-disabled="false"
                      >
                        <span className="mat-button-wrapper"> Try Now </span>

                        <div
                          matripple
                          className="mat-ripple mat-button-ripple"
                        />
                        <div className="mat-button-focus-overlay" />
                      </a>
                    </div>
                  </Link>
                </div>
                {plans.map(({ period, price }) => (
                  <PlanCard period={period} price={price} />
                ))} */}
              </div>
            </section>
          </div>
        </app-plans>
      </div>
    </div>
  );
};

export default Plans;
