import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext, CartContext } from "../../context";

import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { toast, Toaster } from "react-hot-toast";

export const CardProducts = ({ id, image, price, title, stock }) => {
  const { addToCart } = useContext(CartContext);
  const { isLoggedIn } = useContext(authContext);

  const quantity = 1;

  const addTo = (quantity) => {
    if (stock !== 0) {
      addToCart({ id, image, price, title, quantity });
    } else {
      toast.error("Error, agregaste un producto sin Stock al CARRITO!");
    }
  };

  return (
    <>
      <Card m={4} maxW="sm" variant="filled">
        <CardBody alignItems="center">
          <Stack>
            <Image
              // preload="true"
              alt={title}
              borderRadius="lg"
              m="0"
              src={image}
            />
          </Stack>
          <Stack mt="6" spacing="3">
            <Text fontWeight="bold" fontSize="3xl">
              {title}
            </Text>
            <Text>Stock:{stock}</Text>
            <HStack>
              <Text color="primary" fontSize="3xl" fontWeight="600">
                ${price}
              </Text>
              {stock === 0 && (
                <Tag bg="#FFCEC2" color="red" size="lg">
                  Sin Stock
                </Tag>
              )}
            </HStack>
          </Stack>
        </CardBody>
        <Divider color="gray.400" my={1} />
        <CardFooter>
          {isLoggedIn ? (
            <ButtonGroup spacing="2">
              <Button
                fontSize={["sm", "sm", "lg", "lg"]}
                onClick={() => addTo(quantity)}
                variant="solid"
              >
                Agregar al carrito
              </Button>
              <Button as={Link} to={`/Catalogo/prod/${id}`} color='secondary' variant="ghost">
                Ver mas
              </Button>
            </ButtonGroup>
          ) : (
            <ButtonGroup spacing="2">
              <Button
                as={Link}
                fontSize={["sm", "sm", "lg", "lg"]}
                to="/login"
                variant="solid"
              >
                Agregar al carrito
              </Button>
              <Button
                as={Link}
                fontSize={["sm", "sm", "lg", "lg"]}
                to="/login"
                variant="ghost"
                color='secondary'
              >
                Ver mas
              </Button>
            </ButtonGroup>
          )}
        </CardFooter>
      </Card>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
