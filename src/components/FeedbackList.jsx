import FeedbackItem from './FeedbackItem';

export default function FeedbackList({feedback, display}) {
    if(!feedback || feedback.length === 0){
        return <p>No feedback yet..</p>
    }

    return (
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} display={display}/>
            ))}
        </div>
    )
}
