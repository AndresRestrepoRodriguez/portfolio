import {Box, Center, Heading, VStack, SlideFade, Grid, Button} from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import {ArrowForwardIcon } from '@chakra-ui/icons';
import Link from "next/link";

function ChakraNextLinkButton({ href, ...props }) {
    return (
      <Link href={href}>
        <Button rightIcon={<ArrowForwardIcon />} color='black' colorScheme='gray' variant='solid'>Source</Button>
      </Link>
    );
  }

export default function Project( {text, image_url, source_link, ...props} ) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
    const backgr_image = `linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.001)) , url(${image_url})`
    useEffect(() => {
        ref.current.addEventListener('mouseenter', () => setIsOpen(true)),
        ref.current.addEventListener('mouseleave', () => setIsOpen(false))
    }, []);
    
    return (
        <Grid
        {...props}
        placeItems='center'
        minH='100px'
        ref={ref}
        maxW={['xs', 'xs', 'xs', 'xs']}
        minW={['xs', 'xs', 'xs', 'xs']}
        h="75%"
        _hover={{background: "rgba(255, 255, 255, 0.3)"}}
        mt={[2, 4, 6, 8]}
        p={[2, 4, 6, 8]}
        backgroundImage={backgr_image}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        >
            <Center>
                <VStack>
                    <Heading p={5} fontSize={['2xl', '3xl', '3xl', '3xl']} textAlign="center">{text}</Heading>
                </VStack>
            </Center>
            <SlideFade in={isOpen} offsetY='20px'>
                <ChakraNextLinkButton href={source_link} position="relative"></ChakraNextLinkButton>      
            </SlideFade>                      
        </Grid>
        
    );
}