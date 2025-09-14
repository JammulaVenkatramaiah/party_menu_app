// src/data/mockDishes.js
export const dishes = [
    {
        id: 1,
        name: "Kadhai Paneer",
        description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Kadhai+Paneer",
        mealType: "MAIN COURSE",
        type: "VEG",
        ingredients: [
            { name: "Paneer", quantity: "200g" },
            { name: "Onion", quantity: "2 large" },
            { name: "Capsicum", quantity: "1 large" },
            { name: "Tomato Puree", quantity: "1 cup" }
        ]
    },
    {
        id: 2,
        name: "Butter Chicken",
        description: "Tender chicken pieces cooked in creamy tomato gravy.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Butter+Chicken",
        mealType: "MAIN COURSE",
        type: "NON-VEG",
        ingredients: [
            { name: "Chicken", quantity: "250g" },
            { name: "Butter", quantity: "2 tbsp" },
            { name: "Tomato Puree", quantity: "1 cup" },
            { name: "Cream", quantity: "1/4 cup" }
        ]
    },
    {
        id: 3,
        name: "Veg Biryani",
        description: "Aromatic rice cooked with mixed vegetables and spices.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Veg+Biryani",
        mealType: "MAIN COURSE",
        type: "VEG",
        ingredients: [
            { name: "Basmati Rice", quantity: "1 cup" },
            { name: "Mixed Vegetables", quantity: "1 cup" },
            { name: "Saffron", quantity: "a pinch" },
            { name: "Spices", quantity: "to taste" }
        ]
    },
    {
        id: 4,
        name: "Chicken 65",
        description: "Spicy deep-fried chicken bites.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Chicken+65",
        mealType: "STARTER",
        type: "NON-VEG",
        ingredients: [
            { name: "Chicken", quantity: "200g" },
            { name: "Chili Powder", quantity: "1 tsp" },
            { name: "Ginger Garlic Paste", quantity: "1 tbsp" },
            { name: "Curry Leaves", quantity: "few" }
        ]
    },
    {
        id: 5,
        name: "Paneer Tikka",
        description: "Grilled paneer cubes marinated in spiced yogurt.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Paneer+Tikka",
        mealType: "STARTER",
        type: "VEG",
        ingredients: [
            { name: "Paneer", quantity: "200g" },
            { name: "Yogurt", quantity: "1/2 cup" },
            { name: "Spices", quantity: "to taste" },
            { name: "Bell Pepper", quantity: "1" }
        ]
    },
    {
        id: 6,
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with gooey center.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Lava+Cake",
        mealType: "DESSERT",
        type: "VEG",
        ingredients: [
            { name: "Chocolate", quantity: "100g" },
            { name: "Butter", quantity: "50g" },
            { name: "Flour", quantity: "1/2 cup" },
            { name: "Eggs", quantity: "2" }
        ]
    }
];
dishes.push(
    // Starters
    {
        id: 7,
        name: "Hara Bhara Kabab",
        description: "Spinach and peas patties, shallow fried.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Hara+Bhara+Kabab",
        mealType: "STARTER",
        type: "VEG",
        ingredients: [
            { name: "Spinach", quantity: "1 cup" },
            { name: "Green Peas", quantity: "1/2 cup" },
            { name: "Potato", quantity: "1" },
            { name: "Spices", quantity: "to taste" }
        ]
    },
    {
        id: 8,
        name: "Chicken Tikka",
        description: "Marinated chicken pieces grilled to perfection.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Chicken+Tikka",
        mealType: "STARTER",
        type: "NON-VEG",
        ingredients: [
            { name: "Chicken", quantity: "200g" },
            { name: "Yogurt", quantity: "1/2 cup" },
            { name: "Spices", quantity: "to taste" }
        ]
    },
    {
        id: 9,
        name: "Spring Rolls",
        description: "Crispy rolls stuffed with mixed veggies.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Spring+Rolls",
        mealType: "STARTER",
        type: "VEG",
        ingredients: [
            { name: "Spring Roll Sheets", quantity: "6" },
            { name: "Mixed Vegetables", quantity: "1 cup" },
            { name: "Soy Sauce", quantity: "1 tbsp" }
        ]
    },
    {
        id: 10,
        name: "Fish Fingers",
        description: "Crispy fried fish sticks.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Fish+Fingers",
        mealType: "STARTER",
        type: "NON-VEG",
        ingredients: [
            { name: "Fish Fillet", quantity: "200g" },
            { name: "Breadcrumbs", quantity: "1 cup" },
            { name: "Egg", quantity: "1" }
        ]
    },
    {
        id: 11,
        name: "Corn Cheese Balls",
        description: "Golden fried balls of corn and cheese.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Corn+Cheese+Balls",
        mealType: "STARTER",
        type: "VEG",
        ingredients: [
            { name: "Corn", quantity: "1/2 cup" },
            { name: "Cheese", quantity: "1/2 cup" },
            { name: "Potato", quantity: "1" }
        ]
    },
    {
        id: 12,
        name: "Prawn Tempura",
        description: "Crispy battered prawns.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Prawn+Tempura",
        mealType: "STARTER",
        type: "NON-VEG",
        ingredients: [
            { name: "Prawns", quantity: "200g" },
            { name: "Tempura Batter", quantity: "1 cup" }
        ]
    },
    {
        id: 13,
        name: "Stuffed Mushrooms",
        description: "Mushrooms filled with cheese and herbs.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Stuffed+Mushrooms",
        mealType: "STARTER",
        type: "VEG",
        ingredients: [
            { name: "Mushrooms", quantity: "10" },
            { name: "Cheese", quantity: "1/2 cup" },
            { name: "Herbs", quantity: "to taste" }
        ]
    },
    {
        id: 14,
        name: "Egg Devil",
        description: "Spicy stuffed eggs, deep fried.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Egg+Devil",
        mealType: "STARTER",
        type: "NON-VEG",
        ingredients: [
            { name: "Eggs", quantity: "4" },
            { name: "Potato", quantity: "2" },
            { name: "Spices", quantity: "to taste" }
        ]
    },
    {
        id: 15,
        name: "Paneer Pakora",
        description: "Paneer cubes dipped in gram flour batter and fried.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Paneer+Pakora",
        mealType: "STARTER",
        type: "VEG",
        ingredients: [
            { name: "Paneer", quantity: "200g" },
            { name: "Gram Flour", quantity: "1 cup" },
            { name: "Spices", quantity: "to taste" }
        ]
    },
    {
        id: 16,
        name: "Chicken Lollipop",
        description: "Spicy fried chicken drumettes.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Chicken+Lollipop",
        mealType: "STARTER",
        type: "NON-VEG",
        ingredients: [
            { name: "Chicken Drumettes", quantity: "6" },
            { name: "Spices", quantity: "to taste" }
        ]
    },

    // Main Course
    {
        id: 17,
        name: "Dal Makhani",
        description: "Rich and creamy black lentils.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Dal+Makhani",
        mealType: "MAIN COURSE",
        type: "VEG",
        ingredients: [
            { name: "Black Lentils", quantity: "1 cup" },
            { name: "Butter", quantity: "2 tbsp" },
            { name: "Cream", quantity: "1/4 cup" }
        ]
    },
    {
        id: 18,
        name: "Mutton Rogan Josh",
        description: "Aromatic mutton curry from Kashmir.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Mutton+Rogan+Josh",
        mealType: "MAIN COURSE",
        type: "NON-VEG",
        ingredients: [
            { name: "Mutton", quantity: "250g" },
            { name: "Yogurt", quantity: "1/2 cup" },
            { name: "Spices", quantity: "to taste" }
        ]
    },
    {
        id: 19,
        name: "Palak Paneer",
        description: "Paneer cubes in creamy spinach gravy.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Palak+Paneer",
        mealType: "MAIN COURSE",
        type: "VEG",
        ingredients: [
            { name: "Spinach", quantity: "2 cups" },
            { name: "Paneer", quantity: "200g" }
        ]
    },
    {
        id: 20,
        name: "Fish Curry",
        description: "Spicy fish curry with coconut milk.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Fish+Curry",
        mealType: "MAIN COURSE",
        type: "NON-VEG",
        ingredients: [
            { name: "Fish", quantity: "250g" },
            { name: "Coconut Milk", quantity: "1 cup" },
            { name: "Spices", quantity: "to taste" }
        ]
    },
    {
        id: 21,
        name: "Chole Bhature",
        description: "Spicy chickpeas served with fried bread.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Chole+Bhature",
        mealType: "MAIN COURSE",
        type: "VEG",
        ingredients: [
            { name: "Chickpeas", quantity: "1 cup" },
            { name: "Flour", quantity: "2 cups" }
        ]
    },
    {
        id: 22,
        name: "Egg Curry",
        description: "Boiled eggs in spicy tomato gravy.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Egg+Curry",
        mealType: "MAIN COURSE",
        type: "NON-VEG",
        ingredients: [
            { name: "Eggs", quantity: "4" },
            { name: "Tomato Puree", quantity: "1 cup" }
        ]
    },
    {
        id: 23,
        name: "Aloo Gobi",
        description: "Potato and cauliflower cooked with spices.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Aloo+Gobi",
        mealType: "MAIN COURSE",
        type: "VEG",
        ingredients: [
            { name: "Potato", quantity: "2" },
            { name: "Cauliflower", quantity: "1" }
        ]
    },
    {
        id: 24,
        name: "Prawn Masala",
        description: "Prawns cooked in spicy masala gravy.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Prawn+Masala",
        mealType: "MAIN COURSE",
        type: "NON-VEG",
        ingredients: [
            { name: "Prawns", quantity: "200g" },
            { name: "Spices", quantity: "to taste" }
        ]
    },
    {
        id: 25,
        name: "Rajma Masala",
        description: "Red kidney beans in spicy tomato gravy.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Rajma+Masala",
        mealType: "MAIN COURSE",
        type: "VEG",
        ingredients: [
            { name: "Rajma", quantity: "1 cup" },
            { name: "Tomato Puree", quantity: "1 cup" }
        ]
    },
    {
        id: 26,
        name: "Chicken Curry",
        description: "Classic Indian chicken curry.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Chicken+Curry",
        mealType: "MAIN COURSE",
        type: "NON-VEG",
        ingredients: [
            { name: "Chicken", quantity: "250g" },
            { name: "Spices", quantity: "to taste" }
        ]
    },

    // Dessert
    {
        id: 27,
        name: "Gulab Jamun",
        description: "Soft milk balls soaked in sugar syrup.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Gulab+Jamun",
        mealType: "DESSERT",
        type: "VEG",
        ingredients: [
            { name: "Khoya", quantity: "1 cup" },
            { name: "Sugar Syrup", quantity: "2 cups" }
        ]
    },
    {
        id: 28,
        name: "Rasmalai",
        description: "Soft cheese balls in sweetened milk.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Rasmalai",
        mealType: "DESSERT",
        type: "VEG",
        ingredients: [
            { name: "Paneer", quantity: "1 cup" },
            { name: "Milk", quantity: "2 cups" }
        ]
    },
    {
        id: 29,
        name: "Fruit Custard",
        description: "Mixed fruits in creamy custard.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Fruit+Custard",
        mealType: "DESSERT",
        type: "VEG",
        ingredients: [
            { name: "Mixed Fruits", quantity: "1 cup" },
            { name: "Custard", quantity: "1 cup" }
        ]
    },
    {
        id: 30,
        name: "Ice Cream Sundae",
        description: "Ice cream topped with nuts and chocolate.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Ice+Cream+Sundae",
        mealType: "DESSERT",
        type: "VEG",
        ingredients: [
            { name: "Ice Cream", quantity: "2 scoops" },
            { name: "Chocolate Syrup", quantity: "2 tbsp" }
        ]
    },
    {
        id: 31,
        name: "Kheer",
        description: "Rice pudding flavored with cardamom.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Kheer",
        mealType: "DESSERT",
        type: "VEG",
        ingredients: [
            { name: "Rice", quantity: "1/2 cup" },
            { name: "Milk", quantity: "2 cups" }
        ]
    },
    {
        id: 32,
        name: "Brownie",
        description: "Rich chocolate brownie.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Brownie",
        mealType: "DESSERT",
        type: "VEG",
        ingredients: [
            { name: "Chocolate", quantity: "100g" },
            { name: "Flour", quantity: "1/2 cup" }
        ]
    },
    {
        id: 33,
        name: "Apple Pie",
        description: "Classic apple pie with cinnamon.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Apple+Pie",
        mealType: "DESSERT",
        type: "VEG",
        ingredients: [
            { name: "Apple", quantity: "2" },
            { name: "Pie Crust", quantity: "1" }
        ]
    },
    {
        id: 34,
        name: "Mango Mousse",
        description: "Light and airy mango dessert.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Mango+Mousse",
        mealType: "DESSERT",
        type: "VEG",
        ingredients: [
            { name: "Mango", quantity: "1 cup" },
            { name: "Cream", quantity: "1/2 cup" }
        ]
    },
    {
        id: 35,
        name: "Carrot Halwa",
        description: "Sweet carrot pudding.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Carrot+Halwa",
        mealType: "DESSERT",
        type: "VEG",
        ingredients: [
            { name: "Carrot", quantity: "1 cup" },
            { name: "Milk", quantity: "1 cup" }
        ]
    },
    {
        id: 36,
        name: "Cheesecake",
        description: "Creamy baked cheesecake.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Cheesecake",
        mealType: "DESSERT",
        type: "VEG",
        ingredients: [
            { name: "Cream Cheese", quantity: "1 cup" },
            { name: "Sugar", quantity: "1/2 cup" }
        ]
    },

    // Sides
    {
        id: 37,
        name: "Jeera Rice",
        description: "Basmati rice flavored with cumin.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Jeera+Rice",
        mealType: "SIDES",
        type: "VEG",
        ingredients: [
            { name: "Basmati Rice", quantity: "1 cup" },
            { name: "Cumin Seeds", quantity: "1 tsp" }
        ]
    },
    {
        id: 38,
        name: "Naan",
        description: "Soft leavened Indian bread.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Naan",
        mealType: "SIDES",
        type: "VEG",
        ingredients: [
            { name: "Flour", quantity: "2 cups" },
            { name: "Yeast", quantity: "1 tsp" }
        ]
    },
    {
        id: 39,
        name: "Raita",
        description: "Yogurt dip with cucumber and spices.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Raita",
        mealType: "SIDES",
        type: "VEG",
        ingredients: [
            { name: "Yogurt", quantity: "1 cup" },
            { name: "Cucumber", quantity: "1" }
        ]
    },
    {
        id: 40,
        name: "Papad",
        description: "Crispy lentil wafers.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Papad",
        mealType: "SIDES",
        type: "VEG",
        ingredients: [
            { name: "Papad", quantity: "4" }
        ]
    },
    {
        id: 41,
        name: "French Fries",
        description: "Crispy potato fries.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=French+Fries",
        mealType: "SIDES",
        type: "VEG",
        ingredients: [
            { name: "Potato", quantity: "2" },
            { name: "Oil", quantity: "for frying" }
        ]
    },
    {
        id: 42,
        name: "Garlic Bread",
        description: "Toasted bread with garlic butter.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Garlic+Bread",
        mealType: "SIDES",
        type: "VEG",
        ingredients: [
            { name: "Bread", quantity: "4 slices" },
            { name: "Garlic", quantity: "2 cloves" }
        ]
    },
    {
        id: 43,
        name: "Masala Peanuts",
        description: "Spicy roasted peanuts.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Masala+Peanuts",
        mealType: "SIDES",
        type: "VEG",
        ingredients: [
            { name: "Peanuts", quantity: "1 cup" },
            { name: "Spices", quantity: "to taste" }
        ]
    },
    {
        id: 44,
        name: "Coleslaw",
        description: "Creamy cabbage salad.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Coleslaw",
        mealType: "SIDES",
        type: "VEG",
        ingredients: [
            { name: "Cabbage", quantity: "1 cup" },
            { name: "Mayonnaise", quantity: "2 tbsp" }
        ]
    },
    {
        id: 45,
        name: "Pickle",
        description: "Spicy Indian pickle.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Pickle",
        mealType: "SIDES",
        type: "VEG",
        ingredients: [
            { name: "Mixed Vegetables", quantity: "1 cup" },
            { name: "Spices", quantity: "to taste" }
        ]
    },
    {
        id: 46,
        name: "Green Salad",
        description: "Fresh salad with cucumber, tomato, and onion.",
        image: "https://placehold.co/300x200/F7D0B3/422402?text=Green+Salad",
        mealType: "SIDES",
        type: "VEG",
        ingredients: [
            { name: "Cucumber", quantity: "1" },
            { name: "Tomato", quantity: "1" },
            { name: "Onion", quantity: "1" }
        ]
    }
);

// Update mealType for existing dishes to match the four types
dishes.forEach(dish => {
    if (["APPETIZER", "STARTER"].includes(dish.mealType)) {
        dish.mealType = "STARTER";
    } else if (dish.mealType === "MAIN COURSE") {
        dish.mealType = "MAIN COURSE";
    } else if (dish.mealType === "DESSERT") {
        dish.mealType = "DESSERT";
    } else if (["SIDES", "SIDE"].includes(dish.mealType)) {
        dish.mealType = "SIDES";
    }
});
export default dishes;