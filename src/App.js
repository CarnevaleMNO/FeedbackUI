import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [trueOrFalse, setTrueOrFalse] = useState(true);

  const handleClick = () => {
    if (trueOrFalse === true) {
      setTrueOrFalse(false);
    } else {
      setTrueOrFalse(true);
    }
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList
          feedback={feedback}
          display={trueOrFalse}
          handleDelete={deleteFeedback}
        />
        <button className="btn btn-secondary" onClick={handleClick}>
          Click
        </button>
      </div>
    </>
  );
}
