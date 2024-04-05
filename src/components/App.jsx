import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from './Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const clickBtn = e => {
    const name = e.target.name;
    setFeedback(prevFeedback => ({ ...prevFeedback, [name]: prevFeedback[name] + 1 }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.floor((feedback.good / total) * 100) : 0;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions clickBtn={clickBtn} state={feedback} />
      </Section>
      <Section title={'Statistics'}>
        {total ? (
          <Statistics
            feedback={feedback}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
