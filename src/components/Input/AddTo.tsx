import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Text,
} from "@chakra-ui/react";

interface PropSchema {
  label: string;
  holder: string;
  value: any;
  stateHandler: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AddTo = ({ label, holder, value, stateHandler }: PropSchema) => {
  return (
    <FormControl>
      <FormLabel
        htmlFor={label.split(" ").join("").toLowerCase()}
        fontSize="xs"
      >
        {label}
      </FormLabel>
      <Input
        id={label.split(" ").join("").toLowerCase()}
        type="text"
        required={true}
        placeholder={holder}
        borderColor="gray.200"
        borderRadius="4px"
        fontSize="md"
        value={value}
        onChange={(e) => stateHandler(() => e.target.value.split(","))}
        _hover={{ borderColor: "gray.300" }}
        _placeholder={{ color: "gray.400" }}
      />
      <FormHelperText>
        Values should be comma (<Text as="samp">,</Text>) seperated
      </FormHelperText>
    </FormControl>
  );
};
