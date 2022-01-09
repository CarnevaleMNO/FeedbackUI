import Card from "./shared/Card";

export default function FeedbackItem({ item, display }) {
  
  return (
    <Card display={display}>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
