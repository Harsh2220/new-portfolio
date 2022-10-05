import { Stack, Heading, Box } from "@chakra-ui/react";

function NewHero() {
  return (
    <Stack minH={"100vh"} alignItems="center" justifyContent={"center"}>
      <Box>
        <Heading fontSize={"lg"} lineHeight={"0.5px"} textAlign="right">
          HELLO, I AM HARSH 👋
        </Heading>
        <Heading fontSize={["3rem", "4rem", "6rem"]}>FULL STACK</Heading>
        <Heading fontSize={["3rem", "4rem", "6rem"]}>DEVELOPER</Heading>
      </Box>
    </Stack>
  );
}

export default NewHero;