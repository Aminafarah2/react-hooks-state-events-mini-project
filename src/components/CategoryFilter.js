import React from "react";

const CategoryFilter = ({ categories, selectedCategory, onCategorySelect, addStyle }) => {
  function handleFilterClick(e) {
    let categoryValue = e.target.id;
    applyStyle(categoryValue);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          id={category}
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={category === selectedCategory ? 'selected' : addStyle}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
