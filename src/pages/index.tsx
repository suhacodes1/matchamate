import { Box, Heading, Text, Button, VStack, Container } from "@chakra-ui/react";
import Link from "next/link";
import FlyingImage from "../components/FlyingImage";
import AboutImage from "@/components/AboutImage";

export default function Home() {
  return (
    <Box
      position="relative"
      bgGradient="linear(to-br, green.100, pink.100)"
      minH="80vh"
      display="flex"
      alignItems="center"
      overflow="hidden"
    >
      <FlyingImage />

      <AboutImage />

      <Container maxW="3xl">
        <VStack align="start" spacing={8}>
          <Heading size="2xl" color="green.700">
            Your Guide to Melbourne's Best Matcha Cafes 
          </Heading>
          <Text fontSize="lg" color="green.800">
            Discover real matcha spots loved by locals — from Footscray to Fitzroy. No fluff. No closed cafes. Just pure green goodness.
          </Text>
          <Link href="/cafes">
            <Button colorScheme="green" size="lg" rounded="full" px={8}>
              Browse Cafes
            </Button>
          </Link>
        </VStack>
      </Container>
    </Box>
  );
}
