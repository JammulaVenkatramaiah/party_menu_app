function IngredientModal({ dish, onClose }) {
  if (!dish) return null;
  return (
    <div className="ingredient-modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{dish.name} Ingredients</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <ul className="list-group">
              {dish.ingredients.map((ing, idx) => (
                <li key={idx} className="list-group-item">{ing}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default IngredientModal;