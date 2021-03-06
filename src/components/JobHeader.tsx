import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";

export const JobHeader = ({ job }: any) => {
  return (
    <Flex
      bgColor="orange.300"
      boxShadow="lg"
      borderRadius="6px"
      align="center"
      mt={{ base: "-9" }}
      mb="1em"
    >
      <Box px={{ base: "4px", md: "1.7em" }} py="2em">
        <Heading
          as="h1"
          fontSize={{ base: "sm", md: "md" }}
          textAlign="center"
          color="white"
        >
          {job.company.split(" " || "-")[0]}
        </Heading>
      </Box>
      <Box
        flexGrow={1}
        px={{ base: "8px", md: "1.7em" }}
        flexWrap="wrap"
        borderRightRadius="4px"
        alignSelf="stretch"
        bgColor="white"
        py="2em"
      >
        <Flex justify="space-between" align="center">
          <VStack>
            <Box color="gray.700">
              <Heading as="h1" fontSize={{ base: "sm", md: "md" }} mb="4px">
                {job.company.split(" " || "-")[0]}
              </Heading>
              <Text fontSize={{ base: "xs", md: "sm" }}>{job.companyURL}</Text>
            </Box>
          </VStack>

          <Box>
            <Button
              size="xs"
              p={{ base: "8px", md: "1.4em" }}
              bgColor="gray.200"
              borderRadius="4px"
              color="blue.700"
            >
              <a href={`https://${job.companyURL}`} target="_blank">
                Company Site
              </a>
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
