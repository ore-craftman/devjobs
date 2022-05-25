import {
  Flex,
  Box,
  Button,
  Alert,
  AlertIcon,
  Slide,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { SimpleInput } from "./Input/SimpleInput";
import { useCreateUser } from "../hooks/useCreateUser";

export const TalentForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { err, createHandler, initLoader } = useCreateUser();

  const signupHandler = async (e) => {
    e.preventDefault();

    createHandler({
      firstname,
      lastname,
      email,
      password,
    });
  };

  return (
    <Box>
      {err && (
        <Slide in={err} style={{ zIndex: "10" }}>
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
      <form onSubmit={signupHandler} style={{ zIndex: "10" }}>
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
        <SimpleInput
          required={true}
          label="Email"
          holder="Enter email address"
          type="email"
          value={email}
          stateHandler={setEmail}
        />

        <SimpleInput
          required={true}
          label="Password"
          holder="New password"
          type="password"
          value={password}
          stateHandler={setPassword}
        />
        {password !== "" && password.length < 8 && (
          <Text fontSize="xs" color="orange.500">
            Password should be at least 8 characters
          </Text>
        )}

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
