import {
  VStack,
  HStack,
  Avatar,
  Stack,
  Heading,
  ListItem,
  List,
} from '@chakra-ui/react';
import { VFC } from 'react';
import data from '../../../data/profiles.json';

export const Member: VFC = () => (
  <VStack>
    {data.profiles.map((profile) => (
      <HStack spacing={8}>
        <VStack>
          <Avatar size="2xl" name={profile.name} src={profile.image} />
          <Heading size="lg">{profile.name}</Heading>
        </VStack>

        <Stack>
          <Heading size="md">関心ごと</Heading>
          <List pl={4}>
            {profile.interests.map((item) => (
              <ListItem>{item}</ListItem>
            ))}
          </List>
          <Heading size="md">やりたいこと</Heading>
          <List pl={4}>
            {profile.wannado.map((item) => (
              <ListItem>{item}</ListItem>
            ))}
          </List>
        </Stack>
      </HStack>
    ))}
  </VStack>
);
