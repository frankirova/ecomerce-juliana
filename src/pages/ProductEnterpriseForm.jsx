import { Button, Container, FormLabel, Input, Link } from "@chakra-ui/react";

export const ProductEnterpriseForm = () => {
  return (
    <Container height="80vh" p={4}>
      <form>
        <FormLabel>Email</FormLabel>
        <Input></Input>
        <FormLabel>Cantidad</FormLabel>
        <Input></Input>
        <FormLabel>Descripcion del producto</FormLabel>
        <Input></Input>

        <Button bg="whatsapp.600" color="white">
          <Link fontWeight='500' color="white" href="https://wa.link/15cpw0">
            <i className="fa-brands fa-whatsapp"></i>
            Confirmar compra
          </Link>
        </Button>
      </form>
    </Container>
  );
};
