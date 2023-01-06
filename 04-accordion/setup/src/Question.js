import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [display, setDisplay] = useState(false);

  const displayHandler = () => {
    setDisplay(!display);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={displayHandler} className="btn">
          {display ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {display && <p>{info}</p>}
    </article>
  );
};

export default Question;

// return (
//   <article className="question">
//     <header>
//       <h4>{title}</h4>
//       {display ? (
//         <AiOutlineMinus className='btn' onClick={displayHandler} />
//       ) : (
//         <AiOutlinePlus className='btn' onClick={displayHandler} />
//       )}
//     </header>
//       {display && <p>{info}</p>}
//   </article>
// )
