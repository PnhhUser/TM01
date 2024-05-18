import {
  Badge,
  Box,
  Checkbox,
  Flex,
  HStack,
  IconButton,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { CiCirclePlus, CiEdit, CiSearch, CiTrash } from "react-icons/ci";
import Logo from "../logo.svg";

export default function Users() {
  return (
    <>
      <Flex
        p={1}
        py={3}
        bg="#1B262C"
        mb="1.4px"
        alignItems={{ base: "flex-start", md: "center" }}
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
      >
        <HStack spacing="24px" ms={{ base: 2, md: 5 }}>
          <IconButton
            icon={<CiCirclePlus color="#fff" strokeWidth={1.5} />}
            bg="green.700"
            _hover={{ background: "#3282B8" }}
            _active={{ transform: "scale(.6)" }}
            transition=".6s"
          />
          <IconButton
            icon={<CiEdit color="#fff" strokeWidth={1.5} />}
            bg="gray.500"
            _hover={{ background: "#3282B8" }}
            _active={{ transform: "scale(.6)" }}
            transition=".6s"
            disabled={true}
          />
          <IconButton
            icon={<CiTrash color="#fff" strokeWidth={1.5} />}
            bg="red.700"
            _hover={{ background: "#3282B8" }}
            _active={{ transform: "scale(.6)" }}
            transition=".6s"
          />
        </HStack>
        <Box
          overflow="hidden"
          me={{ base: 0, md: 20 }}
          ms={{ base: 2, md: 0 }}
          mt={{ base: 5, md: 0 }}
        >
          <InputGroup w={{ base: "220px", md: "350px" }}>
            <Input type="text" placeholder="Search Users" color="#fff" />
            <InputRightElement pointerEvents="none">
              <CiSearch color="#fff" />
            </InputRightElement>
          </InputGroup>
        </Box>
      </Flex>

      <Box bg="#1B262C" p={1}>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th></Th>
                <Th>ID</Th>
                <Th>State</Th>
                <Th>Name</Th>
                <Th>Image</Th>
                <Th>Email</Th>
                <Th>Password</Th>
                <Th>Date</Th>
                <Th>Phone</Th>
              </Tr>
            </Thead>
            <Tbody>
              {[1, 2, 3].map((item) => {
                return (
                  <Tr key={item}>
                    <Td>
                      <Checkbox mt="2px" />
                    </Td>
                    <Td>20241805{item}</Td>
                    <Td>
                      <Badge variant="outline" colorScheme="green">
                        Online
                      </Badge>
                    </Td>
                    <Td>Huy Hoang</Td>
                    <Td>
                      <Img alt="copy" src={Logo} />
                    </Td>
                    <Td>h@gmail.com</Td>
                    <Td>12345678</Td>
                    <Td>5/16/2024 - 18:54</Td>
                    <Td>0905111222</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
