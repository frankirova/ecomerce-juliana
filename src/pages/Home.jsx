import { Box, Image } from "@chakra-ui/react";
import { ButtonWhatsapp } from "../components/ButtonWhatsapp";
import { ImageSlider } from "../components/Home/Slider";
import { MoreInfo } from "../components/Home/MoreInfo";
import { BestSeller } from "../components/Home/BestSeller";

export const Home = () => {
  const images = ["/assets/13.png", "/assets/12.png"];
  return (
    <>
      <Box>
        <ImageSlider images={images} />
        <MoreInfo />
        <BestSeller />
      </Box>
    </>
  );
};
