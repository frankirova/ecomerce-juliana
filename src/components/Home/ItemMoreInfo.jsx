import { Text, VStack } from "@chakra-ui/react";

export const ItemMoreInfo = ({ icon, text }) => {
  return (
    <VStack m={4} minW={"sm"} borderRight={"2px"}>
      {icon}
      <Text fontSize="2xl">{text}</Text>
    </VStack>
  );
};
