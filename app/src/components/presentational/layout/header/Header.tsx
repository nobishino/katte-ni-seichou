import { VFC } from 'react';
import { Flex, Spacer, Image, Box, Heading, Center } from '@chakra-ui/react';

export const Header: VFC = () => (
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
      <Heading color="blue.700">するな</Heading>
    </Center>
    <Spacer />
  </Flex>
);
