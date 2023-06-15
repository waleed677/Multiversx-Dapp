import { Box, Button } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import * as DappUI from "@multiversx/sdk-dapp/UI";
import Social from "../components/Social";

const Home = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        py={5}
      >
        <Logo />
        <Box
          display="flex"
          flexDirection={["column", "row"]}
          justifyContent={["center", "space-between"]}
          alignItems="center"
          gap={8}
        >
          <Social />
          <Button bg="white" size={["sm", "lg"]} borderRadius={["md", "full"]}>
            Connect Wallet
          </Button>
        </Box>
      </Box>
      <Footer />;
    </>
  );
};

export default Home;
