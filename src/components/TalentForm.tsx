import { Flex, Box, Button } from "@chakra-ui/react";
import { SimpleInput } from "./Input/SimpleInput";
export const TalentForm = () => {
  return (
    <form>
      <Flex justify="space-between">
        <Box w="48%">
          <SimpleInput label="First Name" holder="John" type="text" />
        </Box>

        <Box w="48%">
          <SimpleInput label="Last Name" holder="Doe" type="text" />
        </Box>
      </Flex>
      <SimpleInput label="Email" holder="Enter email address" type="email" />

      <SimpleInput label="Password" holder="New password" type="password" />

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
      >
        Sign Up
      </Button>
    </form>
  );
};
