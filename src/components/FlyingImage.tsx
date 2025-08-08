import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const MotionImage = motion(Image);

const FlyingImage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/blog");
  };

  return (
    <MotionImage
      src="/matcha.png"
      alt="Flying Strawberry Matcha"
      position="absolute"
     top={["180px", "1080px", "100px"]} 
      right={["20px", "40px", "80px"]}
      boxSize={["100px", "140px", "180px"]}
      borderRadius="full"
      objectFit="cover"
      initial={{ y: -100, opacity: 0, scale: 0.7 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
      whileHover={{ scale: 1.05, rotate: 2 }}
      boxShadow="xl"
      zIndex={1}
      cursor="pointer"
      onClick={handleClick}
    />
  );
};

export default FlyingImage;

