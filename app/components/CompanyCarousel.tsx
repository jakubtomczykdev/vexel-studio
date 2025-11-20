import React, {useState} from "react";
import { motion, Transition } from "framer-motion";
import CompanyLogo from "./CompanyLogo";

const CompanyCarousel = () => {
  const logos = [
    "/01.svg", "/02.svg", "/03.svg", "/04.svg", "/05.svg", "/06.svg",
    "/07.svg", "/08.svg", "/09.svg", "/10.svg", "/11.svg", "/12.svg",
    "/13.svg", "/14.svg", "/15.svg", "/16.svg", "/17.svg", "/18.svg",
    "/19.svg", "/20.svg", "/21.svg", "/22.svg",
  ];

  const extendedLogos = [...logos, ...logos];


  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {

      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);


  const duration = isMobile ? 100 : 100; 
  const repeat = isMobile ? 0 : Infinity; 

  const transitionProps: Transition = {
    ease: "linear",
    duration: duration,
    repeat: repeat,

    repeatType: isMobile ? "reverse" : "loop", 
  };


  return (
    <div className="w-full overflow-hidden mt-10">
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