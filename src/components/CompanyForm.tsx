import { Flex, Box, Button, Alert, AlertIcon, Slide } from "@chakra-ui/react";
import { useState } from "react";
import { SimpleInput } from "./Input/SimpleInput";
import { useCreateUser } from "../hooks/useCreateUser";

export const ComapnyForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyURL, setCompanyURL] = useState("");

  const { err, createHandler, initLoader } = useCreateUser();

  const signupHandler = (e) => {
    e.preventDefault();
    createHandler({
      firstname,
      lastname,
      email,
      password,
      companyName,
      companyURL,
    });
  };
  return (
    <Box>
      {err && (
        <Slide in={err}>
          <Alert
            borderLeftRadius="6px"
            status="warning"
            position="absolute"
            top="1"
            w={["97%", "40%", "28%"]}
            right="0"
            boxShadow="xl"
            fontWeight="medium"
            style={{ zIndex: "10" }}
          >
            <AlertIcon />
            {err}
          </Alert>
        </Slide>
      )}
      <form onSubmit={signupHandler}>
        <Flex justify="space-between">
          <Box w="48%">
            <SimpleInput
              required={true}
              label="First Name"
              holder="John"
              type="text"
              value={firstname}
              stateHandler={setFirstname}
            />
          </Box>

          <Box w="48%">
            <SimpleInput
              required={true}
              label="Last Name"
              holder="Doe"
              type="text"
              value={lastname}
              stateHandler={setLastname}
            />
          </Box>
        </Flex>

        <Flex justify="space-between">
          <Box w="48%">
            <SimpleInput
              required={true}
              label="Company Email"
              holder="hi@meta.com"
              type="email"
              value={email}
              stateHandler={setEmail}
            />
          </Box>

          <Box w="48%">
            <SimpleInput
              required={true}
              label="Company Name"
              holder="meta"
              type="text"
              value={companyName}
              stateHandler={setCompanyName}
            />
          </Box>
        </Flex>

        <SimpleInput
          required={true}
          label="Password"
          holder="New password"
          type="password"
          value={password}
          stateHandler={setPassword}
        />

        <SimpleInput
          required={true}
          URL={true}
          label="Company URL"
          holder="meta.com"
          type="text"
          value={companyURL}
          stateHandler={setCompanyURL}
        />

        <Button
          w="100%"
          bgColor="bsBlue"
          color="whiteAlpha.900"
          fontSize="md"
          mt="12px"
          py="1.3em"
          borderRadius="4px"
          type="submit"
          colorScheme="bsBlue"
          isLoading={initLoader && true}
          loadingText="Creating..."
          fontWeight="medium"
        >
          Create account
        </Button>
      </form>
    </Box>
  );
};
