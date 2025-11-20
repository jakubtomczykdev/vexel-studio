import React from "react";
// Importujemy CompanyLogo ze zaktualizowanymi klasami wysokości
import CompanyLogo from "./CompanyLogo"; 

const LogoGrid = () => {
  // Lista 9 logotypów
  const logos = [
    "/01.svg", "/02.svg", "/03.svg", "/04.svg", "/05.svg", 
    "/06.svg", "/07.svg", "/08.svg", "/09.svg"
  ];

  return (
    <div className="w-full mt-10 px-4 z-[-1]">
 
      <div 
        className="
          grid 
          grid-cols-3         /* Mobile: 3 kolumny (3x3) */
          sm:grid-cols-4      /* Małe tablety: 4 kolumny */
          md:grid-cols-5      /* Duże tablety: 5 kolumn */
          lg:grid-cols-6      /* Desktop (1024px+): 6 kolumn (Daje logo 50% więcej miejsca niż 9 kolumn!) */
          xl:grid-cols-7      /* Duże ekrany (1280px+): 7 kolumn (Logo jeszcze większe) */
          2xl:grid-cols-9     /* Ultra szerokie ekrany (1536px+): 8 kolumn */
          gap-6 
          justify-items-center
        "
      >
        {logos.map((logo, index) => (
          <div 
            key={index} 
            className="transition duration-300 ease-in-out transform hover:scale-110 opacity-70 hover:opacity-100"
          >
            <CompanyLogo src={logo} alt={`Company logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;