import { Component } from 'react';
import { FnButton } from './FnButton';
import { Statistic } from './Statistic';
import { Section } from './Section';
import { Message } from './Message';
export class Button extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateClicks = evt => {
    return this.setState(state => ({ [evt.target]: state[evt.target] + 1 }));
  };

  totalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  positiveClick = () => {
    return Math.round((this.state.good / this.totalFeedback) * 100);
  };
  render() {
    const total = this.totalFeedback();
    const percentPositiv = this.positiveClick();
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section>
          <FnButton options={this.state} onClick={this.updateClicks} />;
          {total === 0 ? (
            <Message message="There is no feedback"></Message>
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              updateClicks={percentPositiv}
            />
          )}
        </Section>
      </>
    );
  }
}
