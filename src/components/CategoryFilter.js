import React, {useState} from "react";

function CategoryFilter({ categories, onFilterChange }) {

  const [selected, setSelected] = useState(null)

  const handleSelected = (index) => {
    if (selected === index) {
      setSelected(null)
      onFilterChange("")
    } else {
      setSelected(index)
      onFilterChange(categories[index])
    }
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => (
        <button 
          key={category} 
          onClick={() => handleSelected(index)}
          className={selected === index ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
