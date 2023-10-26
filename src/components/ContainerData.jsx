import { Container, Flex, Heading, Text } from "@chakra-ui/react";

export const ContainerData = ({ title, text }) => {
  return (
    <div>
      <Flex direction="row">
        <Container maxWidth="1200px" my={6}>
          <Heading size="xl">
            {title}
          </Heading>
          <Text my={3} fontSize="lg">
            {text}
          </Text>
        </Container>
      </Flex>
    </div>
  );
};
