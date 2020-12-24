import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, makeStyles, MenuItem } from '@material-ui/core';
import Sports from '../../Sports';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      width: '100%',
      minWidth: '80px',
    },
    '& .MuiInputBase-input': {
      fontSize: '15px',
    },
    '& .MuiFormLabel-root': {
      fontSize: '1.3rem',
    },
    '& .MuiFormLabel-root ': {
      backgroundColor: '#fff',
    },
    '& .MuiList-root .MuiListItem-root': {
      fontSize: 'calc(var(--content) * 1.5rem);',
    },
  },
  option: {
    fontSize: 15,
    '& > span': {
      fontSize: 18,
    },
  },
  menuItem: {
    fontSize: 'calc(var(--content) * 1.5rem);',
  },
}));

const PlanCard = ({ emailsCount, price = '', isFree = false }) => {
  const classes = useStyles();
  const [chosenSportType, setChosenSportType] = useState('');
  const isDisabled = chosenSportType === '';

  const buttonStyles = {
    cursor: isDisabled ? 'default' : 'pointer',
  };

  return (
    <div className="pricing-plans ">
      <figure>
        <b>{emailsCount}</b>
      </figure>

      {isFree ? (
        <h1>
          Trial
          <mark>(free)</mark>
        </h1>
      ) : (
        <h1>{price}</h1>
      )}

      <div
        appearance="outline"
        className="mat-form-field ng-tns-c73-8 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-outline mat-form-field-can-float mat-form-field-should-float mat-form-field-has-label mat-form-field-disabled ng-star-inserted"
      >
        <div className="mat-form-field-wrapper ng-tns-c73-8">
          <div
            style={{ display: 'flex', justifyContent: 'center' }}
            className="mat-form-field-flex ng-tns-c73-8"
          >
            <TextField
              id="outlined-select-currency-native"
              select
              name="sportType"
              label="Sport Type"
              required
              value={chosenSportType}
              onChange={({ target }) => setChosenSportType(target.value)}
              variant="outlined"
              style={{ minWidth: '140px' }}
            >
              {Sports.map(({ title, smallAbbreviation }) => (
                <MenuItem
                  className={classes.menuItem}
                  key={smallAbbreviation}
                  value={smallAbbreviation}
                >
                  {title}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
      </div>
      <Link
        to={{
          pathname: '/payment',
          state: {
            period: { emailsCount },
            price: isFree ? 'free' : price,
          },
        }}
      >
        <div className="button-group nopointer button-group--center">
          <a
            mat-flat-button
            color="white"
            className={`mat-focus-indicator mat-flat-button mat-button-base mat-white ${
              isDisabled ? 'disabled' : ''
            }`}
            tabIndex={0}
            aria-disabled="false"
          >
            <span className="mat-button-wrapper">
              {isFree ? 'Try Now' : 'Buy Now'}
            </span>
            <div matripple className="mat-ripple mat-button-ripple" />
            <div className="mat-button-focus-overlay" />
          </a>
        </div>
      </Link>
    </div>
  );
};

export default PlanCard;

// <div className="pricing-plans ">
//   <figure>
//     <b>{period}</b>
//   </figure>

//   <h1>
//     {price} <mark>/month</mark>
//   </h1>
//   <Link
//     to={{
//       pathname: '/payment',
//       state: {
//         period,
//         price,
//       },
//     }}
//   >
//     <div className="button-group button-group--center">
//       <a
//         mat-flat-button
//         color="white"
//         className="mat-focus-indicator mat-flat-button mat-button-base mat-white"
//         href="/newui/subscriptionPayment.go?spId=001&sd=5th0g54yjmqtw1on"
//         tabIndex={0}
//         aria-disabled="false"
//       >
//         <span className="mat-button-wrapper"> Buy Now </span>
//         <div matripple className="mat-ripple mat-button-ripple" />
//         <div className="mat-button-focus-overlay" />
//       </a>
//     </div>
//   </Link>
// </div>

{
  /* <div className="pricing-plans pricing-plans--free ">
      <figure>
        <b>{emailsCount}</b>
      </figure>

      {isFree ? (
        <h1>
          Trial
          <mark>(free)</mark>
        </h1>
      ) : (
        <h1>{price}</h1>
      )}

      <Link
        to={{
          pathname: '/payment',
          state: {
            period: emailsCount,
            price: isFree ? 'free' : price,
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
            <span className="mat-button-wrapper">
              {isFree ? 'Try Now' : 'Buy Now '}s
            </span>

            <div matripple className="mat-ripple mat-button-ripple" />
            <div className="mat-button-focus-overlay" />
          </a>
        </div>
      </Link>
    </div> */
}
