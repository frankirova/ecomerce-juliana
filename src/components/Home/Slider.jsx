import React, { useState, useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";

export const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Cambio de imagen cada 4 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [images]);

  return (
    <Box aspectRatio='16:9'>
      <Image
        objectFit="cover"
        w="full"
        src={images[currentIndex]}
        alt={`Image ${currentIndex}`}
      />
    </Box>
  );
};
