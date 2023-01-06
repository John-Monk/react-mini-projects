import React from 'react';

const Categories = ({category}) => {
  return (
    <div className="btn-container">
      <button className="filter-btn">{category}</button>
    </div>
  );
};

export default Categories;
