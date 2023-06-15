import type { NextPage } from 'next';
import {
  ListItem,
  Text,
  OrderedList,
  UnorderedList,
  Flex,
  Link,
} from '@chakra-ui/react';
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
        <Text mb={4}>Accel Finance </Text>
        <Text mb={4}>
          We have hardcoded a setup for three different operations to simplify
          things. These are:
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
        <CardWrapper mb={4}>
          <Text mb={4}>
            Now let us see what other valuable tools are included.
          </Text>
          <Text mb={4}>
            You can get the data of currently logged-in users and network state.
            These are:
          </Text>
          <OrderedList>
            <ListItem>User data such as: address, nonce, balance.</ListItem>
            <ListItem>
              User logging in state: pending, error, loggedIn.
            </ListItem>
            <ListItem>
              Login info state: loginMethod, expires, loginToken, signature.
            </ListItem>
          </OrderedList>
        </CardWrapper>
        <Flex gap={8} flexWrap="wrap" justifyContent="center" mb={4}>
          <GetUserDataDemo />
          <GetLoginInfoDemo />
          <GetLoggingInStateDemo />
        </Flex>
        <CardWrapper mb={4}>
          <Text>You will also get a couple of other tools, like:</Text>
          <UnorderedList>
            <ListItem>
              Authenticated component - wrapper to check the auth state
            </ListItem>
            <ListItem>
              ActionButton component - styled action button (don&apos;t use it
              for in-app navigation)
            </ListItem>
            <ListItem>LoginComponent - component with 3 auth options</ListItem>
            <ListItem>
              LoginModalButton component - ready to use modal with
              LoginComponent
            </ListItem>
            <ListItem>
              Besides the mentioned already hooks, you will get all the auth
              hooks that are building blocks for the LoginComponents to build
              the structures that suit you best.
            </ListItem>
            <ListItem>
              The API access can be configured, masked, and limited only to the
              dapp.
            </ListItem>
            <ListItem>And of course Chakra UI and NextJS framework</ListItem>
          </UnorderedList>
        </CardWrapper>
        <CardWrapper>
          <Text>Documentation, roadmap, and more improvements soon!</Text>
          <Text>
            Check the{' '}
            <Link
              href="https://github.com/xdevguild"
              textDecoration="underline"
            >
              xDevGuild
            </Link>
          </Text>
        </CardWrapper>
      </Authenticated>
    </MainLayout>
  );
};

export default Home;
