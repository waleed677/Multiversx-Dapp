import { Box, Button } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import * as DappUI from "@multiversx/sdk-dapp/UI";

const Home = () => {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Logo />
      </Box>
      <Footer />;
    </>
  );
};

export default Home;
