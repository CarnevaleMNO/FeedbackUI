import {useContext} from 'react';
import {FeedbackContext} from "../context/FeedbackContext";

export default function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext);

    //Calculate ratings avg
    let average = feedback.reduce((acc, curr) => {
        return acc + curr.rating
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '');

    return (
        <div className="feedback-stats">
            <h4>{feedback.length === 1 ? `${feedback.length} review` : `${feedback.length} reviews` }</h4>
            <h4>Average Rating: {isNaN(average) ? "N/A" : average}</h4>
        </div>
    )
}
