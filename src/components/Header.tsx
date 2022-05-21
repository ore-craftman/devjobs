import { DarkModeSwitch } from "./DarkModeSwitch";
import Link from "next/link";
import {
  Container,
  Flex,
  Heading,
  Box,
  Text,
  Button,
  IconButton,
  Stack,
  Slide,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

export const Header = () => {
  const [showNav, setShowNav] = useState(false);

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

            <Box
              display="flex"
              ml={["1em", "auto"]}
              w={["50%", "50%", "35%"]}
              justifyContent={["end", "space-between"]}
              alignItems="center"
            >
              <DarkModeSwitch />

              <IconButton
                aria-label="menu handler"
                ml="1em"
                display={["block", "none"]}
                icon={showNav ? <CloseIcon /> : <HamburgerIcon />}
                onClick={() => setShowNav(!showNav)}
                style={{ zIndex: "10" }}
              />
              <Stack
                direction={["column", "row"]}
                justifyContent={["space-evenly", "space-between"]}
                alignItems="center"
                display={[showNav ? "flex" : "none", "flex"]}
                boxShadow={["2xl", "none"]}
                bgGradient={["linear(to-l, #5965E0, #676FE3)", "none"]}
                w={["60%", "100%"]}
                h={["100%"]}
                ml="1em"
                position={["absolute", "static"]}
                left="-1em"
                top="0"
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
                    <Button
                      bgColor="white"
                      color="gray.700"
                      fontWeight="medium"
                    >
                      Sign Up
                    </Button>
                  </a>
                </Link>
              </Stack>
            </Box>
          </Flex>
        </Container>
      </Box>
    </header>
  );
};
