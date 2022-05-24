import { useState } from "react";
import { SimpleInput } from "./Input/SimpleInput";
import { Box, Button, Alert, AlertIcon, Slide } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [initLoader, setInitLoader] = useState(false);
  const [err, setErr] = useState(null);
  const router = useRouter();

  const siginHandler = async (e) => {
    e.preventDefault();
    setInitLoader(true);

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_USERS_ENDPOINT}/auth`,
      { email, password }
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
      <form onSubmit={siginHandler}>
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
          loadingText="Sign In..."
          fontWeight="medium"
        >
          Sign In
        </Button>
      </form>
    </Box>
  );
};
