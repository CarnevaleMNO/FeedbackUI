import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIcon from "./components/AboutIcon";
import About from "./components/pages/About";
import Button from "./components/shared/Button";
import FeedbackProvider from "./context/FeedbackContext";

export default function App() {
  const [trueOrFalse, setTrueOrFalse] = useState(true);

  const handleClick = () => {
    if (trueOrFalse === true) {
      setTrueOrFalse(false);
    } else {
      setTrueOrFalse(true);
    }
  };

  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList
                  display={trueOrFalse}
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
    </FeedbackProvider>
  );
}
