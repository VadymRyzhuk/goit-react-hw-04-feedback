import React, { useState } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    const percentage =
      totalFeedback === 0 ? 0 : (feedback.good / totalFeedback) * 100;
    return Math.floor(percentage);
  };

  const options = Object.keys(feedback);
  const totalFeedbackValue = countTotalFeedback();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {totalFeedbackValue > 0 && (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedbackValue}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>

      {totalFeedbackValue === 0 && (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};
