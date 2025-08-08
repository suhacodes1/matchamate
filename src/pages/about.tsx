import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";

const AboutPage = () => {
  const bgColor = useColorModeValue("green.50", "green.900");
  const textColor = useColorModeValue("gray.700", "gray.100");

  return (
    <Box bg={bgColor} minH="100vh" py={16}>
      <Container maxW="5xl"> 
        <VStack spacing={10} align="center" textAlign="center">
  
          <Heading size="2xl" color="green.700">
            About Me
          </Heading>

          <Divider borderColor="green.400" w="100px" />

          <Text fontSize="xl" maxW="3xl" color={textColor}>
            Hey there! I’m <strong>Suha</strong> — a proud matcha enthusiast with a soft spot for good vibes and great design.
          </Text>

          <Text fontSize="xl" maxW="3xl" color={textColor}>
            <strong>MatchaMate</strong> was brewed (pun intended) out of my passion for both aesthetics and matcha. Whether it’s
            a chilled yuzu spritz or a creamy tiramisu matcha, I’m here to help you discover Melbourne’s finest and most creative
            matcha cafés.
          </Text>

          <Text fontSize="xl" maxW="3xl" color={textColor}>
            This website was created to give you guys an insight on my matcha obsession.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default AboutPage;
