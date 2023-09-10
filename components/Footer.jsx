import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
} from "@chakra-ui/react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <Box py="2" mt="28">
      <Container
        maxW="container.xl"
        as={Flex}
        gap="2"
        flexDir={["column", null, "row"]}
        justify={["center", null, "space-between"]}
        align={["center", null, "space-between"]}
      >
        <Text>Made With ❤️ By Harsh</Text>
        <HStack>
          <Link href="/Resume.pdf">
            <Text textDecoration={"underline"} fontSize={14} fontWeight={500}>
              Resume
            </Text>
          </Link>
          <IconButton
            variant="ghost"
            icon={<FiGithub />}
            rounded="full"
            aria-label="Github"
            onClick={() =>
              window.open("https://github.com/harsh2220", "_blank")
            }
          />
          <IconButton
            variant="ghost"
            icon={<FiLinkedin />}
            rounded="full"
            aria-label="Linkedin"
            onClick={() =>
              window.open("https://linkedin.com/in/harsh2220", "_blank")
            }
          />

          <IconButton
            variant="ghost"
            icon={<FiTwitter />}
            rounded="full"
            aria-label="Twitter"
            onClick={() =>
              window.open("https://twitter.com/HarshGa99484485", "_blank")
            }
          />
        </HStack>
      </Container>
    </Box>
  );
}
