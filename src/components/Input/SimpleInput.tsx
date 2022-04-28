import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";

import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";

interface PropSchema {
  label: string;
  holder: string;
  type: string;
}

export const SimpleInput = ({ label, holder, type }: PropSchema) => {
  const [showPassword, setShowPassword] = useState(false);

  const showHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormControl w="100%" my="8px">
      <FormLabel
        htmlFor={label.split(" ").join("").toLowerCase()}
        fontSize="xs"
      >
        {label}
      </FormLabel>
      <InputGroup>
        <Input
          size="md"
          id={label.split(" ").join("").toLowerCase()}
          type={showPassword ? "text" : type}
          fontSize="md"
          placeholder={holder}
          borderColor="gray.200"
          borderRadius="4px"
          _hover={{ borderColor: "gray.300" }}
          _placeholder={{ color: "gray.400" }}
        />
        {type === "password" && (
          <InputRightElement
            cursor="pointer"
            onClick={showHandler}
            children={showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
          />
        )}
      </InputGroup>
    </FormControl>
  );
};
