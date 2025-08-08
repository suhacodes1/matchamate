import {
  Box,
  Text,
  Textarea,
  Button,
  VStack,
  HStack,
  IconButton,
  Select,
  useToast,
} from "@chakra-ui/react";
import { StarIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";

interface Comment {
  id: number;
  rating: number;
  comment: string;
}

const RatingSection = ({ cafeId }: { cafeId: number }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const toast = useToast();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(`comments-${cafeId}`) || "[]");
    setComments(saved);
  }, [cafeId]);

  useEffect(() => {
    localStorage.setItem(`comments-${cafeId}`, JSON.stringify(comments));
  }, [comments, cafeId]);

  const handleSubmit = () => {
    if (!rating || !comment.trim()) {
      toast({
        title: "Rating and comment required.",
        status: "warning",
        duration: 2500,
        isClosable: true,
      });
      return;
    }

    if (editingId) {
      setComments((prev) =>
        prev.map((c) =>
          c.id === editingId ? { ...c, rating, comment } : c
        )
      );
      toast({ title: "Comment updated.", status: "success" });
    } else {
      setComments((prev) => [
        ...prev,
        { id: Date.now(), rating, comment },
      ]);
      toast({ title: "Comment added!", status: "success" });
    }

    // Reset form
    setRating(0);
    setComment("");
    setEditingId(null);
  };

  const handleEdit = (entry: Comment) => {
    setRating(entry.rating);
    setComment(entry.comment);
    setEditingId(entry.id);
  };

  const handleDelete = (id: number) => {
    setComments((prev) => prev.filter((c) => c.id !== id));
    toast({ title: "Comment deleted.", status: "info" });
  };

  const sortedComments = [...comments].sort((a, b) =>
    sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating
  );

  return (
    <Box mt={8}>
      <Text fontSize="xl" fontWeight="bold" mb={3}>
        Leave a Rating
      </Text>

      {/* ⭐ Star Input */}
      <HStack mb={2}>
        {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => (
          <StarIcon
            key={star}
            boxSize={6}
            cursor="pointer"
            color={star <= (hover || rating) ? "pink.400" : "gray.300"}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          />
        ))}
      </HStack>

      {/* 📝 Comment Box */}
      <Textarea
        placeholder="Write your thoughts here..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        mb={3}
      />

      <Button colorScheme="green" onClick={handleSubmit}>
        {editingId ? "Update" : "Submit"}
      </Button>

      {/* 📈 Sorting Options */}
      <HStack justify="space-between" mt={6} mb={2}>
        <Text fontWeight="semibold">All Ratings</Text>
        <Select
          w="200px"
          size="sm"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
        >
          <option value="desc">Sort by Highest Rating</option>
          <option value="asc">Sort by Lowest Rating</option>
        </Select>
      </HStack>

      {/* 💬 Comments Section */}
      <VStack spacing={3} align="stretch">
        {sortedComments.length === 0 ? (
          <Text>No feedback yet.</Text>
        ) : (
          sortedComments.map((entry) => (
            <Box
              key={entry.id}
              borderWidth="1px"
              borderRadius="md"
              p={3}
              shadow="sm"
            >
              <HStack spacing={1}>
                {Array.from({ length: entry.rating }).map((_, i) => (
                  <StarIcon key={i} color="pink.400" />
                ))}
              </HStack>
              <Text mt={1}>{entry.comment}</Text>
              <HStack mt={2}>
                <Button
                  size="xs"
                  leftIcon={<EditIcon />}
                  onClick={() => handleEdit(entry)}
                >
                  Edit
                </Button>
                <Button
                  size="xs"
                  colorScheme="red"
                  leftIcon={<DeleteIcon />}
                  onClick={() => handleDelete(entry.id)}
                >
                  Delete
                </Button>
              </HStack>
            </Box>
          ))
        )}
      </VStack>
    </Box>
  );
};

export default RatingSection;
