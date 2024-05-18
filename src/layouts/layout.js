import { Box, Flex, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Layout() {
  return (
    <Flex bg="#1B262C">
      <Box w={{ base: "20%", md: "10%", lg: "20%" }}>
        <Navbar />
      </Box>
      <Box w={{ base: "80%", md: "90%", lg: "80%" }} ps="1px">
        <Flex bg="#1B262C" h="84px" mb="1px" alignItems="center">
          <Text as="h2" color="#fff" fontSize="25px" ms={2}>
            Dashboard
          </Text>
        </Flex>
        <Outlet />
      </Box>
    </Flex>
  );
}
