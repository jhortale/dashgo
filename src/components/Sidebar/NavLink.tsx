import {
  Icon,
  Link,
  Text,
  LinkProps as ChakraLinkProps
} from '@chakra-ui/react'

interface NavLinkProps extends ChakraLinkProps {
  icon: React.ElementType
  children: React.ReactNode
}

export function NavLink({
  icon,
  children,
  ...props
}: NavLinkProps): JSX.Element {
  return (
    <Link display="flex" align="center" {...props}>
      <Icon as={icon} fontSize={20} />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  )
}
