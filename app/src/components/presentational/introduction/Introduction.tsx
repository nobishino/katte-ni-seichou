import { VFC } from 'react';
import {
  Text,
  Heading,
  Stack,
  VStack,
  List,
  ListIcon,
  ListItem,
  HStack,
  Box,
} from '@chakra-ui/react';

import { MdCheckCircle, MdArrowForward } from 'react-icons/md';
import { IconType } from 'react-icons/lib';

export const Introduction: VFC = () => (
  <VStack w="45%">
    <Stack w="100%">
      <VStack pt={6}>
        <Heading as="h3" size="lg">
          勝成会ってなに？
        </Heading>
        <Text fontSize="lg" style={{ textIndent: '1rem' }} w="100%">
          勝成会は、勝手に成長する全ての人を<strong>応援しない</strong>
          コミュニティです。
          誰かが企画したイベントに勝手に参加したり、興味のあるイベントを勝手に開催することが可能です。
          <strong>勝手に成長</strong>する
          時間を共有できる仲間を集うプラットフォームとして勝成会をぜひご活用ください。
        </Text>
        <Text fontSize="lg" style={{ textIndent: '1rem' }} w="100%">
          これらの活動は、主にSlackやtwitter、discordで行われています。
        </Text>
      </VStack>
      <VStack pt={6}>
        <Heading as="h3" size="lg">
          どんな活動をしているの？
        </Heading>
        <Text fontSize="lg" style={{ textIndent: '1rem' }} w="100%">
          最近では、勝手に成長したいメンバーによる輪読会が開催されています。
          一人では読み進めることが難しい内容でも、仲間と助け合うことで理解をより一層深めることができます。
        </Text>
        <Text fontSize="lg" style={{ textIndent: '1rem' }} w="100%">
          他にもアプリケーション開発がしたい。歴史の知識を深めたい。
          勝手に成長したい分野であればゲームなど勝成のポリシーに反しない限り、
          あなたの勝成〇〇部を自由に立ち上げ活動頂いて構いません。
        </Text>
      </VStack>
      <VStack pt={6}>
        <Heading as="h3" size="lg">
          最近のイベント(2021年7月27日現在)
        </Heading>
        <List spacing={3}>
          <ListItem p={2}>
            <HStack>
              <ListIcon
                as={MdCheckCircle as IconType}
                color="green.500"
                fontSize="lg"
              />
              <Box fontWeight="bold" fontSize="md">
                グラフ理論輪読会 7月22日(木) 全七回完結
              </Box>
            </HStack>
          </ListItem>
          <ListItem p={2}>
            <HStack>
              <ListIcon
                as={MdArrowForward as IconType}
                color="blue.500"
                fontSize="lg"
              />
              <Box fontWeight="bold" fontSize="md">
                ふつうのLinuxプログラミング 輪読会 進行中
              </Box>
            </HStack>
          </ListItem>
          <ListItem p={2}>
            <HStack>
              <ListIcon
                as={MdArrowForward as IconType}
                color="blue.500"
                fontSize="lg"
              />
              <Box fontWeight="bold" fontSize="md">
                暗号技術入門 輪読会 進行中
              </Box>
            </HStack>
          </ListItem>
        </List>
      </VStack>
    </Stack>
  </VStack>
);
