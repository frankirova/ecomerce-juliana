import {
  Button,
  ButtonGroup,
  Center,
  Container,
  Flex,
  Image,
  List,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const CardKeychains = ({
  products,
  text,
  textButton,
  prop1,
  prop2,
  prop3,
}) => {
  return (
    <Flex bg="secondary">
      <Image src="//placehold.it/250x350" />
      <Container maxW="sm" display="flex">
        <Flex direction="column" justify="space-evenly">
          <UnorderedList p={4}>
            <ListItem>{prop1}</ListItem>
            <ListItem>{prop2}</ListItem>
            <ListItem>{prop3}</ListItem>
          </UnorderedList>
          <Text>{text}</Text>
          <Button
            as={Link}
            to={`${textButton}`}
            bg="primary"
            my={2}
            color="secondary"
            fontWeight="400"
          >
            {textButton}
          </Button>
        </Flex>
      </Container>
    </Flex>
  );
};
