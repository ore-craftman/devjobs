import { useState } from "react";
import { SimpleInput } from "./Input/SimpleInput";
import { Button } from "@chakra-ui/react";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [initLoader, setInitLoader] = useState(false);

  const siginHandler = (e) => {
    e.preventDefault();
    setInitLoader(true);

    // TODO: Store Data
    setTimeout(() => {
      console.table({ email, password });
      setInitLoader(false);
    }, 1000);
  };

  return (
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
  );
};
