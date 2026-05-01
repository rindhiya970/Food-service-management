import React, { useState } from 'react';
import '../styles/Restaurants.css';

/**
 * Restaurants data array
 * Contains restaurant information including name, rating, address, and cuisine
 */
const restaurantsData = [
  { id: 1, name: '.CN Chinese', rating: 5, address: '228 City Road, Cardiff CF24 3JH', cuisine: 'Chinese' },
  { id: 2, name: '@ Thai', rating: 5, address: '376 Rayleigh Road, Essex SS9 5PT', cuisine: 'Thai' },
  { id: 3, name: '@ Thai Restaurant', rating: 5, address: '30 Greyhound Road Hammersmith, London W6 8NX', cuisine: 'Thai' },
  { id: 4, name: '@ Thai Restaurant', rating: 5, address: '30 Greyhound Road Hammersmith, London W6 8NX', cuisine: 'Thai' },
  { id: 5, name: '@Indian.com', rating: 5, address: '9 Broughton Hall Road, Broughton CH4 0QR', cuisine: 'Curry' },
  { id: 6, name: '007 Takeaway', rating: 5, address: '6 Drummond Street, Rotherham S65 1HY', cuisine: 'Pizza' },
  { id: 7, name: '1 Garden Court Chinese', rating: 4.5, address: '1 Garden Court, Leeds LS11 5SP', cuisine: 'Chinese' },
  { id: 8, name: '1 Wok', rating: 5, address: 'Unit 2 30 Greenock Road, Bishopton PA7 5JN', cuisine: 'Chinese' },
  { id: 9, name: '1pizza1', rating: 4, address: '160 Leeds Road, Leeds LS26 0JH', cuisine: 'Pizza' },
  { id: 10, name: '1st Choice Pizza', rating: 4, address: '1 Walsall Road, Cannock WS11 0HG', cuisine: 'Pizza' },
  { id: 11, name: '1st Class Pizza', rating: 5, address: '388 Filton Avenue, Bristol BS7 0BE', cuisine: 'Pizza' },
  { id: 12, name: '1st Class Pizza', rating: 5, address: '388 Filton Avenue, Bristol BS7 0BE', cuisine: 'Pizza' },
  { id: 13, name: '1st Class Pizza', rating: 5, address: '70 Carter Lane, Mansfield NG18 3DH', cuisine: 'Pizza' },
  { id: 14, name: '2 Spice', rating: 4.5, address: '2 Station Road, Reading RG1 1LG', cuisine: 'Curry' },
  { id: 15, name: '2 for 1 Pizza', rating: 4, address: '1-3 College Road, Bromsgrove B60 2NE', cuisine: 'Pizza' },
  { id: 16, name: '21 Spices', rating: 4.5, address: '21 High Street, Camberley GU15 3RB', cuisine: 'Curry' },
  { id: 17, name: '3 Spice', rating: 4, address: '3 Market Place, Wokingham RG40 1AP', cuisine: 'Curry' },
  { id: 18, name: '4 Seasons Chinese', rating: 4.5, address: '4 High Street, Slough SL1 1DH', cuisine: 'Chinese' },
];

/**
 * Restaurants Page Component
 * Displays restaurant listings with search, filter, and pagination
 */
const Restaurants = () => {
  // State management for search, filter, and pagination
  const [searchTerm, setSearchTerm] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Filter restaurants based on search and rating
  const filteredRestaurants = restaurantsData.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRating = restaurant.rating >= minRating;
    return matchesSearch && matchesRating;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRestaurants = filteredRestaurants.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, minRating]);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="star">★</span>);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
    }
    return stars;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="restaurants-page">
      <div className="container">
        <div className="restaurants-header">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search restaurants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="rating-filter">
            <label>Minimum Rating:</label>
            <input
              type="number"
              min="0"
              max="5"
              step="0.5"
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
            />
          </div>
        </div>

        {currentRestaurants.length > 0 ? (
          <>
            <div className="restaurants-grid">
              {currentRestaurants.map((restaurant) => (
                <div key={restaurant.id} className="restaurant-card">
                  <div className="restaurant-header">
                    <div>
                      <h3 className="restaurant-name">{restaurant.name}</h3>
                      <div className="restaurant-stars">
                        {renderStars(restaurant.rating)}
                      </div>
                    </div>
                  </div>
                  <div className="restaurant-address">
                    <span className="location-icon">📍</span>
                    <span>{restaurant.address}</span>
                  </div>
                  <div className="restaurant-footer">
                    <div className="cuisine-type">
                      <span className="cuisine-icon">🍴</span>
                      <span>{restaurant.cuisine}</span>
                    </div>
                    <button className="visit-menu-btn">Visit Menu</button>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="pagination">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  ‹
                </button>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={currentPage === index + 1 ? 'active' : ''}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  ›
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="no-results">
            <p>No restaurants found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Restaurants;
