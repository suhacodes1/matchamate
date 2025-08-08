import {
  Box,
  Heading,
  SimpleGrid,
  Container,
  InputGroup,
  InputLeftElement,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import CafeCard from "../components/CafeCard";
import { cafes } from "../data/cafes";
import { useState } from "react";

export default function CafesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCafes = cafes.filter((cafe) =>
    cafe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cafe.suburb.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const bg = useColorModeValue("pink.50", "pink.900");

  return (
    <Box bg={bg} minH="100vh" py={10}>
      <Container maxW="6xl">
        <Heading mb={4} color="pink.600">
          Top Matcha Cafes in Melbourne
        </Heading>

        <InputGroup mb={6}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="pink.400" />
          </InputLeftElement>
          <Input
            placeholder="Search by name or suburb..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            bg="white"
            borderColor="pink.200"
            focusBorderColor="pink.400"
            rounded="full"
          />
        </InputGroup>

        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {filteredCafes.map((cafe) => (
            <CafeCard key={cafe.id} cafe={cafe} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
