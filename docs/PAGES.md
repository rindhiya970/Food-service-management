# Pages Documentation

## Home Page

**Route:** `/`

**Components Used:**
- Hero - Main banner with call-to-action
- ContentSection - Feature highlights
- CardSection - Customer testimonials

**Purpose:** Main landing page that introduces visitors to GeekFoods

## Quote Page

**Route:** `/quote`

**Features:**
- Display food-related inspirational quotes
- Card-based layout for easy reading
- Author attribution for each quote
- Responsive grid design

**Data:** 12 inspirational quotes about food and cooking

## Restaurants Page

**Route:** `/restaurants`

**Features:**
- Search functionality to find restaurants by name
- Rating filter to show restaurants above minimum rating
- Pagination system (9 restaurants per page)
- Restaurant cards with detailed information

**Data:** 18 restaurant listings with ratings and addresses

**State:**
- searchTerm - User input for restaurant search
- minRating - Minimum rating filter value
- currentPage - Current pagination page number

## Foods Page

**Route:** `/foods`

**Features:**
- Image gallery
- Category filtering
- Search functionality
- Food cards with prices

**Data:** 18 food items

**State:**
- selectedCategory
- searchTerm

## Contact Page

**Route:** `/contact`

**Features:**
- Contact form
- Information cards
- Google Maps integration
- Form validation

**State:**
- formData (name, email, phone, subject, message)
