import type { NextPage } from 'next';
import { Text, Flex } from '@chakra-ui/react';
import { MainLayout } from '../components/ui/MainLayout';
import { HeaderMenu } from '../components/ui/HeaderMenu';
import { HeaderMenuButtons } from '../components/ui/HeaderMenuButtons';
import { SimpleDemo } from '../components/demo/SimpleDemo';
import { GetUserDataDemo } from '../components/demo/GetUserDataDemo';
import { GetLoggingInStateDemo } from '../components/demo/GetLoggingInStateDemo';
import { GetLoginInfoDemo } from '../components/demo/GetLoginInfoDemo';
import { Authenticated } from '../components/tools/Authenticated';
import { CardWrapper } from '../components/ui/CardWrapper';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <CardWrapper mb={4}>
        <Text mb={4} fontSize={'6xl'} textAlign={'center'}>
          ACCEL FINANCE Token{' '}
        </Text>
        <Text mb={4} textAlign={'center'}>
          Accel Finance is a cutting-edge financial technology company that has
          recently created their own token, $ACCEL, on the blockchain MultiversX
        </Text>
      </CardWrapper>
      <Authenticated
        spinnerCentered
        fallback={
          <Text fontWeight="bold" fontSize="2xl" textAlign="center" mt={8}>
            Connect your wallet to get Started!
          </Text>
        }
      >
        <SimpleDemo />

        <Flex gap={8} flexWrap="wrap" justifyContent="center" mb={4}>
          <GetUserDataDemo />
          <GetLoginInfoDemo />
          <GetLoggingInStateDemo />
        </Flex>
      </Authenticated>
    </MainLayout>
  );
};

export default Home;
