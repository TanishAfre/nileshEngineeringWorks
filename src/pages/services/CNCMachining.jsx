import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CNCMachining = () => {
  return (
    <div className="relative min-h-screen hero-pattern">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-[#40B8D3]">CNC Machining</span> Services
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Precision CNC turning and milling services for complex components with tight tolerances across various materials including steel, aluminum, titanium, and plastics.
          </p>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-16"
        >
          <img 
            className="rounded-lg shadow-2xl w-full max-h-[500px] object-cover"
            src="/assets/cnc-machining.jpeg" 
            alt="CNC Machining" 
          />
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="bg-white/5 backdrop-blur-lg py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-[#40B8D3] mb-12"
          >
            Our CNC Machining Capabilities
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
            >
              <div className="w-12 h-12 bg-[#40B8D3]/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#40B8D3]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Precision Turning</h3>
              <p className="text-gray-300">High-precision CNC turning with tolerances down to ±0.005mm for cylindrical components.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
            >
              <div className="w-12 h-12 bg-[#40B8D3]/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#40B8D3]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Multi-Axis Milling</h3>
              <p className="text-gray-300">5-axis CNC milling capabilities for complex geometries and intricate parts with superior surface finish.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
            >
              <div className="w-12 h-12 bg-[#40B8D3]/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#40B8D3]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Material Expertise</h3>
              <p className="text-gray-300">Experience with aluminum, titanium, stainless steel, brass, copper, plastics, and exotic alloys.</p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
            >
              <div className="w-12 h-12 bg-[#40B8D3]/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#40B8D3]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,3.5L6,7.75V11H18V7.75L12,3.5M12,5.75L14.5,7.5H9.5L12,5.75M21,16V14.75L18,16.25V14H16V21H18V17.75L21,16.25V18L24,16.5L21,16M3,16L6,17.25V14H8V21H6V17.5L3,18.25V20L0,18.5L3,16M14,21V19H10V21H14Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Prototyping & Production</h3>
              <p className="text-gray-300">Services ranging from rapid prototyping to high-volume production with consistent quality.</p>
            </motion.div>

            {/* Feature 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
            >
              <div className="w-12 h-12 bg-[#40B8D3]/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#40B8D3]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7,2H17A2,2 0 0,1 19,4V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V4A2,2 0 0,1 7,2M7,4V20H17V4H7M16,11H8V9H16V11M16,15H8V13H16V15M16,7H8V5H16V7Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quality Assurance</h3>
              <p className="text-gray-300">Comprehensive inspection with CMM machines ensuring parts meet exact specifications and tolerances.</p>
            </motion.div>

            {/* Feature 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
            >
              <div className="w-12 h-12 bg-[#40B8D3]/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#40B8D3]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 0H8C6.9 0 6 .9 6 2V18C6 19.1 6.9 20 8 20H16C17.1 20 18 19.1 18 18V2C18 .9 17.1 0 16 0M16 18H8V2H16V18M4 4V22C4 23.1 4.9 24 6 24H18C19.1 24 20 23.1 20 22V20H18V22H6V4H4Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">CAD/CAM Integration</h3>
              <p className="text-gray-300">Advanced software tools for seamless transition from design to manufacturing with minimal setup time.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-[#40B8D3] mb-12"
        >
          Industries We Serve
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {["Automotive", "Aerospace", "Medical", "Electronics", "Defense", "Industrial", "Oil & Gas", "Robotics"].map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-lg p-6 text-center"
            >
              <h3 className="text-xl font-bold text-white">{industry}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-6"
            >
              Need Precision Machined Parts?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-200 mb-10"
            >
              Contact our CNC machining experts today to discuss your project requirements and get a customized quote.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3 w-full sm:w-auto">
                Request a Quote
              </Button>
              
              <Button variant="outline" className="bg-blue-800 border-white text-white hover:bg-white hover:text-blue-600 transition-colors duration-300 text-lg px-8 py-3 w-full sm:w-auto">
                View Our Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CNCMachining;