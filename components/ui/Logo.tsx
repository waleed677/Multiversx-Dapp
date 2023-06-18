import NextLink from 'next/link';
import { Box, Image } from '@chakra-ui/react';

export const Logo = () => {
  return (
    <NextLink href="/">
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        position="relative"
        userSelect="none"
      >
        <Image
          src="logo.png"
          width={'150'}
          height={'150'}
          alt="Accel Finance"
        />
      </Box>
    </NextLink>
  );
};
