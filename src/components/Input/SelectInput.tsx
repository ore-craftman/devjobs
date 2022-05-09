import { FormControl, FormLabel, Flex, Select } from "@chakra-ui/react";
import { ReactChild } from "react";

interface PropSchema {
  label?: string;
  holder?: string;
  options: any[];
  icon: ReactChild;
  value: any;
  iconColor: string;
  stateHandler: React.Dispatch<React.SetStateAction<any>>;
}

export const SelectInput = ({
  label,
  holder,
  options,
  value,
  icon,
  iconColor,
  stateHandler,
}: PropSchema) => {
  return (
    <FormControl w="100%" my="8px">
      <FormLabel
        htmlFor={label.split(" ").join("").toLowerCase()}
        fontSize="xs"
      >
        {label}
      </FormLabel>
      <Flex
        border="1px"
        borderColor="gray.200"
        _hover={{ borderColor: "gray.300" }}
        borderRadius="6px"
        align="center"
        justify="center"
        pl="6px"
      >
        <Flex
          align="center"
          justify="center"
          borderRadius="full"
          p="0.5em"
          bgColor={iconColor}
          _dark={{
            bgColor:
              iconColor.split(".")[0] +
              "." +
              (parseInt(iconColor.split(".")[1]) + 100),
          }}
          color="black"
        >
          {icon}
        </Flex>
        <Select
          placeholder={holder ? holder : "Select option"}
          color="gray.600"
          border="none"
          _focus={{ border: "none" }}
          isRequired={true}
          value={value}
          onChange={(e) => stateHandler && stateHandler(() => e.target.value)}
        >
          {options.map((optn, i) => {
            return (
              <option key={i} value={optn.split(" ").join("-")}>
                {optn}
              </option>
            );
          })}
        </Select>
      </Flex>
    </FormControl>
  );
};
