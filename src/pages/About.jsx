
import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  { year: "1993-1994", text: "Started with a single employee, one machine, and monthly sales of ₹1,500" },
  { year: "2000s", text: "Expanded our operations with additional machinery and personnel" },
  { year: "2010s", text: "Significant growth in production capacity, sales, and workforce" },
  { year: "Present Day", text: "Operating with 28 skilled employees, 31 advanced machines, and monthly sales exceeding ₹2,200,000" },
];

const expertiseData = [
  "CNC Turning with Bar Feeder",
  "VMC Machines",
  "Milling Machines",
  "Surface & Cylindrical Grinding Machines",
  "Laser Cutting Machine",
  "CNC Bending Machine with 100-ton capacity",
];



const About = () => {
  return (
    <div className="relative min-h-screen hero-pattern">
      <div className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">
            About <span className="text-[#40B8D3]">Us</span>
          </h1>
          <p className="text-xl text-gray-300">
            Some random text about the company. Lorem ipsum dolor sit amet, consectetur
          </p>
        </motion.div>

        <div className="grid gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-[#40B8D3]">Our Mission</h2>
            <p className="text-lg text-gray-300">
              Established in 1993, Nilesh Engineering Works has grown from a small
              workshop to a reputable engineering company with state-of-the-art
              machinery and a dedicated team of professionals. For nearly three
              decades, we have been delivering precision engineering solutions to
              our valued clients across multiple industries.
            </p>
          </motion.div>

        
          <div className="relative py-16 bg-gray-900 text-white">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-center text-[#40B8D3] mb-12"
            >
              Our Journey
            </motion.h3>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#40B8D3] h-full"></div>
              <div className="space-y-12 relative z-10">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`relative flex items-center w-full ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                  >
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm relative">
                      <h4 className="text-2xl font-bold text-[#40B8D3]">{item.year}</h4>
                      <p className="mt-2 text-gray-300">{item.text}</p>
                      <div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center left-[-18px] border-4 border-gray-900">
                        <div className="w-3 h-3 bg-[#40B8D3] rounded-full"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
                      
                      



          <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-[#40B8D3] mt-16 mb-12"
      >
        Our Expertise
      </motion.h3>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        {expertiseData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-center space-x-4"
          >
            <div className="w-8 h-8 bg-[#40B8D3] rounded-full flex items-center justify-center text-white font-bold text-lg">
              {index + 1}
            </div>
            <p className="text-lg text-gray-300">{item}</p>
          </motion.div>
        ))}
      </div>  



          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-[#40B8D3]">Vision for the Future</h2>
            <p className="text-lg text-gray-300">
            As we continue to grow, we remain committed to investing in cutting-edge technology, enhancing our capabilities, and delivering exceptional value to our customers. Our focus on innovation, quality, and customer satisfaction drives us forward as we expand our presence in the engineering sector.
            </p>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
