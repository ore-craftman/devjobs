import { Text, Code, Box, Heading, Center, VStack } from "@chakra-ui/react";
import { WrapperMax } from "../components/WrapperMax";

const Index = () => (
  <WrapperMax>
    <Box height="100vh">
      <Center height="75%">
        <VStack>
          <Heading as="h1">DEVJOBS</Heading>
          <Text>Coming soon </Text>
        </VStack>
      </Center>

      <Center>
        <Text>
          Powered By <Code>{" <Oreoluwa />"}</Code>
        </Text>
      </Center>
    </Box>
  </WrapperMax>
);

export default Index;
