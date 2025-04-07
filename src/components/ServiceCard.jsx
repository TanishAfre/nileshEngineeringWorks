import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ title, description, imageUrl, delay, link }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      onClick={handleClick}
      className={`bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden shadow-lg ${link ? 'cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1' : ''}`}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#40B8D3] mb-3">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        {link && (
          <div className="flex justify-end">
            <span className="text-[#40B8D3] font-medium flex items-center">
              Learn more
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCard;