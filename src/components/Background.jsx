import { useCallback, useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { useThemeContext } from '../context/ThemeContext';

const Background = () => {

  const [particleCount, setParticleCount] = useState(80);

  const { isDarkMode } = useThemeContext();

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles loaded", container);
  }, []);

  useEffect(() => {
    const updateCount = () => {
      setParticleCount(window.innerWidth <= 900 ? 40 : 80);
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return (
    <Particles
      id="tsparticles"
      loaded={particlesLoaded}
      options={{
        background: {
          color: isDarkMode ? "#002036" : "rgb(170, 228, 255)"
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: particleCount,
          },
          color: {
            value: "<<c>>",
          },
          links: {
            enable: true,
            color: isDarkMode ? "#007067" : "rgb(0, 105, 18)",
            distance: 150,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
          },
          size: {
            value: 3,
          },
        },
      }}
    />
  );
};

export default Background;
