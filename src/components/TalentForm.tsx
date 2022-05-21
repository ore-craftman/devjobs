import axios from "axios";
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
import { useRouter } from "next/router";

export const TalentForm = () => {
  const router = useRouter();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [initLoader, setInitLoader] = useState(false);
  const [err, setErr] = useState(null);

  const signupHandler = async (e) => {
    e.preventDefault();
    setInitLoader(true);

    if (password.length < 8) {
      setInitLoader(false);
      return setErr("Password must be at least 8 characters");
    }

    // TODO: Store Data
    const userData = {
      firstname,
      lastname,
      email,
      password,
      keyMaster: false,
    };

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_USERS_ENDPOINT}/create`,
      userData
    );

    if (res.status === 200) {
      const { status, data } = res.data;

      if (status !== "OK") {
        setErr(data);
      } else {
        let date = new Date();
        date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
        document.cookie = `UID=${
          data._id
        }; expires=${date.toUTCString()}; path=/`;
        router.push("/jobs");
      }
    } else {
      setErr("Oops.. something went wrong");
    }

    setInitLoader(false);
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
            w={["100%", "40%", "28%"]}
            right="0"
            boxShadow="xl"
            fontWeight="medium"
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
