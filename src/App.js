import {useState} from 'react';
import Header from "./components/Header";
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'

export default function App() {
  const [feedback] = useState(FeedbackData)
  const [trueOrFalse, setTrueOrFalse] = useState(true)

  const handleClick = () => {
    if(trueOrFalse === true){
      setTrueOrFalse(false)
    } else {
      setTrueOrFalse(true)
    }
  }


  return (
    <>
      <Header  />
      <div className="container">
          <FeedbackList feedback={feedback} display={trueOrFalse} />
          <button className="btn btn-secondary" onClick={handleClick}>Click</button>
      </div>
      
    </>
  );
}
