import React, { Component } from 'react';

import Statistics from './Statistics';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const reviewsArray = Object.values(this.state);
    const totalReviews = reviewsArray.reduce(
      (total, feedbacks) => total + feedbacks,
      0
    );

    return totalReviews;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  getFeedBack = index => {
    this.setState(prevState => ({
      [index]: prevState[index] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.getFeedBack}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />

          {/* <Notification message="There is no feedback" /> */}
        </Section>
      </>
    );
  }
}

export default App;
