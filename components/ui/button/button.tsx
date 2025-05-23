import React from 'react';

import type { ButtonProps } from './button.props';

import styles from './button.module.scss';

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.buttonLabel}>{label}</span>
    </button>
  );
};

export default Button;
