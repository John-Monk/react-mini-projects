import React from 'react';
import { useState } from 'react';

const List = ({ people }) => {
  let newList = people;
  const [list, setList] = useState(newList);

  const clearBirthdayHandler = (id) => {
    setList(newList.filter(person => person.id !== id))
  }

  return (
    <>
      <h2>list component</h2>
      {list.map(({ id, name, age, image }) => (
        <article className="person" key={id}>
          <img className="img" src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{age}</p>
          </div>
          <button onClick={() => clearBirthdayHandler(id)}>Clear Birthday</button>
        </article>
      ))}
    </>
  );
};

export default List;
