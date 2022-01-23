import PropTypes from "prop-types";
import React from "react";
import s from './Feedback.module.css'


export const FeedBackButton = ({options,onFeedback}) =>{
    return (
        <>
        {options.map((option)=> (
            <button
            className={s.btn}
            key={option}
            name={option}
            type="button"
            onClick={onFeedback}
            >
            {option}
            </button>
        ))}
        </>
     )
}

FeedBackButton.propTypes = {
    onFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
};