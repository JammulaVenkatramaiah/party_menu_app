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
    <div className="filters row align-items-center mb-3">
      <div className="col-auto">
      {categories.map(cat => (
        <button
          key={cat}
          className={cat === activeCategory ? "active" : ""}
          onClick={() => onCategoryChange(cat)}>
          {cat} ({perCategoryCount[categories.indexOf(cat)] || 0})
        </button>
      ))}
      </div>
      <div className="col-auto">
      <input
        type="text"
        className="form-control"
        placeholder="Search dish"
        value={searchTerm}
        onChange={e => onSearchChange(e.target.value)}
      />
      </div>
      <div className="col-auto form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="vegOnly"
          checked={vegOnly}
          onChange={e => onVegOnlyChange(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="vegOnly">Veg Only</label>
      </div>
    </div>
  );
}
export default Filters;
