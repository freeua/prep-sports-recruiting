import React from 'react';
import { Link } from 'react-router-dom';

const PlanCard = ({ period, price }) => {
  return (
    <div className="pricing-plans ">
      <figure>
        <b>{period}</b>
      </figure>

      <h1>
        {price} <mark>/month</mark>
      </h1>
      <Link
        to={{
          pathname: '/payment',
          state: {
            period,
            price,
          },
        }}
      >
        <div className="button-group button-group--center">
          <a
            mat-flat-button
            color="white"
            className="mat-focus-indicator mat-flat-button mat-button-base mat-white"
            href="/newui/subscriptionPayment.go?spId=001&sd=5th0g54yjmqtw1on"
            tabIndex={0}
            aria-disabled="false"
          >
            <span className="mat-button-wrapper"> Buy Now </span>
            <div matripple className="mat-ripple mat-button-ripple" />
            <div className="mat-button-focus-overlay" />
          </a>
        </div>
      </Link>
    </div>
  );
};

export default PlanCard;
