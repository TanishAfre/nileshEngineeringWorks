
import React from "react";
import { motion } from "framer-motion";

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
            Leading the way in quality and manufacturing excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#40B8D3]">Our Mission</h2>
            <p className="text-lg text-gray-300">
              We're dedicated to helping life science companies bring life-changing
              products to more people sooner. Our software solutions accelerate
              ROI and reduce compliance risk, while helping companies expand
              their competitive advantage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img 
              className="rounded-lg shadow-xl"
              alt="Modern laboratory environment"
             src="https://images.unsplash.com/photo-1657778752500-9da406aa813f" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img 
              className="rounded-lg shadow-xl"
              alt="Quality control process"
             src="https://images.unsplash.com/photo-1621687623117-5f14cb8dbc7b" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#40B8D3]">Our Vision</h2>
            <p className="text-lg text-gray-300">
              To be the trusted partner in quality and manufacturing excellence,
              enabling organizations to deliver life-changing products with
              uncompromising quality and efficiency. We envision a future where
              digital transformation makes quality and compliance seamless.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
