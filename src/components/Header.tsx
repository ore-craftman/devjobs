import { DarkModeSwitch } from "./DarkModeSwitch";
import Link from "next/link";
import { Container, Flex, Heading, Box, Text, Button } from "@chakra-ui/react";

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
          <Flex ml="auto" align="center" justify="space-between">
            <Box>
              <Link href="/">
                <a>
                  <Heading as="h1" size="md" fontSize="27px" color="white">
                    DEVJOBS
                  </Heading>
                </a>
              </Link>
            </Box>

            <Box ml="1em">
              <DarkModeSwitch />
            </Box>

            <Box
              display="flex"
              ml={["1em", "auto"]}
              w={["33%"]}
              justifyContent="space-between"
              alignItems="center"
            >
              <Link href="/">
                <a>
                  <Text color="white" _hover={{ color: "whiteAlpha.600" }}>
                    Home
                  </Text>
                </a>
              </Link>

              <Link href="/jobs">
                <a>
                  <Text color="white">Jobs</Text>
                </a>
              </Link>

              <Link href="/auth/signin">
                <a>
                  <Text color="white">Sign In</Text>
                </a>
              </Link>

              <Link href="/auth/signup">
                <a>
                  <Button bgColor="white" color="gray.700" fontWeight="medium">
                    Sign Up
                  </Button>
                </a>
              </Link>
            </Box>
          </Flex>
        </Container>
      </Box>
    </header>
  );
};
