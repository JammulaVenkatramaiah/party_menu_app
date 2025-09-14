import React from "react";

function IngredientModal({ dish, onClose }) {
  if (!dish) return null;
  return (
    <div className="ingredient-modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>{dish.name} Ingredients</h2>
        <p>{dish.description}</p>
        <ul>
          {dish.ingredients.map((ing, idx) =>
            <li key={idx}>{ing.name}: {ing.quantity}</li>
          )}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
export default IngredientModal;
