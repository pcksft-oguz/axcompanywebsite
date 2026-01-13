"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const InitAnimations = () => {
  useEffect(() => {
    // Initialize AOS with performance-optimized settings
    AOS.init({
      duration: 1000,
      once: true, // Animation happens only once for better performance
      mirror: false,
      anchorPlacement: "top-bottom",
      disable: false,
      easing: "ease-in-out",
      offset: 50,
    });

    // Refresh AOS on route changes
    AOS.refresh();
  }, []);
  
  return null;
};

export default InitAnimations;
