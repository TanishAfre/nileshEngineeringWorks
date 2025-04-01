import React from "react";
import { motion } from "framer-motion";

const FooterLink = ({ href, text }) => {
  return (
    <li>
      <motion.a 
        href={href} 
        whileHover={{ x: 5, color: "#40B8D3" }}
        transition={{ duration: 0.2 }}
        className="hover:text-[#40B8D3] transition-colors duration-200"
      >
        {text}
      </motion.a>
    </li>
  );
};

export default FooterLink;