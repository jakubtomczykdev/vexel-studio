import React from "react";
import { motion } from "framer-motion";
import CompanyLogo from "./CompanyLogo";

const CompanyCarousel = () => {
  const logos = [
    "/01.svg", "/02.svg", "/03.svg", "/04.svg", "/05.svg", "/06.svg",
    "/07.svg", "/08.svg", "/09.svg", "/10.svg", "/11.svg", "/12.svg",
    "/13.svg", "/14.svg", "/15.svg", "/16.svg", "/17.svg", "/18.svg",
    "/19.svg", "/20.svg", "/21.svg", "/22.svg",
  ];

  const extendedLogos = [...logos, ...logos];

  // 1. Hook do śledzenia rozmiaru ekranu
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      // Używamy progu 768px (standardowe 'md' w Tailwind)
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 2. Warunkowe Definicje Animacji
  const duration = isMobile ? 100 : 100; // Krótszy czas animacji (szybsza) na mobile
  const repeat = isMobile ? 0 : Infinity; // Brak nieskończonego powtarzania na mobile

  const transitionProps = {
    ease: "linear",
    duration: duration,
    repeat: repeat,
    // Dodatkowo, na mobile możemy użyć 'repeatType: "reverse"', aby
    // animacja wracała na swoje miejsce, zamiast gwałtownie skakać.
    repeatType: isMobile ? "reverse" : "loop", 
  };
  const transition = {
  duration: 0.8,
  delay: 0.5,
}

  return (
    <div className="w-full overflow-hidden mt-10"> {/* Komponent jest zawsze widoczny */}
      <div className="relative w-full h-20">
        <motion.div
          className="absolute left-0 flex"
          animate={{
            x: ["0%", "-100%"]
          }}
          
          transition={transitionProps}
        >
          {extendedLogos.map((logo, index) => (
            <CompanyLogo key={index} src={logo} alt={`Company logo ${index + 1}`} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyCarousel;