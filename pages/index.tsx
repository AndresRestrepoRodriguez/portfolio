import { Grid, Heading, Text, VStack, Image, HStack, Icon, Divider, Link, Box, Flex, IconButton, Center} from "@chakra-ui/react"
import { ReactNode } from 'react';
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  ButtonGroup,
  Container,
  GridItem
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon, MdBuild } from '@chakra-ui/icons';
import * as React from 'react';
import SmallWithSocial from "@/components/footer"
import { FaGithub, FaLinkedinIn} from 'react-icons/fa';
import { SiGooglescholar } from "react-icons/si";
import TopNavbar from "@/components/top_nav";


function ChakraNextLinkIcon({ href, icon, ...props }) {
  return (
    <Link href={href} isExternal>
      <Icon as={icon} w={8} h={8}/>
    </Link>
  );
}

const onDownload = () => {
  const link = document.createElement("a");
  link.download = `cv_andres_restrepo.pdf`;
  link.href = "/cv_andres_restrepo.pdf";
  link.click();
};

export default function Home() {
  return (
    <React.Fragment>
      <Box>
        <TopNavbar />
          <Flex  direction="column" align="center">
          <Box
            textAlign="center"
            fontSize="xl"
            w={["90%", "85%", "80%"]}
            maxW={1000}
            mx="auto"
          >
          <Box pt={10} pb={10}>
          <Box w='100%' p={4} color='#2D3748'>
            <Flex direction={["column", "column", "row"]}>
              <Image
                //pl={['auto', 5, 10]}
                m="auto"
                mb={[16, 16, "auto"]}
                gridArea='photo'
                borderRadius='full'
                boxSize='300px'
                src='/photo_andres.jpeg'
                alt='Andres Restrepo'
                border='10px solid white'
                boxShadow='dark-lg'
                />
              <Box
              ml={["auto", "auto", 16]}
              pt={[1, 5, 10]}
              m={["auto"]}
              w={["80%", "75%", "70%"]}
              maxW="800px"
              justify="center"
              direction="column"
              >
              <VStack>
                <Text noOfLines={2} fontSize={'2xl'}>Machine Learning Engineer - Data Scientist - Researcher</Text>
                <Heading size='md' text-align='start' fontSize={['5xl', '5xl', '5xl', '5xl']}>Andres Restrepo</Heading>
                <Text noOfLines={2} fontSize={'2xl'}>Master at Information and Communication Sciences</Text>
                <HStack p={3} gap={5}>
                  <Button onClick={onDownload} colorScheme='gray' variant='outline'>Resume</Button>
                  <ChakraNextLinkIcon href={'https://github.com/AndresRestrepoRodriguez'} icon={FaGithub}></ChakraNextLinkIcon>
                  <ChakraNextLinkIcon href={'https://www.linkedin.com/in/aorestrepor/'} icon={FaLinkedinIn}></ChakraNextLinkIcon>
                  <ChakraNextLinkIcon href={'https://scholar.google.com/citations?user=PUHgr5MAAAAJ&hl=en'} icon={SiGooglescholar}></ChakraNextLinkIcon>
                </HStack>
              </VStack>
              </Box>
            </Flex>
            <Flex direction={["column", "column", "row"]} pt={6}>
              <Box bg='white' color='black' borderWidth='1px' borderRadius='lg' boxShadow='base' maxH={'600px'}>
              <Heading size='xl' pt={1} pb={3} noOfLines={3}>Hey!</Heading>
              <Divider inset="none" />
              <Text noOfLines={9} p={4}>
              I'm Andres Restrepo and I have experience in Machine Learning,
              Deep Learning, Data Science,and Data Processing at industry and research levels, with
              languages and tools as Python, Scala, R, PyTorch, TensorFlow,
              Keras, Scikit-Learn, Docker, API's, Apache Spark. Also I have experience
              as university professor and researcher in areas of artificial
              intelligence. My experience and results in research expose my
              passion for extraordinary fields such as Machine Learning and
              Data Science
              </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
        </Box>
          </Flex>
        <SmallWithSocial />
      </Box>
    </React.Fragment>
  )  ;
}
