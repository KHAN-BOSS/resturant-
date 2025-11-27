import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Coffee' | 'Main' | 'Dessert'>('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl mb-4">Our Menu</h2>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          From robust roasts to hearty feasts, explore our curated selection of flavors.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center space-x-2 mb-10 overflow-x-auto pb-2">
        {['All', 'Main', 'Coffee', 'Dessert'].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category as any)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === category
                ? 'bg-orange-600 text-white shadow-lg shadow-orange-200'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-stone-100 flex flex-col">
            <div className="relative h-48 w-full overflow-hidden group">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                 <span className="text-white text-sm font-medium">{item.calories} Calories</span>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-stone-900">{item.name}</h3>
                <span className="text-orange-600 font-bold bg-orange-50 px-2 py-1 rounded-md">${item.price.toFixed(2)}</span>
              </div>
              <p className="text-stone-600 text-sm mb-6 flex-1">{item.description}</p>
              
              <button 
                onClick={() => onAddToCart(item)}
                className="w-full bg-stone-900 hover:bg-orange-600 text-white font-medium py-3 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add to Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
