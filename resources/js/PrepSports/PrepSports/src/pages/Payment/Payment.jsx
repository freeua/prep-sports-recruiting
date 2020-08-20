import React from 'react';
import SmallHeader from '../../components/SmallHeader/SmallHeader';
import PaymentTable from './PaymentTable/PaymentTable';
import Button from '../../components/Button/Button';
import { convertToValidPrice } from '../../utils/helpers';
import { Redirect } from 'react-router-dom';

const Payment = props => {
  const isFromRedirect = props.location.state ? true : false;

  if (!isFromRedirect) {
    return <Redirect to="/plans" />;
  }

  let { period, price } = props.location.state;
  const isFree = price === 'Free';

  price = convertToValidPrice(price);

  return (
    <div>
      <SmallHeader />
      <div className="content content--center payment-wrapper">
        <section
          tabIndex={-1}
          className="main-content content__main payment-section"
        >
          <div className="content__headline">
            <h2>Subscription Payment - Ad-Free</h2>
            <h3>Purchase Details</h3>
          </div>

          <PaymentTable period={period} price={price} />

          <p>
            Total to pay now: <strong>${price}(US)</strong>{' '}
          </p>

          {isFree ? (
            <p>
              Click here to active your free trial now!
              <Button margin={true} text="Acivate Now" />
            </p>
          ) : (
            <p>
              Click here to go to the payment screen to pay by credit card
              <Button margin={true} text="Pay By Credit Card" />
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Payment;
