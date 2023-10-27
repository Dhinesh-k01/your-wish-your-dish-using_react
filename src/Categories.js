import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {categories.map((dishes, index) => {
        return (
          <button
            type='button'
            className='filter-btn'
            key={index}
            onClick={() => filterItems(dishes)}
          >
            {dishes}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
