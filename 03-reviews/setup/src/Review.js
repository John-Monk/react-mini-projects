import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [review, setReview] = useState(0);
  const { id, name, job, image, text } = people[review];

  const handleMove = (n) => {
    if (n < 0) {
      return people.length - 1;
    }
    if (n > people.length - 1) {
      return 0;
    }
    return n;
  };

  const prevHandler = () => {
    let move = review - 1;
    setReview(handleMove(move));
  };

  const nextHandler = () => {
    let move = review + 1;
    setReview(handleMove(move));
  };

  const random = () => {
    let num = Math.floor(Math.random() * people.length);
    if (num === review) {
      num++;
    }
    setReview(handleMove(num));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <div key={id}>
        <h4>{name}</h4>
        <p>{job}</p>
        <p>{text}</p>
        <button onClick={prevHandler} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={nextHandler} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={random} className="random-btn">
        Random
      </button>
    </article>
  );
};

export default Review;

// const [index, setIndex] = useState(0);
//   const { id, name, job, image, text } = people[index];

//   const checkNumber = (n) => {
//     if (n > people.length - 1) {
//       return 0;
//     }
//     if (n < 0) {
//       return people.length - 1;
//     }
//     return n;
//   };

//   const nextReview = () => {
//     setIndex((index) => {
//       let newIndex = index + 1;
//       return checkNumber(newIndex);
//     });
//   };

//   const prevReview = () => {
//     setIndex((index) => {
//       let newIndex = index - 1;
//       return checkNumber(newIndex);
//     });
//   };

//   const surprise = () => {
//     let randomNumber = Math.floor(Math.random() * people.length);
//     if (randomNumber === index) {
//       randomNumber = index + 1;
//     }
//     setIndex(checkNumber(randomNumber));
//   };

//   return (
//     <article className="review">
//       <div className="img-container">
//         <img src={image} alt={name} className="person-img" />
//         <span className="quote-icon">
//           <FaQuoteRight />
//         </span>
//       </div>
//       <h4 className="author">{name}</h4>
//       <p className="job">{job}</p>
//       <p className="info">{text}</p>
//       <div className="button-container">
//         <button onClick={prevReview} className="prev-btn">
//           <FaChevronLeft />
//         </button>
//         <button onClick={nextReview} className="next-btn">
//           <FaChevronRight />
//         </button>
//       </div>
//       <button onClick={surprise} className="random-btn">
//         Surprise Me
//       </button>
//     </article>
//   );
// };
