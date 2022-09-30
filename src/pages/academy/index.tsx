import { Box, Flex, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/layout";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
import { useState } from "react";
import useInView from "react-cool-inview";

import type { ResourceItf } from "../../../data/academy";
import { allAcademyCategory } from "../../../data/academy";
import CardHighlight from "../../components/card/CardHighlight";
import CardResource from "../../components/card/CardResource";
import HighlightedText from "../../components/layout/HighlightedText";
import Menu from "../../components/layout/Menu";
import { useTranslate } from "../../context/TranslateProvider";

const resources: ResourceItf[] = [
  {
    name: "Nile",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    shortName: "Nile",
    // eslint-disable-next-line sonarjs/no-duplicate-string
    network: { twitter: "https://twitter.com/" },
  },
  {
    name: "Nile",
    // eslint-disable-next-line sonarjs/no-duplicate-string
    description: "Lorem ipsum dolor sit amet",
    shortName: "Nile",
    network: { twitter: "https://twitter.com/" },
  },
  {
    name: "Nile",
    description: "Lorem ipsum dolor sit amet",
    shortName: "Nile",
    network: { twitter: "https://twitter.com/" },
  },
  {
    name: "Nile",
    description: "Lorem ipsum dolor sit amet",
    shortName: "Nile",
    network: { twitter: "https://twitter.com/" },
  },
  {
    name: "Nile",
    description: "Lorem ipsum dolor sit amet",
    shortName: "Nile",
    network: { twitter: "https://twitter.com/" },
  },
  {
    name: "Nile",
    description: "Lorem ipsum dolor sit amet",
    shortName: "Nile",
    network: { twitter: "https://twitter.com/" },
  },
  {
    name: "Nile",
    description: "Lorem ipsum dolor sit amet",
    shortName: "Nile",
    network: { twitter: "https://twitter.com/" },
  },
  {
    name: "Nile",
    description: "Lorem ipsum dolor sit amet",
    shortName: "Nile",
    network: { twitter: "https://twitter.com/" },
  },
  {
    name: "Nile",
    description: "Lorem ipsum dolor sit amet",
    shortName: "Nile",
    network: { twitter: "https://twitter.com/" },
  },
];

const AcademyPage: FC = () => {
  const { t } = useTranslate();
  const LOADED_STEPS = 20;
  const [lastIndexLoaded, setLastIndexLoaded] = useState<number>(LOADED_STEPS);
  const { observe } = useInView({
    // When the last item comes to the viewport
    onEnter: ({ unobserve }) => {
      // Pause observe when loading data
      unobserve();
      setLastIndexLoaded(lastIndexLoaded + LOADED_STEPS);
    },
  });

  return (
    <Flex
      w="full"
      direction="column"
      justify="flex-start"
      align="flex-start"
      transform="translateZ(0)"
    >
      <HighlightedText highlighted="Academy" />
      {/* Sub intro text */}
      <Text
        zIndex={1}
        mt={8}
        textAlign="start"
        color="whiteAlpha.600"
        fontSize="20px"
        maxWidth="600px"
      >
        {t.common.subtitle_main}
      </Text>
      <Flex w="full" direction={{ base: "column", md: "row" }} mt={24}>
        <Menu
          tags={allAcademyCategory}
          initialValue={allAcademyCategory[0]}
          onChange={(newValue) => {
            console.log(newValue);
          }}
        />
        <VStack justify="flex-start" align="flex-start">
          <Text fontSize="6xl" fontWeight="bold">
            Learn
          </Text>
          {resources && resources.length > 0 ? (
            <SimpleGrid columns={{ sm: 1, lg: 2, xl: 3 }} spacing="20px">
              {resources.map((resource: ResourceItf, index: number) => {
                return (
                  <Box
                    ref={index === resources.length - 1 ? observe : null}
                    key={`resource-${resource.name}`}
                    flex={1}
                  >
                    <CardResource index={index} resource={resource} />
                  </Box>
                );
              })}
            </SimpleGrid>
          ) : (
            <Flex w="full" direction="column" align="center" opacity=".8">
              <Text fontSize="24px">{t.common.no_project}</Text>
              <Text mt={2} fontSize="18px">
                {t.common.maybe_yours}
              </Text>
            </Flex>
          )}
          <Text pt={20} fontSize="6xl" fontWeight="bold">
            Useful
          </Text>
          <HStack>
            <CardHighlight
              bg="flat.100"
              icon={<FontAwesomeIcon icon={solid("home")} />}
              title="Get started"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            />
            <CardHighlight
              color="flat.100"
              icon={<FontAwesomeIcon icon={solid("home")} />}
              title="Get started"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            />
          </HStack>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default AcademyPage;