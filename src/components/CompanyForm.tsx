import { Flex, Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { SimpleInput } from "./Input/SimpleInput";

export const ComapnyForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyURL, setCompanyURL] = useState("");
  const [initLoader, setInitLoader] = useState(false);

  const signupHandler = (e) => {
    e.preventDefault();
    setInitLoader(true);

    // TODO: Store Data
    setTimeout(() => {
      console.table({
        firstname,
        lastname,
        email,
        password,
        companyName,
        companyURL,
      });
      setInitLoader(false);
    }, 1000);
  };
  return (
    <form onSubmit={signupHandler}>
      <Flex justify="space-between">
        <Box w="48%">
          <SimpleInput
            label="First Name"
            holder="John"
            type="text"
            value={firstname}
            stateHandler={setFirstname}
          />
        </Box>

        <Box w="48%">
          <SimpleInput
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
            label="Company Email"
            holder="hi@meta.com"
            type="email"
            value={email}
            stateHandler={setEmail}
          />
        </Box>

        <Box w="48%">
          <SimpleInput
            label="Company Name"
            holder="meta"
            type="text"
            value={companyName}
            stateHandler={setCompanyName}
          />
        </Box>
      </Flex>

      <SimpleInput
        label="Password"
        holder="New password"
        type="password"
        value={password}
        stateHandler={setPassword}
      />

      <SimpleInput
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
  );
};
