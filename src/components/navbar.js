import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Flex,
  Img,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import {
  CiAlignBottom,
  CiBoxes,
  CiCircleInfo,
  CiDatabase,
  CiFlag1,
  CiGlobe,
  CiLogout,
  CiSettings,
  CiShoppingTag,
  CiUser,
} from "react-icons/ci";
import { NavLink } from "react-router-dom";
import Logo from "../logo.svg";

const HeadingNavbar = () => {
  return (
    <Flex ps={{ base: 0, md: 0, lg: 2 }}>
      <Box
        w={{ base: "100%", lg: "20%" }}
        py={{ base: 2, lg: 4 }}
        display={{ base: "flex", md: "flex", lg: "block" }}
        justifyContent="center"
      >
        <Avatar
          name="Huy hoang"
          bg="#3282B8"
          size={{ base: "md", lg: "sm", xl: "md" }}
        />
      </Box>
      <Box
        w={{ lg: "64%", xl: "55%" }}
        py={{ base: 4, lg: 6 }}
        display={{ base: "none", md: "none", lg: "block" }}
      >
        <Text fontSize={{ lg: 12, xl: 14 }}>
          Huy Hoang
          <Text
            as="span"
            ms={1}
            fontSize="10px"
            textTransform="capitalize"
            color="green"
          >
            ( admin )
          </Text>
        </Text>
        <Text fontSize="10px" color="#a1a1a1">
          5/16/2024 - 18:54
        </Text>
      </Box>
      <Flex
        w={{ lg: "16%", xl: "25%" }}
        bg="#3282B8"
        alignItems="center"
        justifyContent="center"
        display={{ base: "none", md: "none", lg: "flex" }}
      >
        <Box w="60px" overflow="hidden">
          <Img src={Logo} alt="copy" objectFit="cover" />
        </Box>
      </Flex>
    </Flex>
  );
};

const NavBarItem = ({ url, icon, textName, isChildren = false }) => {
  return !url ? (
    <ListItem
      h="50px"
      display="flex"
      w="100%"
      justifyContent={{ base: "center", md: "center", lg: "flex-start" }}
      alignItems="center"
      ps={isChildren ? 10 : 3}
    >
      <Text as="span">
        <ListIcon as={icon} fontSize={22} />
        <Text
          as="span"
          fontSize="13px"
          textTransform="capitalize"
          display={{ base: "none", md: "none", lg: "inline-block" }}
        >
          {textName}
        </Text>
      </Text>
    </ListItem>
  ) : (
    <NavLink to={url}>
      <ListItem
        h="50px"
        display="flex"
        w="100%"
        justifyContent={{ base: "center", md: "center", lg: "flex-start" }}
        alignItems="center"
        ps={{ base: 3, md: 3, lg: isChildren ? 10 : 3 }}
        _hover={{
          background: "#0F4C75",
        }}
      >
        <Text as="span">
          <ListIcon as={icon} fontSize={22} />
          <Text
            as="span"
            fontSize="13px"
            display={{ base: "none", md: "none", lg: "inline-block" }}
          >
            {textName}
          </Text>
        </Text>
      </ListItem>
    </NavLink>
  );
};

const ContentNavbar = () => {
  return (
    <Box borderTop="1px solid" borderColor="#ffffff">
      <List>
        <NavBarItem url="/" icon={CiFlag1} textName="Dashboard" />

        <Accordion allowToggle defaultIndex={[0]}>
          <AccordionItem borderY={0}>
            <AccordionButton p={0} _hover={{ bg: "#0F4C75" }}>
              <NavBarItem url={null} icon={CiDatabase} textName="Data" />
            </AccordionButton>

            <AccordionPanel p={0}>
              <NavBarItem
                url="/users"
                icon={CiUser}
                textName="Users"
                isChildren={true}
              />
              <NavBarItem
                url="/catalog"
                icon={CiShoppingTag}
                textName="Catalog"
                isChildren={true}
              />
              <NavBarItem
                url="/products"
                icon={CiBoxes}
                textName="Products"
                isChildren={true}
              />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <NavBarItem
          url="statistical"
          icon={CiAlignBottom}
          textName="Statistical"
        />
        <NavBarItem
          url="notification"
          icon={CiCircleInfo}
          textName="Notification"
        />
        <NavBarItem url="website" icon={CiGlobe} textName="Website" />
        <NavBarItem url="setting" icon={CiSettings} textName="Setting" />
        <NavBarItem url="logout" icon={CiLogout} textName="Logout" />
      </List>
    </Box>
  );
};

export default function Navbar() {
  return (
    <Box bg="#1B262C" color="#ffffff" height="100vh">
      <HeadingNavbar />
      <ContentNavbar />
    </Box>
  );
}
