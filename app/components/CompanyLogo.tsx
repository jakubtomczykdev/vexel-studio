import React from 'react';

const CompanyLogo = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <img 
      className="
        block 
        w-full h-auto max-w-[150px]
        sm:max-w-none 
        sm:h-12 
        md:h-16 
        lg:h-20
        object-contain
      " 
      src={src} 
      alt={alt} 
    />
  );
};

export default CompanyLogo;