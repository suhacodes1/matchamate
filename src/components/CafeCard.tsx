import {
  Box,
  Text,
  Badge,
  VStack,
  Button,
  Wrap,
  WrapItem,
  HStack,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Cafe } from "../data/cafes";
import NextLink from "next/link";

interface CafeCardProps {
  cafe: Cafe;
}

const CafeCard: React.FC<CafeCardProps> = ({ cafe }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      shadow="md"
      bg="white"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
    >
      <VStack align="start" spacing={3}>
        <Text fontSize="xl" fontWeight="bold" color="pink.600">
          {cafe.name}
        </Text>
        <Text color="gray.500">{cafe.suburb}</Text>

        <HStack spacing={1}>
          {Array.from({ length: Math.round(cafe.rating) }).map((_, i) => (
            <StarIcon key={i} color="pink.400" />
          ))}
          <Text>({cafe.rating})</Text>
        </HStack>

        <Wrap>
          {cafe.tags.map((tag, idx) => (
            <WrapItem key={idx}>
              <Badge colorScheme="pink">{tag}</Badge>
            </WrapItem>
          ))}
        </Wrap>

        <Text>
          {cafe.description.length > 100
            ? cafe.description.slice(0, 100) + "..."
            : cafe.description}
        </Text>

        <NextLink href={`/cafes/${cafe.id}`} passHref legacyBehavior>
          <Button
            as="a"
            colorScheme="pink"
            size="sm"
            rounded="full"
            mt={2}
          >
            Read More
          </Button>
        </NextLink>

        <a href={cafe.mapLink} target="_blank" rel="noopener noreferrer">
          <Button colorScheme="green" size="sm" variant="ghost">
            View on Map
          </Button>
        </a>
      </VStack>
    </Box>
  );
};

export default CafeCard;
