import { VFC } from 'react';
import {
  VStack,
  HStack,
  Stack,
  Box,
  useBreakpointValue,
  Spacer,
} from '@chakra-ui/react';

import { Header } from './header';
import { Sidenav } from './sidenav';

type Props = {
  children: React.ReactNode;
};

const Content: VFC<Props> = ({ children }: Props) => (
  <>
    <Box w={{ base: '95%', md: '25%' }} pt={6}>
      <Sidenav />
    </Box>
    <Box w={{ base: '95%', md: '50%' }} pt={6}>
      {children}
    </Box>
    <Spacer />
  </>
);

const Layout: VFC<Props> = ({ children }: Props) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <VStack>
      <Header />
      {isMobile ? (
        <Stack direction="column-reverse" w="100%" align="center">
          <Content>{children}</Content>
        </Stack>
      ) : (
        <HStack w="100%" align="start">
          <Content>{children}</Content>
        </HStack>
      )}
    </VStack>
  );
};

export default Layout;
