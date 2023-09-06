import React from "react"
import {
  Icon,
  Box,
  Text,
  Flex,
  LinkBox,
  LinkOverlay,
  useToken,
} from "@chakra-ui/react"
import { AiOutlineArrowRight } from "react-icons/ai"
import Emoji from "./Emoji"
import Link from "./Link"

export interface IProps {
  children?: React.ReactNode
  to: string
  isExternal?: boolean
}

const DocLink: React.FC<IProps> = ({ to, children, isExternal = false }) => {
  const linkBoxShadowColor = useToken("colors", "primary.base")

  return (
    <LinkBox
      padding={4}
      borderRadius="sm"
      color="text"
      border="1px"
      borderStyle="solid"
      borderColor="border"
      _hover={{
        background: "tableBackgroundHover",
        borderRadius: "base",
        boxShadow: `0 0 1px ${linkBoxShadowColor}`,
      }}
    >
      <Flex
        zIndex={1}
        display="flex"
        flexDirection="row"
        flex={1}
        justifyContent="space-between"
      >
        <Flex align="center">
          <Emoji fontSize="md" mr={4} text=":page_with_curl:" />
        </Flex>
        <Box flex={1} flexDirection="column">
          <LinkOverlay
            href={to}
            as={Link}
            isExternal={isExternal}
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            hideArrow
          >
            <Text color="text300" fontWeight="semibold" margin={0}>
              {children}
            </Text>
          </LinkOverlay>
        </Box>
        <Icon
          as={AiOutlineArrowRight}
          alignSelf="center"
          minWidth={8}
          boxSize={6}
          marginX={6}
          _groupHover={{
            fill: "primary.base",
            transition: "transform 0.1s",
            transform: "scale(1.2)",
            rotate: isExternal ? "-45deg" : "0",
          }}
        />
      </Flex>
    </LinkBox>
  )
}

export default DocLink
