import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const FeedbackContext = createContext();

export default function FeedbackProvider({ children }) {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is America",
      rating: 10,
    },
    {
      id: 2,
      text: "This is Japan",
      rating: 9,
    },
    {
      id: 2,
      text: "This is Canada",
      rating: 8,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const updateFeedback = (id, updatedItem) => {
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...updatedItem} : item))
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}
