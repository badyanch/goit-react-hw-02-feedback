import { Component } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';
import * as S from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage(total) {
    const { good } = this.state;
    return Math.round((good * 100) / total);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage(totalFeedback);

    return (
      <S.Container>
        <GlobalStyle />
        <S.Title>Feedback App</S.Title>

        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </S.Container>
    );
  }
}
