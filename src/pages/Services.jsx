import React, { useState } from "react";
import { motion } from "framer-motion";

const servicesData = [
  {
    title: "CNC Machining",
    description: "Precision CNC turning and milling services with high accuracy and efficiency.",
    details: "Our state-of-the-art CNC machines deliver tolerances within ±0.01mm, handling materials including aluminum, steel, titanium, and various plastics. We specialize in both prototype and production runs with quick turnaround times.",
    icon: "🔧"
  },
  {
    title: "Grinding Services",
    description: "Surface and cylindrical grinding for high-quality finishing and tight tolerances.",
    details: "Achieve superior surface finishes down to Ra 0.1μm with our precision grinding services. We offer both surface and cylindrical grinding for critical components where exact dimensions and superior finishes are essential.",
    icon: "⚙️"
  },
  {
    title: "Laser Cutting",
    description: "Advanced laser cutting solutions for various industrial applications.",
    details: "Our fiber laser cutting technology provides clean, precise cuts for sheet metal up to 25mm thick. We deliver intricate designs with minimal material waste and heat-affected zones, perfect for both prototyping and production.",
    icon: "🔆"
  },
  {
    title: "Bending & Forming",
    description: "CNC bending with a 100-ton capacity for precise metal forming needs.",
    details: "Our advanced press brakes allow for complex bends with exceptional accuracy. We handle materials from 0.5mm to 20mm thickness with precise angle control, offering both standard and custom bending solutions.",
    icon: "🔄"
  },
  {
    title: "Custom Fabrication",
    description: "Bespoke engineering solutions tailored to client specifications.",
    details: "From concept to completion, our engineering team works closely with you to develop custom solutions for your unique challenges. We combine multiple manufacturing techniques to deliver complete assemblies that exceed expectations.",
    icon: "🛠️"
  },
];

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (index) => {
    if (expandedService === index) {
      setExpandedService(null);
    } else {
      setExpandedService(index);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full opacity-10 bg-[url('/api/placeholder/1920/1080')] bg-no-repeat bg-cover bg-fixed"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-[#40B8D3] relative">
              Services
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#40B8D3] opacity-70"></span>
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive range of precision engineering services, combining advanced technology with expert craftsmanship to meet diverse industrial needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-700 hover:border-[#40B8D3] transition-all duration-300 transform hover:translate-y-[-5px]"
              whileHover={{ scale: 1.02 }}
            >
              <div 
                onClick={() => toggleService(index)}
                className="p-8 cursor-pointer"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-[#40B8D3] bg-opacity-20 text-3xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#40B8D3] mb-3">{service.title}</h3>
                <p className="text-lg text-gray-300">{service.description}</p>
                
                <div className="mt-6 flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center text-[#40B8D3] font-medium"
                  >
                    {expandedService === index ? "Show Less" : "Learn More"}
                    <svg 
                      className={`ml-2 w-5 h-5 transition-transform duration-300 ${expandedService === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </motion.button>
                </div>
              </div>
              
              {expandedService === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-8 pb-8 pt-2 border-t border-gray-700 mt-2"
                >
                  <p className="text-gray-300">{service.details}</p>
                  <div className="mt-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-[#40B8D3] text-gray-900 font-medium rounded-md shadow-lg hover:bg-opacity-90 transition-all duration-300 w-full"
                    >
                      Request Quote
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 text-center"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-3 bg-[#40B8D3] text-gray-900 font-bold rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 text-lg"
          >
            Discuss Your Project
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;