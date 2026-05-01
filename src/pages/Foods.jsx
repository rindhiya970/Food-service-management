import React, { useState } from 'react';
import '../styles/Foods.css';

/**
 * Foods data array
 * Contains food items with images, prices, categories, and descriptions
 */
const foodsData = [
  // Italian (6 items)
  { id: 1, name: 'Margherita Pizza', category: 'Italian', price: '$12.99', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Classic pizza with tomato sauce, mozzarella, and fresh basil' },
  { id: 2, name: 'Pasta Carbonara', category: 'Italian', price: '$15.99', image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Creamy pasta with bacon, egg, and parmesan cheese' },
  { id: 3, name: 'Lasagna', category: 'Italian', price: '$16.99', image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Layered pasta with meat sauce and cheese' },
  { id: 4, name: 'Risotto', category: 'Italian', price: '$14.99', image: 'https://images.unsplash.com/photo-1476124369491-c4f9c6c6c8c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Creamy Italian rice with mushrooms and parmesan' },
  { id: 5, name: 'Tiramisu', category: 'Italian', price: '$7.99', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Classic Italian dessert with coffee and mascarpone' },
  { id: 6, name: 'Bruschetta', category: 'Italian', price: '$8.99', image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Toasted bread with tomatoes, garlic, and basil' },

  // American (6 items)
  { id: 7, name: 'Beef Burger', category: 'American', price: '$10.99', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Juicy beef patty with lettuce, tomato, and special sauce' },
  { id: 8, name: 'Fried Chicken', category: 'American', price: '$11.99', image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Crispy golden fried chicken with special seasoning' },
  { id: 9, name: 'Steak', category: 'American', price: '$28.99', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Grilled ribeye steak with garlic butter' },
  { id: 10, name: 'BBQ Ribs', category: 'American', price: '$19.99', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Tender ribs with smoky BBQ sauce' },
  { id: 11, name: 'Hot Dog', category: 'American', price: '$6.99', image: 'https://images.unsplash.com/photo-1612392062798-2dbaa2c2c993?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Classic hot dog with mustard and ketchup' },
  { id: 12, name: 'Mac and Cheese', category: 'American', price: '$9.99', image: 'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Creamy macaroni with cheddar cheese' },

  // Japanese (6 items)
  { id: 13, name: 'Sushi Platter', category: 'Japanese', price: '$24.99', image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Assorted fresh sushi rolls with wasabi and soy sauce' },
  { id: 14, name: 'Ramen Bowl', category: 'Japanese', price: '$14.99', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Rich broth with noodles, pork, and soft-boiled egg' },
  { id: 15, name: 'Tempura', category: 'Japanese', price: '$13.99', image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Lightly battered and fried seafood and vegetables' },
  { id: 16, name: 'Teriyaki Chicken', category: 'Japanese', price: '$12.99', image: 'https://images.unsplash.com/photo-1580959375944-1ab5b8c78f15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Grilled chicken with sweet teriyaki glaze' },
  { id: 17, name: 'Udon Noodles', category: 'Japanese', price: '$11.99', image: 'https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Thick wheat noodles in savory broth' },
  { id: 18, name: 'Mochi Ice Cream', category: 'Japanese', price: '$6.99', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Sweet rice cake filled with ice cream' },

  // Chinese (6 items)
  { id: 19, name: 'Dim Sum', category: 'Chinese', price: '$16.99', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Assorted steamed dumplings with dipping sauce' },
  { id: 20, name: 'Kung Pao Chicken', category: 'Chinese', price: '$13.99', image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Spicy stir-fried chicken with peanuts' },
  { id: 21, name: 'Fried Rice', category: 'Chinese', price: '$10.99', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Wok-fried rice with vegetables and egg' },
  { id: 22, name: 'Spring Rolls', category: 'Chinese', price: '$8.99', image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Crispy rolls filled with vegetables' },
  { id: 23, name: 'Sweet and Sour Pork', category: 'Chinese', price: '$14.99', image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Crispy pork in tangy sweet and sour sauce' },
  { id: 24, name: 'Peking Duck', category: 'Chinese', price: '$26.99', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Roasted duck with crispy skin and pancakes' },

  // Indian (6 items)
  { id: 25, name: 'Biryani', category: 'Indian', price: '$13.99', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Aromatic rice with spiced chicken and herbs' },
  { id: 26, name: 'Butter Chicken', category: 'Indian', price: '$15.99', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Creamy tomato curry with tender chicken' },
  { id: 27, name: 'Tandoori Chicken', category: 'Indian', price: '$14.99', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Clay oven roasted chicken with spices' },
  { id: 28, name: 'Samosas', category: 'Indian', price: '$7.99', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Crispy pastry filled with spiced potatoes' },
  { id: 29, name: 'Naan Bread', category: 'Indian', price: '$3.99', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Soft flatbread baked in tandoor oven' },
  { id: 30, name: 'Palak Paneer', category: 'Indian', price: '$12.99', image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Spinach curry with cottage cheese cubes' },

  // Thai (6 items)
  { id: 31, name: 'Pad Thai', category: 'Thai', price: '$13.99', image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Stir-fried rice noodles with shrimp, peanuts, and lime' },
  { id: 32, name: 'Green Curry', category: 'Thai', price: '$14.99', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Spicy coconut curry with vegetables' },
  { id: 33, name: 'Tom Yum Soup', category: 'Thai', price: '$11.99', image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Hot and sour soup with shrimp and lemongrass' },
  { id: 34, name: 'Mango Sticky Rice', category: 'Thai', price: '$8.99', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Sweet sticky rice with fresh mango' },
  { id: 35, name: 'Papaya Salad', category: 'Thai', price: '$9.99', image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Spicy green papaya salad with peanuts' },
  { id: 36, name: 'Thai Basil Chicken', category: 'Thai', price: '$12.99', image: 'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Stir-fried chicken with holy basil' },

  // Mexican (6 items)
  { id: 37, name: 'Chicken Tacos', category: 'Mexican', price: '$9.99', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Soft tacos filled with grilled chicken and fresh salsa' },
  { id: 38, name: 'Burrito Bowl', category: 'Mexican', price: '$11.99', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Rice bowl with beans, meat, and toppings' },
  { id: 39, name: 'Quesadilla', category: 'Mexican', price: '$10.99', image: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Grilled tortilla with melted cheese' },
  { id: 40, name: 'Nachos', category: 'Mexican', price: '$8.99', image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Tortilla chips with cheese, salsa, and guacamole' },
  { id: 41, name: 'Enchiladas', category: 'Mexican', price: '$12.99', image: 'https://images.unsplash.com/photo-1599974789516-e980df494c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Rolled tortillas with meat and sauce' },
  { id: 42, name: 'Churros', category: 'Mexican', price: '$6.99', image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Fried dough pastry with cinnamon sugar' },

  // Additional categories
  { id: 43, name: 'Pancakes', category: 'Breakfast', price: '$7.99', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Fluffy pancakes with maple syrup and butter' },
  { id: 44, name: 'Lobster Roll', category: 'Seafood', price: '$22.99', image: 'https://images.unsplash.com/photo-1619895092538-128341789043?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Fresh lobster meat in a toasted bun' },
  { id: 45, name: 'Pho', category: 'Vietnamese', price: '$12.99', image: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Vietnamese noodle soup with beef and herbs' },
  { id: 46, name: 'Chocolate Cake', category: 'Dessert', price: '$6.99', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Rich chocolate cake with ganache frosting' }
];

/**
 * Foods Page Component
 * Displays food menu with images, category filtering, and search
 */
const Foods = () => {
  // State for category filter and search
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
