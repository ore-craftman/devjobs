import { Box, Center, VStack, HStack, Heading } from "@chakra-ui/react";
import Link from "next/link";
import moment from "moment";

export const JobCard = ({ data }: any) => {
  return (
    <Box
      display={{ md: "flex" }}
      justifyContent="space-between"
      alignItems="center"
      mt="12"
      flexWrap="wrap"
    >
      {data.jobsPrev.map((jobPrev) => {
        return (
          <Box
            width={{ md: "31%" }}
            _hover={{ boxShadow: "xl" }}
            my="5"
            position="relative"
            key={jobPrev.jobId}
          >
            <Link href={`/jobs/view/${jobPrev.jobId}`}>
              <a style={{ textDecoration: "none" }}>
                <Box
                  backgroundColor="orange.400"
                  p="5px"
                  borderRadius="10px"
                  w="1.8em"
                  position="absolute"
                  left="17px"
                  top="-13px"
                >
                  <Center>
                    <Heading fontSize="md" color="white" fontWeight="extrabold">
                      {jobPrev.company[0].toUpperCase()}
                    </Heading>
                  </Center>
                </Box>
                <Box
                  width={{ md: "100%" }}
                  borderRadius="6px"
                  py="2em"
                  px="1.3em"
                  backgroundColor="white"
                  boxShadow="lg"
                  border="1px"
                  borderColor="gray.100"
                  _dark={{ backgroundColor: "gray.700", border: "none" }}
                >
                  <HStack my="4px">
                    <Heading
                      as="h5"
                      fontSize="xs"
                      color="gray.400"
                      fontWeight="medium"
                    >
                      {moment(jobPrev.createdAt).startOf("day").fromNow()}
                    </Heading>
                    <Box
                      w="4px"
                      h="4px"
                      backgroundColor="gray.500"
                      borderRadius="full"
                    ></Box>
                    <Heading
                      as="h5"
                      fontSize="xs"
                      color="gray.400"
                      fontWeight="medium"
                    >
                      {jobPrev.type}
                    </Heading>
                  </HStack>
                  <VStack align="start">
                    <Heading as="h1" fontSize="md" my="2px">
                      {jobPrev.title
                        .split(" ")
                        .map((title) => title[0].toUpperCase() + title.slice(1))
                        .join(" ")}
                    </Heading>

                    <Heading
                      as="h5"
                      fontSize="xs"
                      color="gray.400"
                      fontWeight="medium"
                    >
                      {jobPrev.company}
                    </Heading>

                    <Heading
                      as="h5"
                      fontSize="xs"
                      color="blue.600"
                      pt="1.3em"
                      fontWeight="semibold"
                    >
                      {jobPrev.location}
                    </Heading>
                  </VStack>
                </Box>
              </a>
            </Link>
          </Box>
        );
      })}
    </Box>
  );
};
