import {
  Box,
  Container,
  Heading,
  Center,
  Text,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

interface PropSchema {
  children: JSX.Element[] | JSX.Element;
  heading: string;
  redirectText?: string;
  redirectURL?: string;
  redirectHolder?: string;
}

export const AuthWrapper = ({
  children,
  heading,
  redirectText,
  redirectURL,
  redirectHolder,
}: PropSchema) => {
  return (
    <Box h="100vh" bgGradient="linear(to-r, blue.600, purple.600)">
      <Container maxWidth="container.lg" h="100%" color="gray.700">
        <Center h="100%">
          <Box
            w={{ base: "100%", md: "50%", lg: "40%" }}
            minHeight="30%"
            bgColor="whiteAlpha.900"
            borderRadius="2xl"
            px={["1em", "2em"]}
            py="2em"
          >
            <Heading
              as="h2"
              mb="1em"
              textAlign="center"
              fontSize={["xl", "2xl"]}
              bgGradient="linear(to-r, #7928CA, #FF0080)"
              bgClip="text"
            >
              {heading}
            </Heading>
            {children}

            <Text
              fontSize="xs"
              color="gray.700"
              textAlign="end"
              mt="8px"
              fontWeight="medium"
            >
              {redirectText + " "}
              <Link href={redirectURL}>
                <a>
                  <Button size="xs" variant="link" color="blue.600">
                    {redirectHolder}
                  </Button>
                </a>
              </Link>
            </Text>
          </Box>
        </Center>
      </Container>
    </Box>
  );
};
