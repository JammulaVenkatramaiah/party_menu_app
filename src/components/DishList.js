import React from "react";
import DishCard from "./DishCard";

function DishList({ dishes, onAddDish, onRemoveDish, selectedDishes, onViewIngredients }) {
  return (
    <div className="row dish-list">
      {dishes.map(dish => (
        <div key={dish.id} className="col-md-4 mb-4">
        <DishCard
          key={dish.id}
          dish={dish}
          isSelected={selectedDishes.includes(dish.id)}
          onAddDish={onAddDish}
          onRemoveDish={onRemoveDish}
          onViewIngredients={onViewIngredients}
        />
      </div>
      ))}
    </div>
  );
}
export default DishList;
