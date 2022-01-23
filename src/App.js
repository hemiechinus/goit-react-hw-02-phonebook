import { Component } from  'react';
import {FeedBackButton} from './Feedback';
import { Section } from './Section';
import { Statistic } from './Statistic'
import { Notification} from './Notification'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  changeState = (e) => {
    const name = e.target.name;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };
  
  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => (acc += value), 0);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
  
  render(){
   const {good,neutral, bad} = this.state;
    return (
      <>
      <Section title="Please leave feedback">
      <FeedBackButton 
      options={["good", "neutral", "bad"]}
      onFeedback = {this.changeState}
      />
      </Section>
      <Section title="Statistic"> 
      {this.countTotalFeedback() ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification title="No feedback given" />
          )}
      </Section>
      </>
    );
  }
}