import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
import { FaGithub, FaLinkedinIn} from 'react-icons/fa';
import { SiGooglescholar } from "react-icons/si";

  const SocialButton = ({
    children,
    label,
    href,
    }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        color="#1a6985"
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SmallWithSocial() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        w={["100%", "100%", "100%"]}
        maxW={1000}
        mx="auto">
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2022 Andres Restrepo. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'GitHub'} href={'https://github.com/AndresRestrepoRodriguez'}>
              <FaGithub />
            </SocialButton>
            <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/aorestrepor/'}>
              <FaLinkedinIn />
            </SocialButton>
            <SocialButton label={'GoogleScholar'} href={'https://scholar.google.com/citations?user=PUHgr5MAAAAJ&hl=en'}>
              <SiGooglescholar />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }