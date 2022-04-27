import {
  Box,
  Heading,
  UnorderedList,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import { ReactChild, ReactChildren } from "react";

interface PropSchema {
  title: string;
  items: ReactChild[] | ReactChildren[];
}

export const JobSnippet = ({ title, items }: PropSchema) => {
  return (
    <Box my="2em">
      <Heading as="h1" fontSize="mc" mt="2px">
        {title}
      </Heading>
      <UnorderedList fontSize="15" my="0.8em" color="gray.500">
        {items.map((item, i) => {
          return <ListItem key={i}>{item}</ListItem>;
        })}
      </UnorderedList>
    </Box>
  );
};
