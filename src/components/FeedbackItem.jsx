import { FaTimes } from 'react-icons/fa';
import Card from "./shared/Card";

export default function FeedbackItem({ item, display, handleDelete }) {

  return (
    <Card display={display}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color={display && "white"}/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
