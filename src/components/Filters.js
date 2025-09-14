import React from "react";

function Filters({
  categories,
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  vegOnly,
  onVegOnlyChange,
  perCategoryCount
}) {
  return (
    <div className="filters">
      {categories.map(cat => (
        <button
          key={cat}
          className={cat === activeCategory ? "active" : ""}
          onClick={() => onCategoryChange(cat)}>
          {cat} ({perCategoryCount[categories.indexOf(cat)] || 0})
        </button>
      ))}
      <input
        type="text"
        placeholder="Search dish"
        value={searchTerm}
        onChange={e => onSearchChange(e.target.value)}
      />
      <label>
        <input type="checkbox" checked={vegOnly} onChange={e => onVegOnlyChange(e.target.checked)} />
        Veg Only
      </label>
    </div>
  );
}
export default Filters;
