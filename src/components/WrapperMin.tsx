import { Container, Box } from "@chakra-ui/react";
import { Header } from "./Header";

interface WrapperSchema {
  children: JSX.Element | JSX.Element[];
}

export const WrapperMin = ({ children }: WrapperSchema) => {
  return (
    <Box>
      <Header />
      <Container maxWidth="container.md">{children}</Container>
    </Box>
  );
};
