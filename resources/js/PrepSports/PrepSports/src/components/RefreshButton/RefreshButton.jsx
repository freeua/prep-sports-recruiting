import React from 'react';

const RefreshButton = () => {
  return (
    <button
      mat-icon-button=""
      color="primary-highlight"
      class="mat-focus-indicator ng-tns-c271-19 mat-icon-button mat-button-base mat-primary-highlight"
    >
      <span class="mat-button-wrapper">
        <mat-icon
          role="img"
          class="mat-icon notranslate material-icons mat-icon-no-color"
          aria-hidden="true"
        >
          refresh
        </mat-icon>
      </span>
      <div
        matripple=""
        class="mat-ripple mat-button-ripple mat-button-ripple-round"
      ></div>
      <div class="mat-button-focus-overlay"></div>
    </button>
  );
};

export default RefreshButton;
