import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackList({ feedback, display, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet..</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              display={display}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  //No Animations
  // return (
  //     <div className="feedback-list">
  //         {feedback.map((item) => (
  //             <FeedbackItem key={item.id} item={item} display={display} handleDelete={handleDelete} />
  //         ))}
  //     </div>
  // )
}
