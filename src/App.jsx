import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import ReadTime from './components/ReadTime/ReadTime';
import SideCart from './components/SideCart/SideCart'
import QuestionAns from './components/QuestionAns/QuestionAns';

function App() {
  const [time, setTime] = useState("");
  const handleReadTime = (readTime) =>{
    const previousReadTime = localStorage.getItem("readTime");
    if(previousReadTime){
      const sum = parseInt(previousReadTime) + parseInt(readTime);
      localStorage.setItem("readTime", sum);
      setTime(sum);
      }
      else{
        localStorage.setItem("readTime", readTime);
        setTime(readTime);
      }
  };

  const [bookMark, setBookMark] = useState([]);

  const handleBookmarked = (bookMarked) => {
    const newBookMark = [...bookMark, bookMarked];
    setBookMark(newBookMark);
  }

  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2  md:w-11/12 mx-auto mt-20 ">
        <div className="md:ml-10">
          <Home handleReadTime={handleReadTime} 
          handleBookmarked={handleBookmarked}></Home>
        </div>

        <div className="sm:m-l0 md:ml-72">
          <div>
            <ReadTime time={time}></ReadTime>
          </div>
          <div>
            <SideCart bookMark={bookMark}></SideCart>
          </div>
        </div>

      </div>

      <div>
        <QuestionAns></QuestionAns>
      </div>
    </div>
  )
}



export default App
