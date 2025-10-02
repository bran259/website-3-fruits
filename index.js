// import React, { useState } from 'react';
// import { ShoppingCart, Search, Star, ChevronLeft, ChevronRight, Filter, Heart } from 'lucide-react';

// const App = () => {
//   const [cartItems, setCartItems] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [favorites, setFavorites] = useState(new Set());

//   // Mock fruit data
//   const fruits = [
//     {
//       id: 1,
//       name: 'Organic Strawberries',
//       price: 4.99,
//       originalPrice: 6.99,
//       image: 'https://placehold.co/300x300/ff6b81/ffffff?text=Strawberries',
//       category: 'berries',
//       rating: 4.8,
//       reviews: 124,
//       description: 'Sweet and juicy organic strawberries, perfect for snacking or desserts.'
//     },
//     {
//       id: 2,
//       name: 'Premium Avocados',
//       price: 3.49,
//       originalPrice: 4.29,
//       image: 'https://placehold.co/300x300/4ecdc4/ffffff?text=Avocados',
//       category: 'tropical',
//       rating: 4.6,
//       reviews: 89,
//       description: 'Ripe and creamy avocados, ideal for guacamole or healthy meals.'
//     },
//     {
//       id: 3,
//       name: 'Golden Pineapple',
//       price: 2.99,
//       originalPrice: 3.99,
//       image: 'https://placehold.co/300x300/ffd93d/ffffff?text=Pineapple',
//       category: 'tropical',
//       rating: 4.7,
//       reviews: 156,
//       description: 'Sweet and tangy golden pineapple, perfect for tropical smoothies.'
//     },
//     {
//       id: 4,
//       name: 'Fresh Blueberries',
//       price: 5.49,
//       originalPrice: 7.29,
//       image: 'https://placehold.co/300x300/6a5acd/ffffff?text=Blueberries',
//       category: 'berries',
//       rating: 4.9,
//       reviews: 203,
//       description: 'Antioxidant-rich blueberries, great for breakfast or baking.'
//     },
//     {
//       id: 5,
//       name: 'Red Apples',
//       price: 1.99,
//       originalPrice: 2.49,
//       image: 'https://placehold.co/300x300/ff4757/ffffff?text=Apples',
//       category: 'citrus',
//       rating: 4.5,
//       reviews: 178,
//       description: 'Crisp and sweet red apples, perfect for snacking or cooking.'
//     },
//     {
//       id: 6,
//       name: 'Green Grapes',
//       price: 3.99,
//       originalPrice: 4.99,
//       image: 'https://placehold.co/300x300/2ed573/ffffff?text=Grapes',
//       category: 'berries',
//       rating: 4.4,
//       reviews: 92,
//       description: 'Seedless green grapes, refreshing and naturally sweet.'
//     },
//     {
//       id: 7,
//       name: 'Mango Slices',
//       price: 4.29,
//       originalPrice: 5.49,
//       image: 'https://placehold.co/300x300/ffa502/ffffff?text=Mango',
//       category: 'tropical',
//       rating: 4.8,
//       reviews: 145,
//       description: 'Ripe mango slices, perfect for tropical desserts or smoothies.'
//     },
//     {
//       id: 8,
//       name: 'Orange Segments',
//       price: 2.79,
//       originalPrice: 3.49,
//       image: 'https://placehold.co/300x300/ff9f43/ffffff?text=Oranges',
//       category: 'citrus',
//       rating: 4.6,
//       reviews: 167,
//       description: 'Fresh orange segments, packed with vitamin C and natural sweetness.'
//     }
//   ];

//   const categories = [
//     { id: 'all', name: 'All Fruits' },
//     { id: 'berries', name: 'Berries' },
//     { id: 'tropical', name: 'Tropical' },
//     { id: 'citrus', name: 'Citrus' }
//   ];

//   const filteredFruits = fruits.filter(fruit => {
//     const matchesSearch = fruit.name.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesCategory = selectedCategory === 'all' || fruit.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const toggleFavorite = (id) => {
//     const newFavorites = new Set(favorites);
//     if (newFavorites.has(id)) {
//       newFavorites.delete(id);
//     } else {
//       newFavorites.add(id);
//     }
//     setFavorites(newFavorites);
//   };

//   const addToCart = () => {
//     setCartItems(prev => prev + 1);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
//       {/* Header */}
//       <header className="bg-white shadow-lg sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center space-x-2">
//                 <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
//                   <span className="text-white font-bold text-sm">F</span>
//                 </div>
//                 <h1 className="text-2xl font-bold text-green-800">FreshFruit</h1>
//               </div>
//             </div>

