import React from "react";
import PropTypes from "prop-types";

export const Statistic = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div>
            <p>Good: { good}</p>
            <p>Neutral: { neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive Feedback:{positivePercentage}%</p>
        </div>
    )
}
Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};