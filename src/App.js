import classnames from "classnames";
import csx1 from "./images/csx_1.png";
import csx2 from "./images/csx_2.png";
import csx3 from "./images/csx_3.png";
import github from "./images/github.svg";
import borderLogo from "./images/logo512.png";
import network from "./images/network_1.png";
import network2 from "./images/network_2.png";
import network3 from "./images/network_3.png";
import network4 from "./images/network_4.png";
import logo from "./logo.png";

import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import "./App.css";
function App() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  const renderFeatures = () => (
    <Box padding="50px 10px 50px 10px" zIndex="5" position="relative">
      <Container maxWidth="container.lg">
        <VStack>
          <Heading size="lg">Features</Heading>
          <Wrap>
            {[
              "Network modeling",
              "CSV support",
              "Custom node properties",
              "Custom edge properties",
              "Node statistics",
              "Edge statiscs",
              "Graph statistics",
              "Advanced search",
              "Direct connection exploration",
              "Graph expansion",
              "Graph trimming",
              "Multipartite graph representation",
              "Co-occurrence graph representation",
              "List view",
              "Table view",
              "juxtaposed views",
              "Data export",
            ].map((entry) => (
              <Text
                backgroundColor="blackAlpha.400"
                padding="3px 10px 3px 10px"
                borderRadius="full"
                fontWeight="bold"
                fontSize="sm"
                key={`skill_${entry}`}
              >
                {entry}
              </Text>
            ))}
          </Wrap>
        </VStack>
      </Container>
    </Box>
  );

  const renderBrowserImage = (image, index) => (
    <Box
      padding={["0", "20px", "20px", "50px"]}
      zIndex="2"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gridRow={[0, 0, 0]}
      gridColumn={[1, 1, index % 2 === 0 ? 1 : 2]}
    >
      <Image src={image} width="100%" />
    </Box>
  );

  const renderDescription = (title, text, index) => (
    <Box
      padding={["0px", "0px", "20px", "50px"]}
      position="relative"
      display="flex"
      alignItems="center"
      gridRow={[1, 1, 0]}
      gridColumn={[0, 0, index % 2 === 0 ? 2 : 1]}
    >
      <VStack
        zIndex="2"
        backdropFilter="blur(5px)"
        backgroundColor="blackAlpha.300"
        borderRadius="10px"
        padding="20px"
        flexGrow="0"
        flexShrink="1"
        justifyContent="center"
        marginBottom={["20px", "0px"]}
      >
        <Heading size="md" textAlign="left" width="100%">
          {title}
        </Heading>
        <Text textAlign="left" fontSize="xs">
          {text}
        </Text>
      </VStack>
    </Box>
  );

  const renderHighlights = () => {
    const content = [
      {
        title: "Visualise",
        text: "CSX enables users to control their graphs through a set of advanced graph visualisation controls. You can modify the layout throguh layout algorithms or by moving individual nodes. Additionally you can attach node properties and chose to color the graph based on these properties. Despite networks being an efficient way of visualising and identifiying connections, sometimes it is easier to view data in a list or a table, therfore CSX provides users with a handy list and table display options.",
        background: network2,
        image: csx1,
      },
      {
        title: "Model",
        text: "CSX enables users to model their retrieved data through an advanced schema designer. You can express complex relations in your data with ease without worrying about connections in the original dataset. CSX automatically detects data types and provides possible relationships between features. When working with co-occurrence graph you can additionally add properties to your nodes which you can then explore either through connectivity, colors or stats.",
        background: network3,
        image: csx2,
      },
      {
        title: "Explore",
        text: "In addition to exploring your datas connectivity CSX enables you to explore your data through a set of customisable widgets. These can be used to not only get quantifiable insight into your data but also to filter your graph.",
        background: network4,
        image: csx3,
      },
    ];

    return content.map((entry, index) => {
      return (
        <SimpleGrid
          columns={[1, 1, 2]}
          rows={[2, 2, 1]}
          position="relative"
          paddingLeft={["20px", "0"]}
          paddingRight={["20px", "0"]}
          paddingTop="15px"
          paddingBottom="15px"
          key={`highlight_${entry.title}`}
          marginBottom={["20px", "0px"]}
          maxWidth="1500px"
        >
          <Box
            left={["0", index % 2 === 0 ? "-50%" : "40%"]}
            position="absolute"
            zIndex="0"
            top="0"
            width="100%"
            height={["100%", "150%"]}
            backgroundImage={`url(${entry.background})`}
            backgroundPosition="50% 60%"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            style={{ imageRendering: "crisp-edges" }}
          ></Box>
          {renderDescription(entry.title, entry.text, index)}
          {renderBrowserImage(entry.image, index)}
        </SimpleGrid>
      );
    });
  };

  const renderFooter = () => (
    <Container
      maxW="container.xl"
      justifyContent="space-between"
      display="flex"
      paddingTop="50px"
      paddingBottom={["50px", "50px", "20px"]}
      backgroundColor="#131720"
    >
      <SimpleGrid columns={[1, 1, 2]} width="100%">
        <Center
          paddingTop="100px"
          paddingBottom="50px"
          maxWidth="500px"
          flexDir="column"
          alignItems={["center", "center", "start"]}
        >
          <HStack justifyContent="center" marginBottom="20px">
            <Image
              src={logo}
              alt="Collaboration spotting logo"
              boxSize="20px"
            />
            <Text fontWeight="bold">Collaboration Spotting X</Text>
          </HStack>
          <Text
            marginBottom="20px"
            fontSize="sm"
            textAlign={["center", "center", "left"]}
          >
            Developed at <b>CERN</b>, Geneva, Switzerland by{" "}
            <b>Aleksandar Bobić</b> led by <b>Dr. Jean-Marie Le Goff</b> and{" "}
            <b>prof. Christian Gütl</b>.
          </Text>
          <Text textAlign="left" fontWeight="bold" fontSize="sm">
            CERN &copy; 2022
          </Text>
        </Center>
        <Center maxWidth="500px">
          <Text
            fontStyle="italic"
            fontSize="sm"
            textAlign={["center", "center", "left"]}
            marginTop="20px"
          >
            This project was inspired by the{" "}
            <Link
              fontWeight="bold"
              textDecoration="underline"
              display="inline"
              opacity="0.75"
              target="_blank"
              href="https://collaborationspotting.web.cern.ch/"
              _hover={{ opacity: 1 }}
            >
              Collaboration Spotting project
            </Link>
            . We would like to thank the{" "}
            <Link
              fontWeight="bold"
              textDecoration="underline"
              display="inline"
              opacity="0.75"
              target="_blank"
              href="https://ercim-news.ercim.eu/en111/r-i/collaboration-spotting-a-visual-analytics-platform-to-assist-knowledge-discovery"
              _hover={{ opacity: 1 }}
            >
              Collaboration Spotting team
            </Link>{" "}
            for their contributions.
          </Text>
        </Center>
      </SimpleGrid>
    </Container>
  );

  return (
    <ChakraProvider>
      {localStorage.setItem("chakra-ui-color-mode", "dark")}
      <Box
        position="relative"
        maxHeight="container.xl"
        height={["75%", "50%"]}
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        backgroundColor="#131720"
      >
        <Box
          height="50px"
          top="0px"
          position="absolute"
          width="100%"
          zIndex="4"
          backdropFilter="blur(1px)"
          backgroundColor="blackAlpha.200"
        >
          <Container
            maxWidth="container.xl"
            as="header"
            height="50px"
            display="flex"
            justifyContent="space-between"
          >
            <Image
              src={logo}
              alt="logo"
              boxSize="26px"
              marginTop="12px"
              display="inline"
            />

            <Link
              href="https://github.com/aleksbobic/csx"
              isExternal
              transition="all ease-in-out 0.6"
              _hover={{ opacity: 0.76 }}
            >
              <Image
                src={github}
                alt="github"
                boxSize="26px"
                marginTop="12px"
                filter="brightness(0) invert(1)"
                display="inline"
              />
            </Link>
          </Container>
        </Box>
        <Container
          paddingTop="76px"
          paddingBottom="76px"
          position="absolute"
          zIndex="10"
          maxWidth="container.md"
          maxHeight="container.xl"
          as="section"
          minHeight="300px"
        >
          <Center height="100%">
            <VStack height="100%" width="100%" justifyContent="center">
              <Image
                backgroundColor="blackAlpha.600"
                src={borderLogo}
                alt="logo"
                boxSize={["44px", "54px"]}
                marginTop="10px"
                borderRadius="9px"
              />
              <Heading textAlign="center" size="lg">
                Collaboration Spotting X
              </Heading>
              <Text
                fontWeight="bold"
                textAlign="center"
                paddingLeft="50px"
                paddingRight="50px"
                fontSize={["xs", "sm"]}
              >
                Explore your data like never before with a new open-source
                information retrieval and network analytics tool built at CERN.
              </Text>
              <Button
                variant="solid"
                background="linear-gradient(129deg, rgba(102,74,182,1) 0%, rgba(153,115,188,1) 55%, rgba(172,109,182,1) 100%);"
                opacity="0.76"
                role="group"
                boxSizing="border-box"
                rightIcon={<ArrowForwardIcon />}
                as={Link}
                href="https://github.com/aleksbobic/csx"
                isExternal
                _hover={{ textDecoration: "none", opacity: 1 }}
                transition="all ease-in-out 0.6"
              >
                Github page
              </Button>
            </VStack>
          </Center>
        </Container>
        <Box
          zIndex="1"
          position="absolute"
          className={classnames({ animate: shouldAnimate })}
          top="0"
          width="100%"
          height="100%"
          backgroundImage={`url(${network})`}
          backgroundPosition="50% 60%"
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
          transition="all ease-in-out 2.5s"
          style={{ imageRendering: "crisp-edges" }}
        ></Box>
      </Box>
      <VStack
        width="100%"
        as="section"
        justifyContent="center"
        backgroundColor="#131720"
        paddingLeft={["0", "20px", "20px", "50px"]}
        paddingRight={["0", "20px", "20px", "50px"]}
        overflow="hidden"
      >
        {renderHighlights()}
        {renderFeatures()}
        {renderFooter()}
      </VStack>
    </ChakraProvider>
  );
}

export default App;
