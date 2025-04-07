import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import StatCounter from "../components/StatCounter";
import ServiceCard from "../components/ServiceCard";
import useScrollAnimation from "../hooks/useScrollAnimation"; // Import the custom hook
import CompanyLogo from "../../public/assets/cnc-machining.jpeg";
import LaserCutting from "../../public/assets/laser-cutting.jpg";
import MillingGrinding from "../../public/assets/MillingGrinding.png";
import QualityControl from "../../public/assets/QualityControl.jpg";
import SocialIcon from "../components/footer/SocialIcon";
import FooterLink from "../components/footer/FooterLink";
import ContactItem from "../components/footer/ContactItem";
import { LocationIcon, PhoneIcon, EmailIcon } from "../components/footer/Icons";





const Home = () => {
  // Use the custom hook for animations
  const aboutAnimation = useScrollAnimation(0.2, true);
  const timelineAnimation = useScrollAnimation(0.1, true);

  return (
    <div className="relative min-h-screen hero-pattern">

      {/* -------------------------------------------------------------------------------------- */}
      {/* ------------Precise Engineering Solutions for Modern Manufacturing---------------------*/}
      {/* -------------------------------------------------------------------------------------- */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 mt-20">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h1 className="text-5xl lg:text-5xl font-bold mb-6 w-full max-w-4xl">
              <span className="text-[#40B8D3]">Precise</span> Engineering Solutions 
              <br />for Modern Manufacturing
            </h1>
            <p className="text-lg text-gray-300 mb-8">
            Nilesh Engineering Works delivers industry-leading CNC machining, laser cutting, and quality control services with over 35 years of expertise
            </p>
            <div className="flex gap-4">
              <Button className="bg-[#40B8D3] hover:bg-[#40B8D3]/80 text-lg px-8">
                Watch the video
              </Button>
              <Button variant="outline" className="text-lg px-8 border-[#40B8D3] text-[#40B8D3] hover:bg-[#40B8D3]/10">
                Learn More
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img 
                className="rounded-lg shadow-2xl"
                alt="Professional working with tablet"
               src="https://images.unsplash.com/photo-1602052577122-f73b9710adba" />
            </div>
          </motion.div>
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------- */}

      {/* -------------------------------------------------------------------------------------- */}
      {/* -------------------------- About Nilesh Engineering Works ----------------------------*/}
      {/* -------------------------------------------------------------------------------------- */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          ref={aboutAnimation.ref}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate={aboutAnimation.controls}
          className="mb-16"
        >
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="text-4xl font-bold text-center text-[#40B8D3] mb-4"
          >
            About Nilesh Engineering Works
          </motion.h2>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8 } }
            }}
            className="flex justify-center mb-12"
          >
            <div className="w-24 h-1 bg-orange-500"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="text-lg"
              >
                Founded in 1985, Nilesh Engineering Works has grown from a small machine shop to 
                one of India's leading precision engineering companies. We specialize in delivering high-quality 
                manufacturing solutions across various industries including automotive, aerospace, and medical equipment.
              </motion.p>
              
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="text-lg"
              >
                Our state-of-the-art facility houses advanced CNC machines, laser cutting equipment, 
                and precision measurement tools operated by skilled technicians with decades of combined experience.
              </motion.p>
              
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="text-lg"
              >
                We pride ourselves on maintaining stringent quality standards, timely delivery, and competitive 
                pricing while constantly innovating to meet the evolving needs of our global clientele.
              </motion.p>
            </div>
            
            <motion.div 
              ref={timelineAnimation.ref}
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3
                  }
                }
              }}
              initial="hidden"
              animate={timelineAnimation.controls}
              className="relative pl-8 border-l-2 border-orange-500"
            >
              <motion.h3
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                }}
                className="text-2xl font-bold mb-8 text-[#40B8D3]"
              >
                Our Journey
              </motion.h3>
              
              <div className="space-y-12">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                  }}
                  className="relative"
                >
                  <div className="absolute -left-12 mt-1 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#40B8D3]"></div>
                  </div>
                  <h4 className="text-xl font-bold text-[#40B8D3]">1985</h4>
                  <p className="mt-2">Founded as a small machine shop with 3 employees</p>
                </motion.div>
                
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                  }}
                  className="relative"
                >
                  <div className="absolute -left-12 mt-1 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#40B8D3]"></div>
                  </div>
                  <h4 className="text-xl font-bold text-[#40B8D3]">1995</h4>
                  <p className="mt-2">Expanded facility and acquired first CNC machines</p>
                </motion.div>
                
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                  }}
                  className="relative"
                >
                  <div className="absolute -left-12 mt-1 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#40B8D3]"></div>
                  </div>
                  <h4 className="text-xl font-bold text-[#40B8D3]">2005</h4>
                  <p className="mt-2">ISO 9001 certification and international client acquisition</p>
                </motion.div>
                
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                  }}
                  className="relative"
                >
                  <div className="absolute -left-12 mt-1 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#40B8D3]"></div>
                  </div>
                  <h4 className="text-xl font-bold text-[#40B8D3]">2015</h4>
                  <p className="mt-2">Modern facility with advanced manufacturing capabilities</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* -------------------------------------------------------------------------------------- */}


      {/* -------------------------------------------------------------------------------------- */}
      {/* ---------------------- Our Expertise in Numbers ---------------------------------------*/}
      {/* -------------------------------------------------------------------------------------- */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl shadow-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h2>
          
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <StatCounter 
            end={30} 
            title="Years in Business" 
            icon={<svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"/></svg>} 
          />
          <StatCounter 
            end={31} 
            title="Advanced Machines" 
            subtitle="Machines" 
            icon={<svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></svg>} 
          />
          <StatCounter 
            end={7} 
            title="Industry Clients" 
            icon={<svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M16,11c1.66,0,2.99-1.34,2.99-3S17.66,5,16,5c-1.66,0-3,1.34-3,3S14.34,11,16,11z M8,11c1.66,0,2.99-1.34,2.99-3 S9.66,5,8,5C6.34,5,5,6.34,5,8S6.34,11,8,11z M8,13c-2.33,0-7,1.17-7,3.5V19h14v-2.5C15,14.17,10.33,13,8,13z M16,13 c-0.29,0-0.62,0.02-0.97,0.05c1.16,0.84,1.97,1.97,1.97,3.45V19h6v-2.5C23,14.17,18.33,13,16,13z"/></svg>} 
          />
          <StatCounter 
            end={26} 
            title="Annual Turnover" 
            subtitle="(Cr)" 
            icon={<svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M3.5,18.49l6-6.01l4,4L22,6.92l-1.41-1.41l-7.09,7.97l-4-4L2,16.99L3.5,18.49z"/></svg>} 
          />
          <StatCounter 
            end={28} 
            title="Skilled Employees" 
            icon={<svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M16,11c1.66,0,2.99-1.34,2.99-3S17.66,5,16,5c-1.66,0-3,1.34-3,3S14.34,11,16,11z M8,11c1.66,0,2.99-1.34,2.99-3 S9.66,5,8,5C6.34,5,5,6.34,5,8S6.34,11,8,11z M8,13c-2.33,0-7,1.17-7,3.5V19h14v-2.5C15,14.17,10.33,13,8,13z M16,13 c-0.29,0-0.62,0.02-0.97,0.05c1.16,0.84,1.97,1.97,1.97,3.45V19h6v-2.5C23,14.17,18.33,13,16,13z"/></svg>} 
          />
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------- */}

      {/* -------------------------------------------------------------------------------------- */}
      {/* ---------------------- Our Services Section -----------------------------------------*/}
      {/* -------------------------------------------------------------------------------------- */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-[#40B8D3] mb-4"
          >
            Our Services
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="w-24 h-1 bg-orange-500"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* CNC Machining Service */}
            <ServiceCard 
              title="CNC Machining"
              description="Precision CNC turning and milling services for complex components with tight tolerances across various materials including steel, aluminum, titanium, and plastics."
              imageUrl={CompanyLogo}
              delay={0}
              link="/services/cnc-machining"
            />
            
            {/* Laser Cutting Service */}
            <ServiceCard 
              title="Laser Cutting"
              description="High-precision laser cutting services for metal sheets and components with minimal material waste and superior edge quality for industrial applications."
              imageUrl={LaserCutting}
              delay={0.2}
            />
            
            {/* Milling & Grinding Service */}
            <ServiceCard 
              title="Milling & Grinding"
              description="Advanced milling and precision grinding services that ensure exceptional surface finishes and dimensional accuracy for critical components."
              imageUrl={MillingGrinding}
              delay={0.4}
            />
            
            {/* Quality Control Service */}
            <ServiceCard 
              title="Quality Control & Metrology"
              description="Comprehensive quality assurance using state-of-the-art CMM machines and testing equipment to verify dimensional accuracy and material properties."
              imageUrl={QualityControl}
              delay={0.6}
            />
          </div>
        </motion.div>
      </div>
      {/* -------------------------------------------------------------------------------------- */}

      {/* -------------------------------------------------------------------------------------- */}
      {/* ---------------------- Call To Action Section ---------------------------------------*/}
      {/* -------------------------------------------------------------------------------------- */}
      <div className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
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
              Ready to Start Your Next Engineering Project?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-200 mb-10"
            >
              Contact our team of experts today to discuss your requirements and get a customized
              solution that meets your exact specifications.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3 w-full sm:w-auto">
                  Request a Quote
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button variant="outline" className="bg-blue-800 border-white text-white hover:bg-white hover:text-blue-600 transition-colors duration-300 text-lg px-8 py-3 w-full sm:w-auto">
                  Contact Us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------- */}

      {/* -------------------------------------------------------------------------------------- */}
      {/* ---------------------- Footer Section -----------------------------------------------*/}
      {/* -------------------------------------------------------------------------------------- */}
      <footer className="bg-blue-950 text-gray-300">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded-md mr-3"></div>
                <h3 className="text-xl font-bold text-white">Nilesh Engineering Works</h3>
              </div>
              <p className="mb-6">
                Precision engineering solutions for modern manufacturing challenges since 1985.
              </p>
              <div className="flex space-x-4">
                <SocialIcon network="facebook" />
                <SocialIcon network="linkedin" />
                <SocialIcon network="twitter" />
                <SocialIcon network="instagram" />
              </div>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <FooterLink href="/" text="Home" />
                <FooterLink href="/about" text="About Us" />
                <FooterLink href="/services" text="Services" />
                <FooterLink href="/contact" text="Contact" />
              </ul>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <ContactItem 
                  icon={<LocationIcon />} 
                  text="123 Industrial Area, Mumbai, India" 
                />
                <ContactItem 
                  icon={<PhoneIcon />} 
                  text="+91 9876543210" 
                  href="tel:+919876543210" 
                />
                <ContactItem 
                  icon={<EmailIcon />} 
                  text="info@nileshengineering.com" 
                  href="mailto:info@nileshengineering.com" 
                />
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="border-t border-blue-800 mt-12 pt-8 text-center">
              <p>© 2025 Nilesh Engineering Works. All rights reserved.</p>
            </div>
          </motion.div>
        </div>
      </footer>
      {/* -------------------------------------------------------------------------------------- */}

      {/* -------------------------------------------------------------------------------------- */}
    </div>
  );
};

export default Home;