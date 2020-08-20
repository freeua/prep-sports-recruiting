import React from 'react';
import './PaymentTable.scss';

const PaymentTable = ({ period, price }) => {
  return (
    <div id="payment-table">
      <table>
        <tr>
          <th>Quantity</th>
          <th>Period</th>
          <th>Total Fee</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>1</td>
          <td>{period}</td>
          <td>${price}</td>
          <td>
            No Ads - Ad-free experience on Fantrax Platform on all devices
          </td>
        </tr>
      </table>
    </div>
  );
};

export default PaymentTable;
