import React from "react";
import { Flex, Text } from "@chakra-ui/react";
const Footer = () => {
  return (
    <>
      <Flex
        flexDirection="column"
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding={5}
        bg="footer"
      >
        <Text alignContent="center" color="white" fontSize="18">
          © Copyright 2023 Accel Finance
        </Text>
      </Flex>
    </>
  );
};

export default Footer;
