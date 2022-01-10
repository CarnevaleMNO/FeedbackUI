import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from './RatingSelect';

export default function FeedbackForm({handleAdd}) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 15) {
      setBtnDisabled(true);
      setMessage("Review must be at least 15 characters");
    } else {
        setBtnDisabled(false)
        setMessage(null)
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    if(text.trim().length > 14){
      const newFeedback = {
        text, 
        rating
      }

      handleAdd(newFeedback)

      setText("")
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Rate your service with us.</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Write a review.."
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}
