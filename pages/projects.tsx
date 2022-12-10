import { Grid, Heading, Text, VStack, Image, HStack, Icon, Divider, Link, Box, Flex, Center } from "@chakra-ui/react"
import * as React from 'react';
import SmallWithSocial from "@/components/footer"
import { FaGithub, FaLinkedinIn} from 'react-icons/fa';
import { SiGooglescholar } from "react-icons/si";
import TopNavbar from "@/components/top_nav";
import Project from "@/components/project";

function ChakraNextLinkIcon({ href, icon, ...props }) {
  return (
    <Link href={href} isExternal>
      <Icon as={icon} w={8} h={8}/>
    </Link>
  );
}

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
          <Box w='100%' pt={4} color='#2D3748'>
           <Center>
            <Flex direction={["column", "column", "row"]}>
              <Heading pb={4} textAlign="center" size='2xl' noOfLines={1}>Projects</Heading>
            </Flex>
            </Center>
            <Divider size='md' borderColor={'#2D3748'} />
            <Divider size='md' borderColor={'#2D3748'} />
            <Flex direction={["column", "column", "row"]} pt={6}>
            <Project image_url={'/dlops.png'} title={'DlOps'} source_link='https://github.com/AndresRestrepoRodriguez/dlops' labels={["Deep Learning", "Python", "MlOps"]}/>
            <Project image_url={'portfolio.png'} title={'Portfolio'} source_link='https://github.com/AndresRestrepoRodriguez/portfolio' labels={["NextJS", "ChakraUi", "Web"]}/>
            </Flex>
            <Flex direction={["column", "column", "row"]} pt={6}>
            <Project image_url={'/computer_vision.png'} title={'Computer Vision Notebooks'} source_link='https://github.com/AndresRestrepoRodriguez/computer_vision' labels={["Deep Learning", "Python", "Computer Vision"]}/>
            <Project image_url={'/entropy.jpg'} title={'Entropy - Selection APP'} source_link='https://github.com/AndresRestrepoRodriguez/Entropy-SelApp' labels={["Python", "Feature Engineering", "Web"]}/>
            </Flex>
            <Flex direction={["column", "column", "row"]} pt={6}>
            <Project image_url={'/aerial.png'} title={'CNNs Aerial Image Classification'} source_link='https://github.com/AndresRestrepoRodriguez/Comparison-CNN-Models-Aerial-Image-Classification' labels={["Deep Learning", "Python", "Computer Vision"]}/>
            <Project image_url={'/sallfus.png'} title={'Satellite Images Fusion CPU/GPU'} source_link='https://github.com/AndresRestrepoRodriguez/satellite_images_fusion' labels={["Python", "Image Processing", "GPU"]}/>
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
