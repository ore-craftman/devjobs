import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { MdCategory, MdLocationOn, MdAttachMoney } from "react-icons/md";
import { IoEyeSharp, IoArrowForwardOutline } from "react-icons/io5";
import { WrapperMax } from "../WrapperMax";
import { SelectInput } from "../Input/SelectInput";
import { SimpleInput } from "../Input/SimpleInput";
import { AddTo } from "../Input/AddTo";
import { JobSchema } from "./JobSchema";

export const JobForm = ({
  jobName,
  type,
  region,
  desc,
  companyTitle,
  companyURL,
  applURL,
  pay,
  requirements,
  tasks,
  title,
  formHandler,
}: JobSchema) => {
  const [jobTitle, setJobTitle] = useState(jobName ? jobName : "");
  const [jobType, setJobType] = useState(type ? type : "");
  const [jobRegion, setJobRegion] = useState(region ? region : "");
  const [jobDesc, setJobDesc] = useState(desc ? desc : "");
  const [companyName, setCompanyName] = useState(
    companyTitle ? companyTitle : ""
  );
  const [companyUrl, setCompanyUrl] = useState(companyURL ? companyURL : "");
  const [applUrl, setApplUrl] = useState(applURL ? applURL : "");

  const [jobPay, setJopPay]: [
    jobPay: number,
    setJobPay: React.Dispatch<React.SetStateAction<number>>
  ] = useState(pay ? pay : null);

  const [jobReqirements, setJobReqirements] = useState(
    requirements ? requirements : []
  );
  const [dailyTask, setDailyTask] = useState(tasks ? tasks : []);

  const dataHandler: any = (
    e: any,
    jobTitle: string,
    jobType: string,
    jobRegion: string,
    jobDesc: string,
    companyName: string,
    companyUrl: string,
    applUrl: string,
    jobPay: number,
    jobReqirements: string[],
    dailyTask: string[]
  ) => {
    e.preventDefault();
    formHandler({
      jobTitle,
      jobType,
      jobRegion,
      jobDesc,
      companyName,
      companyUrl,
      applUrl,
      jobPay,
      jobReqirements,
      dailyTask,
    });
  };

  return (
    <WrapperMax>
      <Box mt="1em">
        <Heading as="h4" fontSize="lg" mt="1.2em" mb="4px" color="gray.400">
          {title}
        </Heading>

        <Box mb="4em">
          <form
            onSubmit={(e) =>
              dataHandler(
                e,
                jobTitle,
                jobType,
                jobRegion,
                jobDesc,
                companyName,
                companyUrl,
                applUrl,
                jobPay,
                jobReqirements,
                dailyTask
              )
            }
          >
            <HStack
              bgGradient="linear(to-r, #676FE3, blue.300)"
              borderRadius={["8px", "12x"]}
              p={[4, 6]}
            >
              <Input
                color="whiteAlpha.700"
                type="text"
                fontSize={["xl", "2xl"]}
                placeholder="Your job title goes here..."
                border="none"
                isRequired={true}
                _focus={{ outline: "none" }}
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </HStack>

            <Flex justify="space-between" mt="1em" flexWrap="wrap">
              <Box w={["100%", "100%", "30%"]}>
                <SimpleInput
                  label="Company Name"
                  holder="Meta"
                  type="text"
                  required={true}
                  value={companyName}
                  stateHandler={setCompanyName}
                />
              </Box>
              <Box w={["100%", "100%", "30%"]}>
                <SimpleInput
                  URL={true}
                  label="Company URL"
                  holder="meta.com"
                  type="text"
                  required={true}
                  value={companyUrl}
                  stateHandler={setCompanyUrl}
                />
              </Box>
              <Box w={["100%", "100%", "30%"]}>
                <SimpleInput
                  URL={true}
                  label="Application URL"
                  holder="meta.com/careers"
                  type="text"
                  required={true}
                  value={applUrl}
                  stateHandler={setApplUrl}
                />
              </Box>
            </Flex>

            <Box mt="1em">
              <Flex flexWrap="wrap">
                {jobReqirements &&
                  jobReqirements[0] !== "" &&
                  jobReqirements.map((reqr, i) => {
                    return (
                      jobReqirements[i] !== "" &&
                      jobReqirements[i] !== " " && (
                        <Box
                          bgColor="gray.200"
                          px="1em"
                          py="0.2em"
                          borderRadius="2em"
                          fontSize="sm"
                          m="2px"
                          key={i}
                          _dark={{ bgColor: "gray.500" }}
                        >
                          {reqr}
                        </Box>
                      )
                    );
                  })}
              </Flex>
              <AddTo
                label="Requirements"
                holder="+ Add job requirements"
                value={jobReqirements}
                stateHandler={setJobReqirements}
              />
            </Box>

            <Flex justify="space-between" mt="1em" flexWrap="wrap">
              <Box w={["100%", "100%", "30%"]}>
                <SelectInput
                  label=" Type"
                  options={["Part Time", "Full Time", "Internship"]}
                  stateHandler={setJobType}
                  value={jobType}
                  icon={<MdCategory style={{ fontSize: "18px" }} />}
                  iconColor="orange.200"
                />
              </Box>

              <Box w={["100%", "100%", "30%"]}>
                <SelectInput
                  label="Region"
                  options={[
                    "US Only",
                    "North America Only",
                    "Europe Only",
                    "Americas Only",
                    "Asia Only",
                    "Africa Only",
                    "Remote Only",
                    "Canada Only",
                  ]}
                  stateHandler={setJobRegion}
                  value={jobRegion}
                  icon={<MdLocationOn style={{ fontSize: "18px" }} />}
                  iconColor="blue.100"
                />
              </Box>

              <Box w={["100%", "100%", "30%"]}>
                <FormControl w="100%" my="8px">
                  <FormLabel htmlFor="Pay" fontSize="xs">
                    Montly Pay
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
                      bgColor="purple.200"
                      _dark={{ bgColor: "purple.300" }}
                      color="black"
                    >
                      <MdAttachMoney style={{ fontSize: "18px" }} />
                    </Flex>

                    <Input
                      type="number"
                      placeholder="4500"
                      border="none"
                      isRequired={true}
                      value={!jobPay ? "" : jobPay}
                      onChange={(e) => setJopPay(parseFloat(e.target.value))}
                      _focus={{ border: "none" }}
                    />
                  </Flex>
                </FormControl>
              </Box>
            </Flex>

            <Box mt="1em">
              <FormControl>
                <FormLabel htmlFor="jobDesc" fontSize="xs">
                  Description
                </FormLabel>
                <Textarea
                  borderColor="gray.200"
                  borderRadius="6px"
                  isRequired={true}
                  rows={8}
                  resize="none"
                  _hover={{ borderColor: "gray.300" }}
                  _placeholder={{ color: "gray.400" }}
                  id="jobDesc"
                  value={jobDesc}
                  onChange={(e) => setJobDesc(e.target.value)}
                  placeholder="Enter job description here..."
                />
              </FormControl>
            </Box>

            <Box mt="1em">
              <Flex flexWrap="wrap">
                {dailyTask &&
                  dailyTask[0] !== "" &&
                  dailyTask.map((task, i) => {
                    return (
                      dailyTask[i] !== "" &&
                      dailyTask[i] !== " " && (
                        <Box
                          bgColor="gray.200"
                          px="1em"
                          py="0.2em"
                          borderRadius="2em"
                          fontSize="sm"
                          m="2px"
                          key={i}
                          _dark={{ bgColor: "gray.500" }}
                        >
                          {task}
                        </Box>
                      )
                    );
                  })}
              </Flex>
              <AddTo
                label="Job Tasks"
                holder="+ Add required employee tasks"
                value={dailyTask}
                stateHandler={setDailyTask}
              />
            </Box>

            <Flex mt="2em" align="center" justify="space-between">
              <Button
                fontSize="md"
                mt="12px"
                py="1.3em"
                borderRadius="4px"
                variant="outline"
                colorScheme="blue"
                isDisabled={true}
              >
                <IoEyeSharp />
                <Box ml="3px">Preview</Box>
              </Button>

              <Button
                fontSize="md"
                mt="12px"
                py="1.3em"
                borderRadius="4px"
                type="submit"
                bgColor="bsBlue"
                colorScheme="bgColor"
                color="white"
              >
                <Box mr="3px">Post Job</Box>
                <IoArrowForwardOutline />
              </Button>
            </Flex>
          </form>
        </Box>
      </Box>
    </WrapperMax>
  );
};
