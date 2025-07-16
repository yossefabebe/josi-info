import React from 'react';
import { Monitor, Wrench, Globe, Sparkles, Star, Zap } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-xl mb-6 animate-pulse-slow">
            <Wrench className="w-8 h-8 text-white mr-2" />
            <Sparkles className="w-8 h-8 text-white" />
            <Globe className="w-8 h-8 text-white ml-2" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Professional Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions and technical services designed to meet your business needs
          </p>
        </div>

        {/* Featured Advertisement */}
        <div className="mb-16 flex justify-center">
          <div className="relative group">
            {/* Animated Border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-75 group-hover:opacity-100 animate-pulse blur-lg transition-all duration-500"></div>
            
            {/* Featured Badge */}
            <div className="absolute -top-6 -right-6 z-20">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full shadow-lg animate-bounce-slow">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4" />
                  <span className="text-sm font-bold">Featured</span>
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Main Advertisement Container */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform group-hover:scale-105 transition-all duration-500 max-w-4xl">
              {/* Glowing Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
              
              {/* Advertisement Image */}
              <div className="relative p-4">
                <img 
                  src="/photo_2025-07-10_11-11-12.jpg" 
                  alt="Office Machine & Computer Maintenance Services"
                  className="w-full h-auto rounded-xl shadow-lg transform group-hover:scale-102 transition-transform duration-700"
                />
                
                {/* Floating Animation Elements */}
                <div className="absolute top-8 left-8 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute top-16 right-12 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-12 left-16 w-5 h-5 bg-pink-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '2s' }}></div>
              </div>

              {/* Animated Overlay Text */}
              <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-sm rounded-lg p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-bold text-lg mb-2 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                  Professional Maintenance Services
                </h3>
                <p className="text-gray-200 text-sm">
                  Expert computer, photocopier, printer, and scanner maintenance services
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Office Machine Maintenance */}
          <div className="group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
            <div className="relative bg-white rounded-2xl shadow-xl p-8 transform group-hover:-translate-y-2 transition-all duration-500 border border-gray-100">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                Office Machine Maintenance
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Professional maintenance and repair services for computers, photocopiers, printers, and scanners. 
                Ensuring optimal performance and longevity of your office equipment.
              </p>

              <div className="flex flex-wrap gap-2">
                {['Computer Repair', 'Photocopier Service', 'Printer Maintenance', 'Scanner Support'].map((service, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm font-medium rounded-full transform hover:scale-105 transition-transform duration-200"
                  >
                    {service}
                  </span>
                ))}
              </div>

              {/* Animated Corner Decoration */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>

          {/* Website Design Service */}
          <div className="group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
            <div className="relative bg-white rounded-2xl shadow-xl p-8 transform group-hover:-translate-y-2 transition-all duration-500 border border-gray-100">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                Website Design Service
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Professional website design and development services to establish your digital presence. 
                Modern, responsive, and user-friendly websites tailored to your business needs.
              </p>

              <div className="flex flex-wrap gap-2">
                {['Web Design', 'Responsive Layout', 'Modern UI/UX', 'Professional Sites'].map((service, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-medium rounded-full transform hover:scale-105 transition-transform duration-200"
                  >
                    {service}
                  </span>
                ))}
              </div>

              {/* Animated Corner Decoration */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;