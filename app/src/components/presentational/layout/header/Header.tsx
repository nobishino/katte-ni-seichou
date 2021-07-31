import { VFC } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import {
  Flex,
  Spacer,
  Image,
  Box,
  Heading,
  Center,
  Link,
} from '@chakra-ui/react';

export const Header: VFC = () => (
  <Link w="100%" as={ReactLink} to="/" style={{ textDecoration: 'none' }}>
    <Flex bg="blue.700" w="100%" color="white">
      <Box>
        <Image
          src={`${process.env.PUBLIC_URL}/logo_katsunari.png`}
          boxSize="100px"
          objectFit="cover"
        />
      </Box>
      <Center>
        <Heading as="h2" size="3xl" pl={8}>
          勝 成 会
        </Heading>
        <Heading color="blue.700" as="h2" size="3xl">
          するな
        </Heading>
      </Center>
      <Spacer />
    </Flex>
  </Link>
);
