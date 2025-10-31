import React from 'react';

const CompanyLogo = ({ src, alt }: { src: string; alt: string }) => {
  return <img className="h-8 sm:h-12 w-auto pr-8 sm:pr-12 md:pr-16 lg:pr-20" src={src} alt={alt} />;
};

export default CompanyLogo;