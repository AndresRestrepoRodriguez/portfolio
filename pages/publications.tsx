import { Link, Heading, Center, Box, Grid, Divider, Icon, Flex } from "@chakra-ui/react"
import * as React from 'react';
import SmallWithSocial from "@/components/footer"
import TopNavbar from "@/components/top_nav";
import Publication from "@/components/publication";


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
          <Box w='100%' p={4} color='#2D3748'>
            <Center>
            <Flex direction={["column", "column", "row"]}>
              <Heading pb={2} textAlign="center" size='2xl' noOfLines={1}>Publications</Heading>
            </Flex>
            </Center>
            
            <Divider size='md' borderColor={'#2D3748'}></Divider>
            <Divider size='md' borderColor={'#2D3748'} />
            <Flex direction={"column"} pt={6}>
            <Grid gap={8}>
            <Publication url="https://doi.org/10.1007/s12652-020-01887-2" labels={["Paper", "Clustering", "Learning Analytics"]} text="Emotional characterization of children through alearning environment using learning analytics and AR-Sandbox"/>
            <Publication url="https://doi.org/10.3390/sym10120743" labels={["Paper", "Deep Learning", "CNN", "Computer Vision"]} text="Hyperparameter Optimization for Image Recognition over an AR-Sandbox Based on Convolutional Neural Networks Applying a Previous Phase of Segmentation by Color Space"/>
            <Publication url="http://doi.org/10.9781/ijimai.2019.10.004" labels={["Paper", "Deep Learning", "CNN", "Computer Vision"]} text="Image Classification Methods Applied in Immersive Environments for Fine Motor Skills Training in Early Education"/>
            <Publication url="https://doi.org/10.1007/978-3-030-96293-7_35" labels={["Paper", "Time Series", "Learning Analytics", "BCI"]} text="Time Series for Evaluation of Performance Metrics as of Interaction with an AR-Sandbox Using Brain Computer Interfaces"/>
            <Publication url="https://revistas.unisimon.edu.co/index.php/innovacioning/article/view/3961" labels={["Paper", "HPC", "Image Processing", "GPU"]} text="Satellite-image fusion using Brovey transform and spectral richness calibration on heterogeneous computing CPU/GPU"/>
            <Publication url="https://doctoradoingenieria.udistrital.edu.co/node/432" labels={["Book", "Deep Learning", "CNN", "Computer Vision"]} text="Convolutional neural networks using Keras and GPU acceleration"/>
            <Publication url="https://doi.org/10.1109/TLA.2020.9400441" labels={["Paper", "HPC", "Image Processing", "GPU"]} text="Sallfus, library for satellite images fusion on homogeneous and heterogeneous computing architectures"/>
            <Publication url="https://doctoradoingenieria.udistrital.edu.co/node/447" labels={["Book", "HPC", "Image Processing", "GPU"]} text="Accelerating image fusion through heterogeneous computing"/>
            <Publication url="https://doi.org/10.18280/isi.250401" labels={["Paper", "Unity", "Augmented Reality"]} text="AR Support System for Therapy in 3 to 8-Year-Old Children with Altered Fine Motor Skills"/>
            <Publication url="https://doi.org/10.1007/978-3-030-17795-9_23" labels={["Paper", "Deep Learning", "CNN", "Computer Vision"]} text="Image Recognition Model over Augmented Reality Based on Convolutional Neural Networks Through Color-Space Segmentation"/>
            <Publication url="https://doi.org/10.1007/978-3-030-19823-7_33" labels={["Paper", "Deep Learning", "CNN", "Computer Vision"]} text="Segmentation Methods for Image Classification Using a Convolutional Neural Network on ARSandbox"/>
            </Grid>
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
