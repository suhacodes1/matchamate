import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Box, Text, VStack, Heading, Divider } from "@chakra-ui/react";
import { cafes } from "../../data/cafes";
import RatingSection from "../../components/RatingSection"; 
import { Cafe } from "../../data/cafes";

const CafePage = () => {
  const router = useRouter();
  const { id } = router.query;


const [cafe, setCafe] = useState<Cafe | null>(null);




  useEffect(() => {
    if (id) {
      const found = cafes.find((c) => c.id === parseInt(id as string));
      setCafe(found ?? null);

    }
  }, [id]);

  if (!cafe) return <Text>Loading...</Text>;

  return (
    <Box p={8}>
      <VStack align="start" spacing={4}>
        <Heading>{cafe.name}</Heading>
        <Text fontSize="lg" color="gray.500">{cafe.suburb}</Text>
        <Text>{cafe.description}</Text>
        <Text fontWeight="bold">Tags: {cafe.tags.join(", ")}</Text>
        <Divider />
        <RatingSection cafeId={cafe.id} />
      </VStack>

      
    </Box>
  );
};

export default CafePage;
