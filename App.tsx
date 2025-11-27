import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import CartSidebar from './components/CartSidebar';
import Hero from './components/Hero';
import OrderTracker from './components/OrderTracker';
import ChatBot from './components/ChatBot';
import Contact from './components/Contact';
import { MenuItem, CartItem, AppView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCurrentView(AppView.TRACKER);
    setCart([]); // Clear cart simulated
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        currentView={currentView}
        onChangeView={setCurrentView}
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-grow">
        {currentView === AppView.HOME && (
          <>
            <Hero onOrderNow={() => setCurrentView(AppView.MENU)} />
            <Menu onAddToCart={handleAddToCart} />
          </>
        )}

        {currentView === AppView.MENU && (
          <Menu onAddToCart={handleAddToCart} />
        )}

        {currentView === AppView.TRACKER && (
          <OrderTracker onOrderComplete={() => setCurrentView(AppView.MENU)} />
        )}

        {currentView === AppView.CONTACT && (
          <Contact />
        )}
      </main>

      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemove={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onCheckout={handleCheckout}
      />

      <ChatBot />
      
      <footer className="bg-stone-900 text-stone-400 py-12">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <p>&copy; 2024 Flavors House. All rights reserved.</p>
         </div>
      </footer>
    </div>
  );
};

export default App;