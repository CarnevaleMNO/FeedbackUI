import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIcon from "./components/AboutIcon";
import About from "./components/pages/About";
import Button from "./components/shared/Button";

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

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  display={trueOrFalse}
                  handleDelete={deleteFeedback}
                />
                <Button version="secondary" func={handleClick}>
                  Click
                </Button>
              </>
            }
          ></Route>

          <Route path="/about" element={<About />} />
        </Routes>

        <AboutIcon />
      </div>
    </Router>
  );
}
