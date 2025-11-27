import React, { useEffect, useState } from 'react';

const ORDER_DURATION = 1800; // 30 minutes in seconds

interface OrderTrackerProps {
  onOrderComplete: () => void;
}

const OrderTracker: React.FC<OrderTrackerProps> = ({ onOrderComplete }) => {
  const [timeLeft, setTimeLeft] = useState(ORDER_DURATION);
  const [status, setStatus] = useState('Order Received');

  useEffect(() => {
    if (timeLeft <= 0) {
      setStatus('Delivered');
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    // 30 minute milestones
    if (timeLeft > 1500) setStatus('Order Received'); // First 5 mins
    else if (timeLeft > 900) setStatus('Cooking'); // Next 10 mins
    else if (timeLeft > 300) setStatus('Quality Check'); // Next 10 mins
    else if (timeLeft > 0) setStatus('Out for Delivery'); // Last 5 mins
    else setStatus('Delivered');
  }, [timeLeft]);

  const progress = ((ORDER_DURATION - timeLeft) / ORDER_DURATION) * 100;
  
  const formatTime = (seconds: number) => {
    if (seconds <= 0) return "00:00";
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 animate-slide-in-up">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-100 ring-1 ring-black/5">
        <div className="bg-gradient-to-r from-stone-900 to-stone-800 px-8 py-6 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 animate-pulse"></div>
          <h2 className="text-2xl font-bold mb-1">Live Order Tracking</h2>
          <p className="text-orange-400 font-semibold text-sm tracking-wider uppercase">Express 30-Minute Guarantee</p>
        </div>

        <div className="p-8 sm:p-12 text-center">
          
          {/* Timer Display */}
          <div className="relative inline-flex items-center justify-center mb-10">
            {/* Background Circle */}
            <svg className="w-56 h-56 transform -rotate-90 drop-shadow-lg">
              <circle
                className="text-stone-100"
                strokeWidth="12"
                stroke="currentColor"
                fill="transparent"
                r="80"
                cx="112"
                cy="112"
              />
              {/* Progress Circle */}
              <circle
                className={`${timeLeft <= 0 ? 'text-green-500' : 'text-orange-500'} transition-all duration-1000 ease-linear`}
                strokeWidth="12"
                strokeDasharray={502} // 2 * pi * 80
                strokeDashoffset={502 - (502 * progress) / 100}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="80"
                cx="112"
                cy="112"
              />
            </svg>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
               <span className="text-5xl font-mono font-bold text-stone-900 tracking-tighter">
                 {formatTime(timeLeft)}
               </span>
               <span className="text-xs font-bold text-stone-400 uppercase tracking-widest mt-2">
                 Minutes Remaining
               </span>
            </div>
          </div>

          {/* Status Steps */}
          <div className="mb-10 bg-stone-50 rounded-2xl p-6 border border-stone-100">
            <h3 className="text-3xl font-bold text-stone-800 mb-2">
              {status}
            </h3>
            <p className="text-stone-500 font-medium">
              {timeLeft <= 0 ? 'Your order has arrived! Enjoy your meal.' : 'Sit tight! Fresh flavors are on the way.'}
            </p>
          </div>

          {timeLeft <= 0 && (
            <button
              onClick={onOrderComplete}
              className="bg-stone-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-orange-600 hover:scale-105 transition-all duration-300 shadow-xl shadow-stone-200"
            >
              Start New Order
            </button>
          )}

          {timeLeft > 0 && (
            <div className="flex items-center justify-center space-x-3 text-orange-700 bg-orange-50 py-3 px-6 rounded-xl border border-orange-100 max-w-sm mx-auto">
               <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                </div>
                <span className="font-bold text-sm">Timer Active - We are on the clock!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderTracker;