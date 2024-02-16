import React from 'react';
import { Image, Text, Button, Flex } from '@chakra-ui/react';
import logo from '../assets/img/ow-rec.svg';

const RecCard = () => (
  <Flex
    flexDirection="column"
    align="center"
    textAlign="center"
    p="4"
    w="100%" // Adjust width to take full space available
    h="auto"
    m="0" // Remove margin to glue to the separator
  >
    <Image src={logo} boxSize="50px" margin="auto" />
    <Text fontSize="md" my="2">
      Owloops Rec
    </Text>
    <Text fontSize="xs" mb="4">
      Record and replay user sessions to improve user experience.
    </Text>
    <Button colorScheme="blue" size="sm">
      Learn More
    </Button>
  </Flex>
);

export default RecCard;
