import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import theme from "./style/style.config";
import { DappProvider } from "@multiversx/sdk-dapp/wrappers";

function App() {
  const environment = import.meta.env.VITE_APP_MULTIVERSX_CHAIN;
  return (
    <DappProvider environment={environment}>
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    </DappProvider>
  );
}

export default App;
