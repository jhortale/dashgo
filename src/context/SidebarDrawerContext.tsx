import { createContext, useContext, useEffect } from 'react'
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/hooks'
import { useRouter } from 'next/dist/client/router'

interface SidebarDrawerProviderProps {
  children: React.ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn
const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export function SidebarDrawerProvider({
  children
}: SidebarDrawerProviderProps): JSX.Element {
  const disclosure = useDisclosure()
  const { onClose } = disclosure
  const router = useRouter()

  useEffect(() => {
    onClose()
  }, [router.asPath, onClose])
  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
