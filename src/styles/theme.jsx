import { extendTheme } from "@chakra-ui/react";

export const MyNewTheme = extendTheme({
  colors: {
    primary: "#92aca8",
    // secondary: "#ecf2f6",
    secondary: '#484a72',
  },
  fonts: {
    body: "roboto",
  },
  components: {
    Button: {
      // Estilos globales para todos los botones
      baseStyle: {
        letterSpacing: "0.06em",
        fontWeight: "500",
      },
      // Estilos para variantes de botón específicas
      variants: {
        solid: {
          bg: "primary",
          color: "white",
          _hover: { bg: "secondary", color: "white" },
        },
        ghost: {
          color: "white",
          _hover: { bg: "secondary", color: "white" },
        },
        // Agrega más variantes según tus necesidades
      },
    },
    Heading: {
      // Estilos globales para todos los botones
      baseStyle: {
        // letterSpacing: "0.06em",
        // fontWeight: "500",
        textAlign: "center",
        bg: "primary",
        color: "white",
        my: 3,
        p: 3,
      },
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: "body",
        fontWeight: "normal",
        letterSpacing: "0.06em",
      },
      // button: {
      //   letterSpacing: "0.06em",
      //   variant: "solid",
      //   bg: "primary",
      //   color: "white",
      //   fontSize: ["sm", "sm", "lg", "lg"],
      //   fontWeight: "500",
      //   _hover: { color: "primary", bg: "secondary" },
      // },
    },
  },
});
