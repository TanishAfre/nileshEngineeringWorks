
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import CompanyLogo from "../../public/assets/Logo.jpg";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-[#002834]/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3"> {/* Added flex items-center to ensure horizontal alignment */}
            <img 
              src={CompanyLogo} 
              alt="Nilesh Engineering Works Logo" 
              className="h-10 w-auto" // Made slightly larger
            />
            <span className="text-2xl font-bold text-[#40B8D3]">
              Nilesh Engineering Works
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-[#40B8D3] transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-[#40B8D3] transition-colors">
              About Us
            </Link>
            <a href="/services" className="text-white hover:text-[#40B8D3] transition-colors">
              Services
            </a>
            <a href="#contact" className="text-white hover:text-[#40B8D3] transition-colors">
              Contact
            </a>
            <Button className="bg-[#40B8D3] hover:bg-[#40B8D3]/80">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
