import React, { useState } from 'react';
import { AppView } from '../types';

interface NavbarProps {
  currentView: AppView;
  onChangeView: (view: AppView) => void;
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onChangeView, cartCount, onOpenCart }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (view: AppView) => {
    onChangeView(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavClick(AppView.HOME)}
          >
            <div className="h-10 w-10 bg-stone-900 rounded-lg flex items-center justify-center mr-3 shadow-md group-hover:shadow-lg transition-all duration-300 ring-2 ring-orange-100">
              {/* Coffee Cup / Bar Logo */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-orange-400">
                <path d="M12.75 4.75a.75.75 0 00-1.5 0v.566c-2.31.252-4.15 1.93-4.665 4.108a.75.75 0 001.465.32c.38-1.605 1.72-2.82 3.398-2.922v.164a.75.75 0 001.5 0v-.164c1.678.102 3.018 1.317 3.398 2.922a.75.75 0 001.465-.32c-.515-2.178-2.355-3.856-4.665-4.108V4.75z" />
                <path fillRule="evenodd" d="M10.5 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110.5 2zm3 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0113.5 2zm-6 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 017.5 2z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M2.25 9c0-1.084.381-2.536 1.053-3.666A.75.75 0 014 5.25h16a.75.75 0 01.697.084c.672 1.13 1.053 2.582 1.053 3.666v1.303a6.002 6.002 0 01-5.18 5.944 3.75 3.75 0 01-3.614 2.753H11.04a3.75 3.75 0 01-3.615-2.753A6.002 6.002 0 012.25 10.303V9zm12 6.75a4.502 4.502 0 004.282-3.084.75.75 0 00.126-.263.855.855 0 01.217.075c.23.111.375.344.375.597 0 .58-.42 1.05-1.05 1.05H17.25a.75.75 0 000 1.5h1.05a2.55 2.55 0 002.55-2.55v-.313c0-.662-.228-1.57-.653-2.353a4.503 4.503 0 00-3.322-2.155.75.75 0 00-.075.053V9c0 1.63-.87 3.065-2.175 3.88a4.48 4.48 0 00-1.25.62.75.75 0 00.4.25z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex flex-col">
               <span className="font-bold text-xl text-stone-900 tracking-tight leading-none">Flavors House</span>
               <span className="text-xs text-orange-600 font-medium tracking-wide uppercase">Coffee & Eats</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => onChangeView(AppView.HOME)}
              className={`${currentView === AppView.HOME ? 'text-orange-600 font-bold bg-orange-50 px-3 py-1 rounded-lg' : 'text-stone-600 hover:text-stone-900 font-medium px-3 py-1'} transition-all`}
            >
              Home
            </button>
            <button 
              onClick={() => onChangeView(AppView.MENU)}
              className={`${currentView === AppView.MENU ? 'text-orange-600 font-bold bg-orange-50 px-3 py-1 rounded-lg' : 'text-stone-600 hover:text-stone-900 font-medium px-3 py-1'} transition-all`}
            >
              Menu
            </button>
            <button 
              onClick={() => onChangeView(AppView.TRACKER)}
              className={`${currentView === AppView.TRACKER ? 'text-orange-600 font-bold bg-orange-50 px-3 py-1 rounded-lg' : 'text-stone-600 hover:text-stone-900 font-medium px-3 py-1'} transition-all`}
            >
              Order Status
            </button>
            <button 
              onClick={() => onChangeView(AppView.CONTACT)}
              className={`${currentView === AppView.CONTACT ? 'text-orange-600 font-bold bg-orange-50 px-3 py-1 rounded-lg' : 'text-stone-600 hover:text-stone-900 font-medium px-3 py-1'} transition-all`}
            >
              Contact Us
            </button>
          </div>

          <div className="flex items-center space-x-4">
             {/* Cart Icon */}
            <button 
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl hover:bg-stone-100 transition-colors border border-transparent hover:border-stone-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-stone-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 5c.07.286.074.58.012.868-.569 2.768-2.585 5.129-5.454 5.215-2.836.084-5.074-1.928-5.748-4.717-.06-.289-.056-.583.013-.869l1.264-5a1.875 1.875 0 011.821-1.417h5.011a1.875 1.875 0 011.82 1.417z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold leading-none text-white bg-red-500 rounded-full shadow-sm ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-stone-600 hover:text-stone-900 focus:outline-none p-2 rounded-lg hover:bg-stone-100"
              >
                {isMobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 shadow-lg absolute w-full z-50">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button
              onClick={() => handleNavClick(AppView.HOME)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors ${currentView === AppView.HOME ? 'bg-orange-50 text-orange-600' : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick(AppView.MENU)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors ${currentView === AppView.MENU ? 'bg-orange-50 text-orange-600' : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'}`}
            >
              Menu
            </button>
            <button
              onClick={() => handleNavClick(AppView.TRACKER)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors ${currentView === AppView.TRACKER ? 'bg-orange-50 text-orange-600' : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'}`}
            >
              Order Status
            </button>
            <button
              onClick={() => handleNavClick(AppView.CONTACT)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors ${currentView === AppView.CONTACT ? 'bg-orange-50 text-orange-600' : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'}`}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;