import {
  Box,
  Flex,
  Heading,
  Spacer,
  Button,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Box bg="green.50" px={6} py={4} boxShadow="sm">
      <Flex align="center">
        <Heading size="md" color="green.600">
          <NextLink href="/" passHref legacyBehavior>
            <ChakraLink
              _hover={{ textDecoration: "none", color: "green.500" }}
              fontWeight="semibold"
            >
              MatchaMate 
            </ChakraLink>
          </NextLink>
        </Heading>

        <Spacer />

        <HStack spacing={4}>
          <NextLink href="/cafes" passHref legacyBehavior>
            <ChakraLink>
              <Button colorScheme="green" variant="ghost">
                Cafes
              </Button>
            </ChakraLink>
          </NextLink>

          <NextLink href="/blog" passHref legacyBehavior>
            <ChakraLink>
              <Button colorScheme="green" variant="ghost">
                Blog
              </Button>
            </ChakraLink>
          </NextLink>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
