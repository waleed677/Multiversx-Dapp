import { Container, Box } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box
      height="120px"
      bgColor="dappTemplate.dark.darker"
      color="dappTemplate.white"
      display="flex"
      alignItems="center"
    >
      <Container
        maxW="container.xl"
        fontSize="sm"
        fontWeight="normal"
        textAlign="center"
      >
        <Box>Accel Finance © 2023. All Rights Reserved</Box>
      </Container>
    </Box>
  );
};
