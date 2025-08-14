import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

const reviews = [
  {
    title: "Little Rogue – 7/10",
    content:
      "A decent matcha, nothing too special. Got the regular hot matcha and while it was smooth, it lacked a stronger flavor kick. Great vibes inside though.",
  },
  {
    title: "Bloomwood Cafe – 10/10",
    content:
      "Absolutely amazing! The strawberry matcha was perfectly sweet, not overpowering, and balanced beautifully with the matcha. A total favorite.",
  },
  {
    title: "Tori’s – 1000/10",
    content:
      "Everything I ever wanted in a matcha. Perfectly whisked, bold, smooth, and rich with flavor. Worth every dollar and more.",
  },
  {
    title: "Matcha Kono – -1010/10",
    content:
      "Honestly? No. Tastes watered down and weak. Only drank it because it's on campus and convenient. This is a last resort situation.",
  },
  {
    title: "Supersede – 3/10",
    content:
      "Tasted like plain milk. Barely any matcha flavour and the strawberry jam at the bottom just didn’t come through at all.",
  },
  {
    title: "Miyama – 5/10",
    content:
      "It was okay. Not terrible, not great. Slightly bitter and underwhelming. Might be better cold.",
  },
  {
    title: "Balibola – -10283/10",
    content:
      "Nope. Wouldn’t recommend. Tasted weird, looked weird, just no.",
  },
  {
    title: "Puzzle – 10/10",
    content:
      "Delicious! The flavor was vibrant, not too sweet, and had a creamy finish. Total vibe.",
  },
  {
    title: "Matcha Mami – 100/10",
    content:
      "So so good. One of the best iced matchas I’ve had in ages. Smooth, sweet, and just the right amount of earthy.",
  },
  {
    title: "Naau Cafe – 10/10",
    content:
      "Consistently good. Always a strong matcha hit and really pleasant presentation. They know what they’re doing.",
  },
  {
    title: "Cafe Carlton – 8/10",
    content:
      "Loved the strawberry element, but wish the matcha flavor came through a bit stronger. Still a really nice experience.",
  },
    {
    title: "Nana's Green Tea – 7/10",
    content:
      "A bit on the pricey end but the matcha chocolatte latte was reallyyy good. The matcha cheesecake was really rich in matcha as well. The mochi however in the drinks were bland and too doughy.",
  },
];

const BlogPage = () => {
  const cardBg = useColorModeValue("pink.50", "pink.900");
  const cardAltBg = useColorModeValue("green.50", "green.900");

  return (
    <Box bg="pink.25" minH="100vh" py={12}>
      <Container maxW="4xl">
        <Heading mb={10} textAlign="center" color="pink.600">
          Blog 
        </Heading>

        {reviews.map((review, index) => (
          <Flex
            key={index}
            direction={index % 2 === 0 ? "row" : "row-reverse"}
            mb={8}
            gap={6}
            align="flex-start"
          >
            <Box
              flex="1"
              bg={index % 2 === 0 ? cardBg : cardAltBg}
              p={6}
              borderRadius="xl"
              boxShadow="md"
              transition="all 0.2s"
              _hover={{ boxShadow: "lg", transform: "scale(1.01)" }}
            >
              <Heading size="md" mb={3} color="green.700">
                {review.title}
              </Heading>
              <Divider mb={3} borderColor="green.200" />
              <Text fontSize="md" color="gray.700">
                {review.content}
              </Text>
            </Box>
          </Flex>
        ))}
      </Container>
    </Box>
  );
};

export default BlogPage;
