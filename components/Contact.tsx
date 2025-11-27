import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', number: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', number: '', email: '', message: '' });
  };

  const contactLinks = {
    whatsapp: "https://wa.me/15550123456", 
    phone: "tel:+15550123456",
    email: "mailto:hello@flavorshouse.com"
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-slide-in-up">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl mb-4">Get in Touch</h2>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">We'd love to hear from you. Send us a message below or contact us directly on your favorite platform.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100">
          <h3 className="text-xl font-bold mb-6 text-stone-900 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Send a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Name</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                placeholder="Your Name"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
              <input 
                type="tel" 
                required
                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                placeholder="+1 (555) 000-0000"
                value={formData.number}
                onChange={e => setFormData({...formData, number: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
              <input 
                type="email" 
                required
                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                placeholder="your@email.com"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
              <textarea 
                className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-orange-500 outline-none h-32 resize-none transition-all"
                placeholder="How can we help?"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-stone-900 text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-stone-200">
              Submit Request
            </button>
          </form>
        </div>

        {/* Direct Links */}
        <div className="flex flex-col justify-between space-y-6">
           <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-stone-900">Direct Contact</h3>
              <p className="text-stone-600 mb-8">Need a quicker response? Click below to reach us instantly via your favorite app.</p>
              
              <div className="space-y-4">
                <a 
                  href={contactLinks.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-full bg-[#25D366] text-white font-bold py-4 rounded-xl hover:opacity-90 hover:shadow-lg transition-all"
                >
                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.001.574 1.901.835 3.013.835 3.19 0 5.775-2.586 5.775-5.766 0-1.545-.601-2.997-1.692-4.088a5.725 5.725 0 00-4.09-1.69h-.2zm0-2.172c4.359 0 7.949 3.59 7.949 7.938 0 2.12-.824 4.113-2.321 5.608-1.498 1.496-3.486 2.32-5.607 2.32a7.886 7.886 0 01-3.67-.902l-4.117 1.08 1.1-4.01a7.928 7.928 0 01-1.353-4.103c0-4.357 3.59-7.938 7.949-7.938h.07z"/>
                   </svg>
                   Chat on WhatsApp
                </a>
                
                <a 
                  href={contactLinks.phone} 
                  className="flex items-center justify-center w-full bg-white text-stone-900 border-2 border-stone-200 font-bold py-4 rounded-xl hover:border-orange-500 hover:text-orange-600 transition-all hover:shadow-md"
                >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mr-3">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                   </svg>
                   Call Us
                </a>

                <a 
                  href={contactLinks.email} 
                  className="flex items-center justify-center w-full bg-white text-stone-900 border-2 border-stone-200 font-bold py-4 rounded-xl hover:border-orange-500 hover:text-orange-600 transition-all hover:shadow-md"
                >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mr-3">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                   </svg>
                   Send Email
                </a>
              </div>
           </div>
           
           {/* Info Card */}
           <div className="bg-stone-900 p-8 rounded-3xl text-white shadow-xl">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-400">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Visit Us
              </h3>
              <p className="text-stone-300 leading-relaxed">
                123 Culinary Avenue,<br/>
                Flavor District, NY 10012
              </p>
              <div className="mt-4 pt-4 border-t border-stone-700">
                <p className="text-sm text-stone-400">Open Daily: 8:00 AM - 10:00 PM</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;