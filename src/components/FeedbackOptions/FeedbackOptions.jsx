import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ clickBtn, state }) => {
  return (
    <div className={styles.buttonContainer}>
      {Object.keys(state).map(btnName => (
        <button
          key={btnName}
          className={styles.button}
          type="button"
          name={btnName}
          onClick={clickBtn}
        >
          {btnName}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
