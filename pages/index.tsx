import { Grid, Heading, Text, VStack, Image, HStack, Icon, Divider, Link } from "@chakra-ui/react"
import Project from "@/components/project"
import SmallWithSocial from "@/components/footer"
import { FaGithub, FaLinkedinIn} from 'react-icons/fa';
import { SiGooglescholar } from "react-icons/si";

function ChakraNextLinkIcon({ href, icon, ...props }) {
  return (
    <Link href={href} isExternal>
      <Icon as={icon} w={8} h={8}/>
    </Link>
  );
}

export default function Home() {
  return ([<Grid 
      placeItems="center"
      p={10}
      gridTemplateAreas={[
        '"photo" "info" "project1" "project2" "project3" "project4"',
        '"photo info" "project1 project2" "project3 project4"',
        '"photo photo info info" "project1 project2 project3 project4"'
      ]}
      minH="100vh"
      gap={5}
      >
      <Image gridArea="photo"
      borderRadius='full'
      boxSize='250px'
      src='/photo_andres.jpeg'
      alt='Andres Restrepo'
      />
      <VStack gridArea="info">
        <Heading fontSize={['5xl', '5xl', '5xl', '5xl']} textAlign="center">Andres Restrepo</Heading>
        <Text fontSize={'xl'} textAlign="center">Machine Learning Engineer - Data Scientist - Researcher</Text>
        <Text fontSize={'xl'} textAlign="center">Magister at Information and Communications Sciences</Text>
        <Divider />
        <HStack p={3} gap={5}>
          <ChakraNextLinkIcon href={'https://github.com/AndresRestrepoRodriguez'} icon={FaGithub}></ChakraNextLinkIcon>
          <ChakraNextLinkIcon href={'https://www.linkedin.com/in/aorestrepor/'} icon={FaLinkedinIn}></ChakraNextLinkIcon>
          <ChakraNextLinkIcon href={'https://scholar.google.com/citations?user=PUHgr5MAAAAJ&hl=en'} icon={SiGooglescholar}></ChakraNextLinkIcon>
        </HStack>
      </VStack>
      <Project gridArea="project1" text="DLOps - Image Classification" image_url='otro.png' source_link={'https://github.com/AndresRestrepoRodriguez/dlops'}/>
      <Project gridArea="project2" text="Coming soon" image_url='otro.png' source_link={'/'}/>
      <Project gridArea="project3" text="Coming soon" image_url='otro.png' source_link={'/'}/>
      <Project gridArea="project4" text="Coming soon" image_url='otro.png' source_link={'/'}/>
    </Grid>,
    <SmallWithSocial/>])
}
