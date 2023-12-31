import { Box, BoxProps } from '@chakra-ui/react'
import { Navbar } from '@renderer/components/Navbar'

interface Props extends BoxProps {}

export const Layout = ({ children, ...props }: Props): JSX.Element => {
  return (
    <>
      <Navbar />
      <Box {...props}>{children}</Box>
    </>
  )
}
