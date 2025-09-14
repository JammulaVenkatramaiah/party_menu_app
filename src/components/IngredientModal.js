function IngredientModal({ dish, onClose }) {
  if (!dish) return null;
  return (
    <div className="ingredient-modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content ingredient-bg">
          <div className="modal-header d-flex justify-content-between align-items-center">
            <h5 className="modal-title">{dish.name} Ingredients</h5>
            <button type="button" className="btn-close-custom" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <ul className="list-group">
              {dish.ingredients.map((ing, idx) => (
                <li key={idx} className="list-group-item">{ing.name} - {ing.quantity}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default IngredientModal;