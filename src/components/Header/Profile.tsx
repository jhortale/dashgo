import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile(): JSX.Element {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>João Hortale</Text>
        <Text color="gray.300" fontSize="small">
          jhortale@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="João Hortale"
        src="https://avatars.githubusercontent.com/u/56280032?v=4"
      />
    </Flex>
  )
}
