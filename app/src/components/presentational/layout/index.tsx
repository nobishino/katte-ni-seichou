import { VFC } from 'react';
import { VStack, Box } from '@chakra-ui/react';

import { Header } from './header';

type Props = {
  children: React.ReactNode;
};

const Layout: VFC<Props> = ({ children }: Props) => (
  // const isMobile = useBreakpointValue({ base: true, md: false });

  <VStack>
    <Header />
    <Box>{children}</Box>
  </VStack>
);
export default Layout;
