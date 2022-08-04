import {
  Box,
  Flex,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { FcCollaboration, FcComments, FcConferenceCall } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

// Got from Chakra UI Dev Templates
const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={useColorModeValue("gray.600", "gray.400")}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcCollaboration} w={10} h={10} />}
          title={"Match"}
          text={
            "Connect with students at your college using our adaptive and personalized matching algorithm."
          }
        />
        <Feature
          icon={<Icon as={FcComments} w={10} h={10} />}
          title={"Message"}
          text={
            "Send direct messages to your matches to build a closer connection with your peers."
          }
        />
        <Feature
          icon={<Icon as={FcConferenceCall} w={10} h={10} />}
          title={"Events"}
          text={
            "Discover events created by students on campus or host your own!"
          }
        />
      </SimpleGrid>
    </Box>
  );
}
