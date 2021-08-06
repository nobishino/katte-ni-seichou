import {
  Stack,
  Heading,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { VFC } from 'react';

export const Sidenav: VFC = () => (
  <Stack
    p={8}
    direction="column"
    h="100%"
    bgColor={{ base: 'yellow.100', md: 'white' }}
  >
    <Heading as="h6" size="md" fontWeight="bold">
      勝成会
    </Heading>
    <UnorderedList
      style={{ borderLeft: '1px dashed #aaaaaa', listStyleType: 'none' }}
    >
      <ListItem pl={4} pt={2} color="blue.500">
        <Link as={ReactLink} to="/">
          勝成会とは？
        </Link>
      </ListItem>
      <ListItem pl={4} pt={2} color="blue.500">
        <Link as={ReactLink} to="/member">
          同志紹介
        </Link>
      </ListItem>
    </UnorderedList>
    <Heading as="h6" size="md">
      サイト外リンク
    </Heading>
    <UnorderedList
      style={{ borderLeft: '1px dashed #aaaaaa', listStyleType: 'none' }}
    >
      <ListItem pl={4} color="blue.500">
        <Link
          href="https://github.com/nobishino/katte-ni-seichou"
          target="_blank"
        >
          Github(Website)
        </Link>
      </ListItem>
    </UnorderedList>
  </Stack>
);
