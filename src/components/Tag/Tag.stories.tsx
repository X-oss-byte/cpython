import * as React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Box, HStack, Link, VStack } from "@chakra-ui/react"
import { TbSquareRoundedNumber8Filled } from "react-icons/tb"
import Tag, { EthTagProps } from "."
import { MdInfoOutline, MdLanguage } from "react-icons/md"

type TagType = typeof Tag

const meta: Meta<TagType> = {
  title: "Molecules / Display Content / Tags",
  component: Tag,
}

export default meta

type Story = StoryObj<TagType>

// "normal" is default status
const statusArray = ["normal", "tag", "success", "error", "warning"] as const

// "subtle" is default variant
const variantArray = ["subtle", "solid", "outline"]

const StyleVariantList = (args: EthTagProps) => (
  <HStack>
    {statusArray.map((status) => (
      <VStack key={status}>
        {variantArray.map((variant) => (
          <Tag
            key={variant}
            href="#"
            status={status}
            variant={variant}
            {...args}
          />
        ))}
      </VStack>
    ))}
  </HStack>
)

export const StyleVariantsBasic: Story = {
  render: () => (
    <VStack spacing={8}>
      <Box textAlign="center">
        Click anywhere in the whitespace and then tab to see the button styling
        on `:focus-visible`
      </Box>
      <StyleVariantList label="Tag Name" isCloseable />
    </VStack>
  ),
}

export const StyleVariantsAsLinks: Story = {
  render: () => (
    <VStack spacing={8}>
      <Box textAlign="center">
        They are all rendered as links to hover, click, and focus
      </Box>
      <StyleVariantList as={Link} label="Tag Name" />
    </VStack>
  ),
}

export const ElementVariants: Story = {
  args: {
    status: "tag",
  },
  render: (args) => (
    <HStack>
      <Tag {...args} label="Tag name" />
      <Tag {...args} label="Tag name too big" />
      <Tag
        {...args}
        label="Tag name"
        rightIcon={TbSquareRoundedNumber8Filled}
      />
      <Tag {...args} label="Tag name" isCloseable />
      <Tag {...args} label="Tag name" leftIcon={MdLanguage} />
      <Tag {...args} label="Tag name" rightIcon={MdInfoOutline} />
      <Tag {...args} label="Tag name too big" maxW="100px" />
    </HStack>
  ),
}
