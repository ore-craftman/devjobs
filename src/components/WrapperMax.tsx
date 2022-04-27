import { Container, Box } from "@chakra-ui/react";
import { Header } from "./Header";

interface WrapperSchema {
  children: JSX.Element | JSX.Element[];
}

export const WrapperMax = ({ children }: WrapperSchema) => {
  return (
    <Box>
      <Header />
      <Container maxWidth="container.lg">{children}</Container>
    </Box>
  );
};
