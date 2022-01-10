import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>Rate your service with us.</h2>
        {/* Rating select component */}
        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Write a review.."
            value={text}
          />
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Card>
  );
}
