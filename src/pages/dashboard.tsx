import dynamic from 'next/dynamic'
import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { ApexOptions } from 'apexcharts'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const options: ApexOptions = {
  colors: [theme.colors.pink[400]],
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-07-20T00:00:00.000Z',
      '2021-07-22T00:00:00.000Z',
      '2021-07-24T00:00:00.000Z',
      '2021-07-26T00:00:00.000Z',
      '2021-07-28T00:00:00.000Z',
      '2021-07-30T00:00:00.000Z'
    ]
  },
  fill: {
    colors: [theme.colors.pink[400]],
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}
const series = [{ name: 'series1', data: [100, 22, 34, 65, 1, 67] }]

export default function Dashboard(): JSX.Element {
  return (
    <Flex flexDir="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth={320} align="flex-start">
          <Box p="8" bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Week subscribers
            </Text>
            <Chart series={series} options={options} type="area" height={160} />
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Opening rates
            </Text>
            <Chart series={series} options={options} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
