import { DarkModeSwitch } from "./DarkModeSwitch";
import Link from "next/link";
import { Container, Flex, Heading, Box } from "@chakra-ui/react";

export const Header = () => {
  return (
    <header>
      <Box
        pt="2rem"
        pb="3rem"
        bgGradient="linear(to-l, #5965E0, #676FE3)"
        borderBottomLeftRadius="5rem"
      >
        <Container maxWidth="container.lg">
          <Flex ml="auto" align="center">
            <Link href="/">
              <a>
                <Heading as="h1" size="md" fontSize="27px" color="white">
                  devjobs
                </Heading>
              </a>
            </Link>
            <DarkModeSwitch />
          </Flex>
        </Container>
      </Box>
    </header>
  );
};
