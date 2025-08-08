
import { HStack, IconButton } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

interface StarRatingInputProps {
  rating: number;
  onChange: (value: number) => void;
}

const StarRatingInput = ({ rating, onChange }: StarRatingInputProps) => {
  return (
    <HStack>
      {Array.from({ length: 5 }, (_, index) => {
        const value = index + 1;
        return (
          <IconButton
            key={value}
            aria-label={`Rate ${value}`}
            icon={<StarIcon />}
            variant="ghost"
            colorScheme={value <= rating ? "pink" : "gray"}
            onClick={() => onChange(value)}
            onMouseEnter={() => onChange(value)}
          />
        );
      })}
    </HStack>
  );
};

export default StarRatingInput;