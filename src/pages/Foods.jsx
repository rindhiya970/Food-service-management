import React, { useState } from 'react';
import '../styles/Foods.css';

const foodsData = [
  {
    id: 1,
    name: 'Margherita Pizza',
    category: 'Italian',
    price: '$12.99',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Classic pizza with tomato sauce, mozzarella, and fresh basil'
  },
  {
    id: 2,
    name: 'Beef Burger',
    category: 'American',
    price: '$10.99',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Juicy beef patty with lettuce, tomato, and special sauce'
  },
  {
    id: 3,
    name: 'Sushi Platter',
    category: 'Japanese',
    price: '$24.99',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Assorted fresh sushi rolls with wasabi and soy sauce'
  },
  {
    id: 4,
    name: 'Pad Thai',
    category: 'Thai',
    price: '$13.99',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Stir-fried rice noodles with shrimp, peanuts, and lime'
  },
  {
    id: 5,
    name: 'Chicken Tacos',
    category: 'Mexican',
    price: '$9.99',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Soft tacos filled with grilled chicken and fresh salsa'
  },
  {
    id: 6,
    name: 'Caesar Salad',
    category: 'Salad',
    price: '$8.99',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Crisp romaine lettuce with parmesan and croutons'
  },
  {
    id: 7,
    name: 'Ramen Bowl',
    category: 'Japanese',
    price: '$14.99',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Rich broth with noodles, pork, and soft-boiled egg'
  },
  {
    id: 8,
    name: 'Pasta Carbonara',
    category: 'Italian',
    price: '$15.99',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Creamy pasta with bacon, egg, and parmesan cheese'
  },
  {
    id: 9,
    name: 'Fried Chicken',
    category: 'American',
    price: '$11.99',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Crispy golden fried chicken with special seasoning'
  },
  {
    id: 10,
    name: 'Biryani',
    category: 'Indian',
    price: '$13.99',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Aromatic rice with spiced chicken and herbs'
  },
  {
    id: 11,
    name: 'Steak',
    category: 'American',
    price: '$28.99',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Grilled ribeye steak with garlic butter'
  },
  {
    id: 12,
    name: 'Dim Sum',
    category: 'Chinese',
    price: '$16.99',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Assorted steamed dumplings with dipping sauce'
  },
  {
    id: 13,
    name: 'Falafel Wrap',
    category: 'Middle Eastern',
    price: '$9.99',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Crispy falafel with hummus and fresh vegetables'
  },
  {
    id: 14,
    name: 'Pancakes',
    category: 'Breakfast',
    price: '$7.99',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Fluffy pancakes with maple syrup and butter'
  },
  {
    id: 15,
    name: 'Lobster Roll',
    category: 'Seafood',
    price: '$22.99',
    image: 'https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Fresh lobster meat in a toasted bun'
  },
  {
    id: 16,
    name: 'Pho',
    category: 'Vietnamese',
    price: '$12.99',
    image: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Vietnamese noodle soup with beef and herbs'
  },
  {
    id: 17,
    name: 'BBQ Ribs',
    category: 'American',
    price: '$19.99',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Tender ribs with smoky BBQ sauce'
  },
  {
    id: 18,
    name: 'Chocolate Cake',
    category: 'Dessert',
    price: '$6.99',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Rich chocolate cake with ganache frosting'
  }
];

const Foods = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...new Set(foodsData.map(food => food.category))];

  const filteredFoods = foodsData.filter(food => {
    const matchesCategory = selectedCategory === 'All' || food.category === selectedCategory;
    const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         food.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="foods-page">
      <div className="container">
        <div className="foods-header">
          <h1 className="foods-title">Explore Our Menu</h1>
          <p className="foods-subtitle">Discover delicious dishes from around the world</p>
        </div>

        <div className="foods-filters">
          <div className="search-box-foods">
            <input
              type="text"
              placeholder="Search for food..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredFoods.length > 0 ? (
          <div className="foods-grid">
            {filteredFoods.map(food => (
              <div key={food.id} className="food-card">
                <div className="food-image-container">
                  <img src={food.image} alt={food.name} className="food-image" />
                  <div className="food-category-badge">{food.category}</div>
                </div>
                <div className="food-content">
                  <div className="food-header">
                    <h3 className="food-name">{food.name}</h3>
                    <span className="food-price">{food.price}</span>
                  </div>
                  <p className="food-description">{food.description}</p>
                  <button className="order-btn">Order Now</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No food items found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Foods;
