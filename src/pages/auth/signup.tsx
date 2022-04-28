import {
  Center,
  Container,
  Heading,
  Box,
  Flex,
  Button,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { TalentForm } from "../../components/TalentForm";

const SignUp = () => {
  const [companyForm, setCompanyForm] = useState(false);

  return (
    <Box h="100vh" bgGradient="linear(to-r, blue.600, purple.600)">
      <Container maxWidth="container.lg" h="100%" color="gray.700">
        <Center h="100%">
          <Box
            w={{ base: "90%", md: "50%", lg: "40%" }}
            minHeight="60%"
            bgColor="whiteAlpha.900"
            borderRadius="2xl"
            p={["16px", "1.7em"]}
          >
            <Flex
              justifyContent={["space-around", "space-between"]}
              mb="1.5em"
              mx="auto"
              w={["70%", "55%"]}
            >
              <Button
                size="xs"
                p={["16px", "1.5em"]}
                borderRadius="4px"
                _hover={{ color: "blue.600", bgColor: "gray.300" }}
                bgColor={companyForm ? "gray.200" : "gray.300"}
                color={companyForm ? "gray.400" : "blue.600"}
                onClick={() => setCompanyForm(false)}
              >
                Talent
              </Button>
              <Button
                size="xs"
                p={["16px", "1.5em"]}
                borderRadius="4px"
                _hover={{ color: "blue.600", bgColor: "gray.300" }}
                bgColor={companyForm ? "gray.300" : "gray.200"}
                color={companyForm ? "blue.600" : "gray.400"}
                onClick={() => setCompanyForm(true)}
              >
                Company
              </Button>
            </Flex>

            <VStack align="center" w="100%">
              <Heading
                as="h2"
                mb="0.5em"
                fontSize={{ base: "sm", md: "md" }}
                bgGradient="linear(to-r, #7928CA, #FF0080)"
                bgClip="text"
              >
                {"Create An Account"}
              </Heading>

              {companyForm ? <Text>Working on it</Text> : <TalentForm />}
            </VStack>
          </Box>
        </Center>
      </Container>
    </Box>
  );
};

export default SignUp;
