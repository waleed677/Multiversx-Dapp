import { Box, Stack } from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaTelegram, FaMedium } from "react-icons/fa";

const Social = () => {
  return (
    <Stack direction={["row"]} spacing="24px">
      <a href="https://twitter.com/AccelFinance" target="_blank">
        <FaTwitter style={{ color: "#fff", fontSize: "1.5rem" }} />
      </a>
      <a href="#" target="_blank">
        <FaYoutube style={{ color: "#fff", fontSize: "1.5rem" }} />
      </a>
      <a href="#" target="_blank">
        <FaTelegram style={{ color: "#fff", fontSize: "1.5rem" }} />
      </a>
      <a
        href="https://medium.com/@financeaccel/accel-finance-the-future-of-venture-capital-on-multiversx-blockchain-8bb6eb0d54e6"
        target="_blank"
      >
        {" "}
        <FaMedium style={{ color: "#fff", fontSize: "1.5rem" }} />
      </a>
    </Stack>
  );
};

export default Social;
