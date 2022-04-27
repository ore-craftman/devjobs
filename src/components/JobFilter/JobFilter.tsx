import { Flex, Box, Button, Checkbox } from "@chakra-ui/react";
import { SearchInput } from "../../components/SearchInput";
import { MdLocationPin, MdSearch } from "react-icons/md";
import { useState } from "react";

export const JobFilter = () => {
  const [byCompanies, setByCompanies] = useState("");
  const [byLocation, setByLocation] = useState("");
  const [fulltime, setFulltime] = useState(false);

  const filterHandler = (e) => {
    e.preventDefault();
    const data = { byCompanies, byLocation, fulltime };
    console.log(data);
  };

  return (
    <form onSubmit={filterHandler}>
      <Box
        display={{ md: "flex" }}
        justifyContent="space-between"
        bgColor="white"
        boxShadow="md"
        borderRadius="8px"
        mt={{ base: "-9", md: "-6" }}
      >
        <Flex
          grow={1}
          align="center"
          py="0.4em"
          px="1.3em"
          borderRight={{ md: "1px" }}
          borderRightColor={{ md: "gray.100" }}
        >
          <SearchInput
            icon={MdSearch}
            holder="Filter by companies..."
            value={byCompanies}
            stateHandler={setByCompanies}
          />
        </Flex>

        <Flex
          grow={1}
          align="center"
          py="0.4em"
          px="1.3em"
          borderRight={{ md: "1px" }}
          borderRightColor={{ md: "gray.100" }}
        >
          <SearchInput
            icon={MdLocationPin}
            value={byLocation}
            stateHandler={setByLocation}
            holder="Filter by location..."
          />
        </Flex>

        <Flex
          grow={1}
          align="center"
          py="0.4em"
          px="1.3em"
          justify="space-between"
        >
          <Checkbox
            colorScheme="gray"
            _dark={{ borderColor: "gray.200" }}
            onChange={() => (fulltime ? setFulltime(false) : setFulltime(true))}
            size="sm"
            color="gray.600"
          >
            Full Time Only
          </Checkbox>

          <Button
            type="submit"
            colorScheme="facebook"
            bgColor="bsBlue"
            color="white"
            size="sm"
          >
            Search
          </Button>
        </Flex>
      </Box>
    </form>
  );
};
