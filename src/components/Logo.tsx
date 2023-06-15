import { Box, Image } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Box>
      <Image
        src="logo.png"
        alt="Accel Finance"
        width="150"
        height="150"
        boxSize={["100px", "150px"]}
        objectFit="contain"
      />
    </Box>
  );
};

export default Logo;
