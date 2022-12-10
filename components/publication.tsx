import { Link, Heading, Box, Badge, HStack} from "@chakra-ui/react"
import * as React from 'react';


export default function Publication( {text, labels, url, ...props} ) {
        const property = {
          imageUrl: 'https://bit.ly/2Z4KKcF',
          imageAlt: 'Rear view of modern home with pool',
          beds: 3,
          baths: 2,
          title: text,
          formattedPrice: '$1,900.00',
          reviewCount: 34,
          rating: 4,
          publication_url:"",
          labels:labels,
          url:url
        }
     
        return (
            <Box alignItems='baseline' p='4' bg='white' color='black' w={{sm:"100%", md:"100%", lg:"100%", xl:"100%"}} boxShadow='2xl'>
              <Box  display='flex' >
                <HStack>
                {property.labels.map((name) => {
                  return (
                    <Badge key={name} borderRadius='full' px='4' colorScheme='teal' fontSize='0.8em'>
                        {name}
                    </Badge>
                )})}
                    

                </HStack>
                
              </Box>
      
              <Box p='2' alignItems='left'>
                <Link href={property.url} isExternal alignItems='baseline'>
                <Heading align='left' size='md' pt="1" noOfLines={3}>{property.title}</Heading>
                </Link>
              </Box>
      
            </Box>
        )
}