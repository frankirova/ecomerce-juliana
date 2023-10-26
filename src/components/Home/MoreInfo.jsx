import { SimpleGrid } from "@chakra-ui/react";
import { ShipmentsIcon, CardIcon, LockIcon } from "../../icons";
import { ItemMoreInfo } from "./ItemMoreInfo";

export const MoreInfo = () => {
  return (
    <SimpleGrid as={"section"} columns={[1, 1, 2, 3]}>
      <ItemMoreInfo
        icon={<ShipmentsIcon />}
        text={"Envios gratis a todo el pais"}
      />
      <ItemMoreInfo icon={<CardIcon />} text={"3 cuotas sin interes"} />
      <ItemMoreInfo icon={<LockIcon />} text={"Compra segura"} />
    </SimpleGrid>
  );
};
