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

const Links = [{name:'Home', h_link:'/'}, {name:'Projects', h_link:'/projects'}, {name:'Publications', h_link:'/publications'}];

const NavLink = ({ name, link_to }) => (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={link_to}>
      <Text fontSize='xl' >{name}</Text>
    </Link>
  );
  
  

export default function TopNavbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box bg={useColorModeValue('white.100', 'white.900')} px={4} boxShadow='2xl' color='#2D3748'>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}
                w={["100%", "100%", "100%"]}
                maxW={1000}
                mx="auto">
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={'center'}>
                    <HStack
                    as={'nav'}
                    spacing={6}
                    display={{ base: 'none', md: 'flex' }}>
                    {Links.map((link) => (
                        <NavLink key={link.name} name={link.name} link_to={link.h_link} />
                    ))}
                    </HStack>
                </HStack>
                </Flex>
                {isOpen ? (
          <Box
            pb={4}
            w={["100%", "100%", "100%"]}
            maxW={800}
            display={["inherit", "inherit", "none"]}
          >
            <Stack as={"nav"} spacing={4}>
                    {Links.map((link) => (
                        <NavLink key={link.name} name={link.name} link_to={link.h_link} />
                    ))}
            </Stack>
          </Box>
        ) : null}
            </Box>
    );
}