//             <div className="flex-1 max-w-lg mx-8">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//                 <input
//                   type="text"
//                   placeholder="Search for fruits..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                 />
//               </div>
//             </div>

//             <div className="flex items-center space-x-6">
//               <button className="relative p-2 text-gray-600 hover:text-green-600 transition-colors">
//                 <Heart className="h-6 w-6" />
//                 {favorites.size > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                     {favorites.size}
//                   </span>
//                 )}
//               </button>
//               <button className="relative p-2 text-gray-600 hover:text-green-600 transition-colors">
//                 <ShoppingCart className="h-6 w-6" />
//                 {cartItems > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                     {cartItems}
//                   </span>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-green-400 to-emerald-500 text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl md:text-6xl font-bold mb-6">
//             Fresh Fruits Delivered to Your Door
//           </h2>
//           <p className="text-xl md:text-2xl mb-8 opacity-90">
//             Premium quality fruits, harvested at peak ripeness
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
//               Shop Now
//             </button>
//             <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Categories Filter */}
//       <section className="py-8 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between mb-6">
//             <h3 className="text-2xl font-bold text-gray-800">Shop by Category</h3>
//             <button className="flex items-center text-green-600 font-semibold">
//               <Filter className="h-4 w-4 mr-2" />
//               Filter
//             </button>
//           </div>
//           <div className="flex flex-wrap gap-4">
//             {categories.map(category => (
//               <button
//                 key={category.id}
//                 onClick={() => setSelectedCategory(category.id)}
//                 className={`px-6 py-3 rounded-full font-medium transition-colors ${
//                   selectedCategory === category.id
//                     ? 'bg-green-500 text-white'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {category.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Products Grid */}
//       <section className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {filteredFruits.map(fruit => (
//               <div key={fruit.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
//                 <div className="relative">
//                   <img
//                     src={fruit.image}
//                     alt={fruit.name}
//                     className="w-full h-48 object-cover"
//                   />
//                   <button
//                     onClick={() => toggleFavorite(fruit.id)}
//                     className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
//                   >
//                     <Heart
//                       className={`h-5 w-5 ${
//                         favorites.has(fruit.id) ? 'text-red-500 fill-current' : 'text-gray-400'
//                       }`}
//                     />
//                   </button>
//                   <div className="absolute bottom-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
//                     Save ${(fruit.originalPrice - fruit.price).toFixed(2)}
//                   </div>
//                 </div>
                
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">{fruit.name}</h3>
//                   <p className="text-gray-600 text-sm mb-4">{fruit.description}</p>
                  
//                   <div className="flex items-center mb-4">
//                     <div className="flex items-center">
//                       {[...Array(5)].map((_, i) => (
//                         <Star
//                           key={i}
//                           className={`h-4 w-4 ${
//                             i < Math.floor(fruit.rating)
//                               ? 'text-yellow-400 fill-current'
//                               : 'text-gray-300'
//                           }`}
//                         />
//                       ))}
//                     </div>
//                     <span className="text-sm text-gray-600 ml-2">
//                       {fruit.rating} ({fruit.reviews} reviews)
//                     </span>
//                   </div>
                  
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2">
//                       <span className="text-2xl font-bold text-green-600">${fruit.price}</span>
//                       <span className="text-sm text-gray-500 line-through">${fruit.originalPrice}</span>
//                     </div>
//                     <button
//                       onClick={addToCart}
//                       className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {filteredFruits.length === 0 && (
//             <div className="text-center py-12">
//               <div className="text-gray-500 text-lg">No fruits found matching your search.</div>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
//                   <span className="text-white font-bold text-sm">F</span>
//                 </div>
//                 <h3 className="text-xl font-bold">FreshFruit</h3>
//               </div>
//               <p className="text-gray-400">
//                 Premium quality fruits delivered fresh to your doorstep every day.
//               </p>
//             </div>
            
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Categories</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li><a href="#" className="hover:text-white transition-colors">Berries</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Tropical</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Citrus</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">All Fruits</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
//               <p className="text-gray-400 mb-4">Subscribe for exclusive offers and updates</p>
//               <div className="flex">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="px-4 py-2 rounded-l-lg text-gray-800 focus:outline-none w-full"
//                 />
//                 <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-r-lg transition-colors">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
//             <p>&copy; 2024 FreshFruit. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;