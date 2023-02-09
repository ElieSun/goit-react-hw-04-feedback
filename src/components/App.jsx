import React, { useState } from 'react';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import SectionTitle from './SectionTitle/SectionTitle';
import { Main, SubTitle } from 'components/App.styled';

export function App () {
    const [good, setGood] = useState(0);
    const [bad, setBad] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const total = good + bad + neutral;
    const positivePercentage = Math.round((good / total) * 100);
    const options = Object.keys({good, bad, neutral});
    const incrementFeedback = option => {
        switch (option) {
            case 'good':
                setGood (prevState => prevState + 1);
                break;
            case 'bad':
                setBad (prevState => prevState + 1);
                break;
            case 'neutral':
                setNeutral (prevState => prevState + 1);
                break;
            default: return;
        
        }
    };
        return (
            <Main>
                <SectionTitle title="Please leave your Feedback"></SectionTitle>
                <FeedbackOptions options={options} onLeaveFeedback={incrementFeedback}/>
                <SubTitle>Statistics</SubTitle>
                {total ? (
                    <Statistics good={good} 
                                neutral={neutral} 
                                bad={bad} 
                                total={total}
                                positivePercentage={positivePercentage}/>
                ) : (<Notification message="There is no feedback"/>)}
            </Main>
        );
    };

