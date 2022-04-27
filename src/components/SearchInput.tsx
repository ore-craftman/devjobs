import { Icon, FormControl, Input, Button, Flex } from "@chakra-ui/react";
interface IconProp {
  icon: any;
  holder: string;
  value: any;
  stateHandler: React.Dispatch<React.SetStateAction<any>>;
}
export const SearchInput = ({
  icon,
  holder,
  value,
  stateHandler,
}: IconProp) => {
  return (
    <>
      <Icon as={icon} color="#5965E0" />
      <FormControl>
        <Input
          type="text"
          placeholder={holder}
          fontSize="sm"
          color="gray.700"
          variant="unstyled"
          _placeholder={{ color: "gray.400" }}
          ml="1em"
          value={value}
          onChange={(e) => stateHandler(e.target.value)}
        />
      </FormControl>
    </>
  );
};
