import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      '50': '#eeeef2',
      '100': '#d1d2dc',
      '200': '#b3b5c6',
      '300': '#9699b0',
      '400': '#797d9a',
      '500': '#616480',
      '600': '#4b4d63',
      '700': '#353646',
      '800': '#1f2029',
      '900': '#181b23'
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50'
      }
    }
  }
})
