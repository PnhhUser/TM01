import {
  Box,
  Flex,
  SimpleGrid,
  Table,
  TableContainer,
  Tag,
  TagLabel,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { CiBoxes, CiMoneyBill, CiShoppingTag, CiUser } from "react-icons/ci";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    pv: 200,
  },
  {
    name: "Page B",
    pv: 500,
  },
  {
    name: "Page C",
    pv: 1000,
  },
  {
    name: "Page D",
    pv: 800,
  },
];

const BoxTotal = ({ total, textName, icon }) => {
  return (
    <Flex
      w="100%"
      height="64px"
      bg="#1B262C"
      borderWidth={2}
      borderColor="#fff"
      borderY={0}
      borderLeft={0}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        bg="#3282B8"
        width="30px"
        height="30px"
        borderRadius={50}
        my={2}
        ms={2}
      >
        {icon}
      </Flex>
      <Box
        flex={1}
        my={{ base: 4, md: 2 }}
        color="#BBE1FA"
        fontSize={{ base: "20px", md: "16px" }}
        ms={3}
      >
        <Text as="span" fontSize={14} display={{ base: "none", md: "block" }}>
          {textName}
        </Text>
        {total}
      </Box>
      <Box bg="#0F4C75" w={{ base: "10px", md: "20px" }} />
    </Flex>
  );
};

export default function Dashboard() {
  return (
    <Box>
      <SimpleGrid
        columns={{ base: 2, md: 4, lg: 5 }}
        // spacing={{ base: "1px", md: "1px", lg: 1 }}
        color="#fff"
        borderWidth={1}
        borderBottom={0}
      >
        <BoxTotal
          total={99}
          textName="Users"
          icon={<CiUser strokeWidth={1} />}
        />
        <BoxTotal
          total={4}
          textName="Catalog"
          icon={<CiShoppingTag strokeWidth={1} />}
        />
        <BoxTotal
          total={511}
          textName="Products"
          icon={<CiBoxes strokeWidth={1} />}
        />
        <BoxTotal
          total="2000.000"
          textName="Money "
          icon={<CiMoneyBill strokeWidth={1} />}
        />
      </SimpleGrid>
      <Flex
        gap="1px"
        mt="1px"
        flexDirection={{ base: "column", md: "row" }}
        borderWidth={1}
      >
        <Box w={{ base: "100%", md: "61%" }} bg="#1B262C" p={2}>
          <Box color="#fff">
            <Text as="h3" fontSize="20px" className="dailyIncome">
              Daily income
            </Text>
            <TableContainer mt={2} height="590px">
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>Money</Th>
                    <Th> State </Th>
                    <Th>Date</Th>
                  </Tr>
                </Thead>
                <Tbody fontSize={14}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                    return (
                      <Tr key={item}>
                        <Td color="#BBE1FA">
                          24170500{item < 10 ? "0" + item : item}
                        </Td>
                        <Td color="#BBE1FA">200.00</Td>
                        <Td>
                          <Tag
                            size="sm"
                            variant="subtle"
                            bg="#3282B8"
                            color="#BBE1FA"
                          >
                            <TagLabel>Transfer</TagLabel>
                          </Tag>
                        </Td>
                        <Td>5/16/2024 - 18:54</Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
        <Flex w={{ base: "100%", md: "39%" }} flexDirection="column" gap="1px">
          <Box bg="#1B262C" w="100%" color="#fff" h="350px">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                layout="vertical"
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#fff" />
                <XAxis type="number" color="#fff" />
                <YAxis
                  dataKey="name"
                  type="category"
                  scale="band"
                  color="#fff"
                />
                <Bar dataKey="pv" barSize={20} fill="#0F4C75" />
              </ComposedChart>
            </ResponsiveContainer>
          </Box>
          <Box bg="#1B262C" w="100%" color="#fff" h="350px">
            2
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
