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
  Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useSession } from "../hooks/useSession";

export const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [userInstance] = useSession();

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
              w={["50%", "50%", "45%"]}
              justifyContent={["end", "space-between"]}
              alignItems="center"
            >
              <Spacer />
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
                justifyContent={["", "space-between"]}
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
                    <Text
                      mt={["6em", "0em"]}
                      color="white"
                      _hover={{ color: "whiteAlpha.600" }}
                      pr={["2em", "0em"]}
                    >
                      Home
                    </Text>
                  </a>
                </Link>

                <a href="/jobs">
                  <Text
                    my={["1.2em", "0em"]}
                    pr={["2.6em", "0em"]}
                    color="white"
                    _hover={{ color: "whiteAlpha.600" }}
                  >
                    Jobs
                  </Text>
                </a>

                {userInstance.firstname !== "" ? (
                  <Text mt={["1em", "0em"]} pl={["1em", "0em"]} color="white">
                    {`Hi, ${userInstance.firstname}`}
                  </Text>
                ) : (
                  <Link href="/auth/signin">
                    <a>
                      <Text
                        my={["1em", "0em"]}
                        pr={["2em", "0em"]}
                        color="white"
                        _hover={{ color: "whiteAlpha.600" }}
                      >
                        Sign In
                      </Text>
                    </a>
                  </Link>
                )}

                {userInstance.firstname === "" ? (
                  <Link href="/auth/signup">
                    <a>
                      <Button
                        bgColor="white"
                        color="gray.700"
                        fontWeight="medium"
                        my={["1em", "0em"]}
                      >
                        Sign Up
                      </Button>
                    </a>
                  </Link>
                ) : (
                  <Button
                    bgColor="white"
                    color="gray.700"
                    fontWeight="medium"
                    my={["1em", "0em"]}
                  >
                    Sign Out
                  </Button>
                )}
              </Stack>
            </Box>
          </Flex>
        </Container>
      </Box>
    </header>
  );
};
