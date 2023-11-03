import { Component } from 'react';

import { Button } from './Button/Button';
import { Section } from './Section/Section';
import { TextAbout } from './TextAbout/TextAbout';
import { Statistic } from './Statistic/Statistic';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  fnButton = event => {
    const { name } = event.target;
    this.setState(state => ({ [name]: state[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <Button options={this.state} fnButton={this.fnButton} />
          {total === 0 ? (
            <TextAbout message="There is no feedback"></TextAbout>
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          )}
        </Section>
      </>
    );
  }
}
