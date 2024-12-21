import { useEffect, useState } from "react";

function useScroll() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeSection, setActiveSection] = useState("");
  const [clickedSection, setClickedSection] = useState("");

  useEffect(() => {
    // Check for hash on initial load
    const hash = window.location.hash;
    if (hash) {
      setClickedSection(hash.substring(1));
    }

    const handleScroll = () => {
      const navHeight = 80; // Reduced from 112 for less spacing

      navItems.forEach(({ href }) => {
        const element = document.querySelector(href);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= navHeight + 20 && rect.bottom >= navHeight) {
            setActiveSection(href.substring(1));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return [clickedSection, setClickedSection];
}

export default useScroll;
