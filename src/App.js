import React, { useState } from "react";
import dishes  from "./data/mockDishes";
import Filters from "./components/Filters";
import DishList from "./components/DishList";
import IngredientModal from "./components/IngredientModal";
import "./App.css";
console.log("Loaded dishes:", dishes); 

const categories = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories);
  const [searchTerm, setSearchTerm] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDish, setModalDish] = useState(null);

  // Filtering logic
  const filteredDishes = dishes.filter(dish =>
    dish.mealType === selectedCategory &&
    (!vegOnly || dish.type === "VEG") &&
    dish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Selection handlers
  const handleAddDish = id => setSelectedDishes(dishes => [...dishes, id]);
  const handleRemoveDish = id => setSelectedDishes(dishes => dishes.filter(dishId => dishId !== id));

  // Modal handlers
  const handleViewIngredients = dish => {
    setModalDish(dish);
    setModalOpen(true);
  };

  const handleCloseModal = () => setModalOpen(false);

  // Counts
  const selectedCount = selectedDishes.length;
  const perCategory = categories.map(
    cat => dishes.filter(dish => dish.mealType === cat && selectedDishes.includes(dish.id)).length
  );

  return (
    <div className="app-container">
      <Filters
        categories={categories}
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        vegOnly={vegOnly}
        onVegOnlyChange={setVegOnly}
        perCategoryCount={perCategory}
      />
      <DishList
        dishes={filteredDishes}
        onAddDish={handleAddDish}
        onRemoveDish={handleRemoveDish}
        selectedDishes={selectedDishes}
        onViewIngredients={handleViewIngredients}
      />
            {modalOpen && (<IngredientModal dish={modalDish} onClose={handleCloseModal} />)}
      <div>
        <strong>Total Selected: {selectedCount}</strong>
        <button>Continue</button>
      </div>

    </div>
  );
}
export default App;
