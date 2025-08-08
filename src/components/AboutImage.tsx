import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const MotionImage = motion(Image);

const AboutImage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/about");
  };

  return (
    <MotionImage
      src="/about.png"
      alt="About"
      position="absolute"
      bottom={["40px", "60px"]}
      right={["20px", "40px", "120px"]}
      boxSize={["80px", "120px", "160px"]}
      borderRadius="full"
      objectFit="cover"
      initial={{ x: 100, opacity: 0, scale: 0.7 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
      whileHover={{ scale: 1.05, rotate: -2 }}
      boxShadow="xl"
      zIndex={1}
      cursor="pointer"
      onClick={handleClick}
    />
  );
};

export default AboutImage;
