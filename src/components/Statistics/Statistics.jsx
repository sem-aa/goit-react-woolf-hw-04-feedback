import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ feedback, total, positivePercentage }) => {
  return (
    <div className={styles.statisticsContainer}>
      <div className={styles.statisticsItem}>
        {Object.entries(feedback).map(([key, value], i) => (
          <p key={i}>
            {key}: {value}
          </p>
        ))}
      </div>
      <p className={styles.statisticsLabel}>Total: {total}</p>
      <p className={styles.statisticsLabel}>
        Positive Feedback: {positivePercentage}%
      </p>
    </div>
  );
};

export default Statistics;
