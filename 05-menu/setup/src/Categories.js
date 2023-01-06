import React from 'react';

const Categories = ({ filterCategories, categories }) => {
  return (
    <div>
      {categories.map((category, index) => (
        <button
          onClick={() => filterCategories(category)}
          key={index}
          className="btn"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;