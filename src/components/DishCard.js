function DishCard({ dish, isSelected, onAddDish, onRemoveDish, onViewIngredients }) {
  return (
    <div className={`card dish-card ${isSelected ? "border-success" : ""}`}>
      <img src={dish.image} alt={dish.name} className="card-img-top" style={{width: "100%", height: "150px", objectFit: "cover"}} />
      <div className="card-body text-center">
        <h5 className="card-title">{dish.name}</h5>
        <p className="card-text">{dish.description}</p>
        <button
          className={`btn ${isSelected ? "btn-danger" : "btn-primary"} mx-1`}
          onClick={() => (isSelected ? onRemoveDish(dish.id) : onAddDish(dish.id))}
        >
          {isSelected ? "Remove" : "Add"}
        </button>
        <button
          className="btn btn-outline-secondary mx-1"
          onClick={() => onViewIngredients(dish)}
        >
          Ingredients
        </button>
      </div>
    </div>
  );
}
export default DishCard;