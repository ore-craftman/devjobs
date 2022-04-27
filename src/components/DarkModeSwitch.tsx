import { useColorMode, Switch, Flex, Spacer } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Flex ml="auto" w="6em" align="center">
      <SunIcon color="gray.300" w={4} h={4} />
      <Spacer />
      <Switch color="blue" isChecked={isDark} onChange={toggleColorMode} />
      <Spacer />
      <MoonIcon color="gray.300" w={4} h={4} />
    </Flex>
  );
};
