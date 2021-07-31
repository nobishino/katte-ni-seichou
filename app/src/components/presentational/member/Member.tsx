import { VStack, HStack, Avatar, Stack, Text, Heading } from '@chakra-ui/react';
import { VFC } from 'react';
import data from '../../../data/profiles.json';

export const Member: VFC = () => (
  <VStack>
    {data.profiles.map((profile) => (
      <HStack spacing={8}>
        <VStack>
          <Heading size="md">{profile.name}</Heading>
          <Avatar size="xl" name={profile.name} src={profile.image} />
        </VStack>

        <Stack>
          <Heading size="md">関心ごと</Heading>
          <Text>{profile.interests}</Text>
          <Heading size="md">やりたいこと</Heading>
          <Text>{profile.wannado}</Text>
        </Stack>
      </HStack>
    ))}
  </VStack>
);
