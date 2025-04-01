import React from "react";

const ContactItem = ({ icon, text, href }) => {
  const content = (
    <div className="flex items-start">
      <div className="mr-3 text-[#40B8D3]">
        {icon}
      </div>
      <span>{text}</span>
    </div>
  );

  return (
    <li>
      {href ? (
        <a href={href} className="hover:text-[#40B8D3] transition-colors duration-200">
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
};

export default ContactItem;