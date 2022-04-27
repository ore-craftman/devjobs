import {
  Box,
  HStack,
  VStack,
  Heading,
  Button,
  Text,
  Container,
  Center,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { JobHeader } from "../../../components/JobHeader";
import { WrapperMin } from "../../../components/WrapperMin";
import moment from "moment";
import Link from "next/link";
import { JobSnippet } from "../../../components/JobSnippet";

const ViewJob = ({ job }) => {
  const router = useRouter();
  const { jobId } = router.query;

  return (
    <Box>
      <WrapperMin>
        <JobHeader job={job} />
        <Box
          p="2em"
          boxShadow="2xl"
          borderRadius="6px"
          mt="2em"
          mb="4em"
          _dark={{ bgColor: "gray.700" }}
        >
          <Box
            display={{ md: "flex" }}
            justifyContent="space-between"
            alignItems="center"
            mb="1em"
          >
            <Box>
              <HStack my="4px">
                <Heading
                  as="h5"
                  fontSize="xs"
                  color="gray.400"
                  fontWeight="medium"
                >
                  {moment(job.createdAt).startOf("day").fromNow()}
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
                  {job.type}
                </Heading>
              </HStack>

              <VStack align="start">
                <Heading as="h1" fontSize="xl" mt="2px">
                  {job.title
                    .split(" ")
                    .map((title) => title[0].toUpperCase() + title.slice(1))
                    .join(" ")}
                </Heading>
                <Text fontSize="sm" color="purple.400" fontWeight="medium">
                  {job.location}
                </Text>
              </VStack>
            </Box>

            <Box>
              <Button
                size="sm"
                colorScheme="blue"
                bgColor="bsBlue"
                borderRadius="4px"
              >
                <a href={`https://${job.applicationURL}`} target="_blank">
                  Apply Now
                </a>
              </Button>
            </Box>
          </Box>

          <VStack align="start">
            <Text fontSize="15" my="0.8em" color="gray.500">
              {job.desc}
            </Text>

            <JobSnippet title="Requirements" items={job.requirement} />
            <JobSnippet title="What You'll Do" items={job.activities} />
          </VStack>
        </Box>
      </WrapperMin>

      <VStack
        borderTop="1px"
        borderColor="gray.100"
        position="sticky"
        bgColor="white"
        bottom="0px"
        zIndex={2}
        py="1.5em"
      >
        <Container maxWidth="container.md">
          <Box
            display={{ md: "flex" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <VStack align="start">
              <Heading as="h1" fontSize="md">
                {job.title
                  .split(" ")
                  .map((title) => title[0].toUpperCase() + title.slice(1))
                  .join(" ")}
              </Heading>
              <Text fontSize="xs" color="gray.400" fontWeight="medium">
                {job.company}
              </Text>
            </VStack>

            <Box>
              <Button
                size="sm"
                colorScheme="blue"
                bgColor="bsBlue"
                borderRadius="4px"
              >
                <a href={`https://${job.applicationURL}`} target="_blank">
                  Apply Now
                </a>
              </Button>
            </Box>
          </Box>
        </Container>
      </VStack>
    </Box>
  );
};

export async function getServerSideProps({ req }) {
  const res = await fetch(
    `${
      process.env.ENVIRONMENT === "local"
        ? process.env.LOCAL_URL
        : process.env.REMOTE_URL
    }/api/jobs`
  );
  const data = await res.json();
  return { props: { job: data.jobsPrev[0] } };
}

export default ViewJob;
