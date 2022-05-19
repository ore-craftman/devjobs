import axios from "axios";
import { Flex, Box, Button, Alert, AlertIcon, Slide } from "@chakra-ui/react";
import { useState } from "react";
import { SimpleInput } from "./Input/SimpleInput";
export const TalentForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [initLoader, setInitLoader] = useState(false);
  const [err, setErr] = useState(false);

  const signupHandler = (e) => {
    e.preventDefault();
    setInitLoader(true);

    // TODO: Store Data
    // setTimeout(() => {
    //   console.log({ firstname, lastname, email, password });
    //   setInitLoader(false);
    //   setErr(true);
    // }, 1000);
  };

  return (
    <Box>
      <Slide in={err} style={{ zIndex: 10 }}>
        <Alert
          borderLeftRadius="6px"
          status="warning"
          position="absolute"
          top="1"
          w={["100%", "40%", "28%"]}
          right="0"
        >
          <AlertIcon />
          Seems your account is about expire, upgrade now
        </Alert>
      </Slide>
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
