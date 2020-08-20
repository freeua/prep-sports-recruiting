import React from 'react';
import styles from './Button.module.scss';

const Button = ({ text, onClick = null, margin = false }) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.container} ${margin ? styles.margin : null}`}
    >
      <div className={styles.wrapper}>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Button;
