import {useContext} from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import Card from "./shared/Card";
import {FeedbackContext} from "../context/FeedbackContext";

export default function FeedbackItem({ item, display }) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Card display={display}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color={display && "white"}/>
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color={display && "white"} />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
