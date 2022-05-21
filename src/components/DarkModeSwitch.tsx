import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      aria-label="Toggle Theme"
      bgColor="whiteAlpha.200"
      color="white"
      _hover={{ color: "white", bgColor: "whiteAlpha.300" }}
      _dark={{ color: "gray.300" }}
      onClick={toggleColorMode}
    />
  );
};
