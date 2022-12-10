import React from "react";
// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Badge,
  Flex,
  Button,
  Icon,
  Image,
  Text,
  DarkMode,
  useColorModeValue,
  HStack,
  Link,
  Center
} from "@chakra-ui/react";
// Assets
import { MdPeople } from "react-icons/md";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { ClientRequest } from "http";

function Project({title, image_url, source_link, labels, ...props}) {
  let boxBg = useColorModeValue("white !important", "#111c44 !important");
  let mainText = useColorModeValue("gray.800", "white");
  let iconBox = useColorModeValue("gray.100", "whiteAlpha.200");
  let iconColor = useColorModeValue("brand.200", "white");
  return (
    <Flex
      borderRadius='20px'
      bg={boxBg}
      p='20px'
      h='345px'
      w={{ base: "400px", md: "415px" }}
      alignItems='center'
      direction='column'
      m={10}
      boxShadow='md'>
      <Image
        src={image_url}
        width = '320px'
        height = '170px'
        borderRadius='20px'
        mb='10px'

      />
      <Center>
        <Text
            fontWeight='600'
            color={mainText}
            textAlign='start'
            fontSize='2xl'
            w='100%'>
            {title}
        </Text>
      </Center>
      <Center mt='auto'>
      <Flex mt='auto' justify='space-between' w='100%' alignItems='center'>
            <HStack>
                {labels.map((name) => {
                  return (
                    <Badge display='flex' alignItems='center' borderRadius='full' px='4' colorScheme='teal' textAlign='center' size='md'>
                        {name}
                    </Badge>
                )})}
            </HStack>
            
            
          {/*<Badge
            borderRadius='9px'
            size='md'
            colorScheme='green'
            color='green.400'
            textAlign='center'
            display='flex'
            justifyContent='center'
            alignItems='center'>
            Design
                  </Badge>*/}
      </Flex>
      </Center>
      <Link pt={4} href={source_link} isExternal>
        Source<ExternalLinkIcon mx='2px' />
      </Link>
    </Flex>
  );
}


export default Project;