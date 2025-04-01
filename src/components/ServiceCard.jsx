// components/ServiceCard.jsx
import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ title, description, imageUrl, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-lg rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="h-56 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#40B8D3] mb-3">{title}</h3>
        <p className="text-gray-300">{description}</p>
        
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "40%" }}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
          viewport={{ once: true }}
          className="h-1 bg-orange-500 mt-4"
        />
      </div>
    </motion.div>
  );
};

export default ServiceCard;