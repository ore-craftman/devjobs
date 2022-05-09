import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useState } from "react";

import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";

interface PropSchema {
  label?: string;
  required: boolean;
  holder: string;
  type: string;
  value: any;
  URL?: boolean;
  stateHandler?: React.Dispatch<React.SetStateAction<any>>;
}

export const SimpleInput = ({
  label,
  holder,
  type,
  value,
  URL,
  required,
  stateHandler,
}: PropSchema) => {
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
        {URL && (
          <InputLeftAddon
            bgColor="gray.200"
            _dark={{
              bgColor: "gray.500",
              border: "1px",
            }}
            children="https://"
          />
        )}
        <Input
          id={label.split(" ").join("").toLowerCase()}
          type={showPassword ? "text" : type}
          value={value && value}
          onChange={(e) => stateHandler && stateHandler(e.target.value)}
          fontSize="md"
          isRequired={required}
          placeholder={holder}
          borderColor="gray.200"
          borderRadius="4px"
          _hover={{ borderColor: "gray.300" }}
          _placeholder={{ color: "gray.400" }}
          _focus={{
            borderColor: value.length == "" && required ? "tomato" : "gray.200",
          }}
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
