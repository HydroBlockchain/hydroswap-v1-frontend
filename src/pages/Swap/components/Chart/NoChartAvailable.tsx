import { Flex, Text } from 'briws-uikit'
// import { useTranslation } from 'contexts/Localization' // Briws: not implemented
import React from 'react'

interface NoChartAvailableProps {
  token0Address: string
  token1Address: string
  pairAddress: string
  isMobile: boolean
}

const NoChartAvailable: React.FC<NoChartAvailableProps> = ({ token0Address, token1Address, pairAddress, isMobile }) => {
  // const { t } = useTranslation() // Briws: not implemented
  return (
    <>
      <Flex justifyContent="center" alignItems="center" height="100%" flexDirection="column">
        {/* Briws: t() deleted */}
        <Text mb={['8px', '8px', '0px']}>Failed to load price chart for this pair</Text>
        <Text
          textAlign={isMobile ? 'center' : 'left'}
          mb={['8px', '8px', '0px']}
          color="textSubtle"
          small // @ts-ignore
          style={isMobile && { wordSpacing: '100vw' }}
        >
          Token0: {token0Address ?? 'null'}
        </Text>
        <Text
          textAlign={isMobile ? 'center' : 'left'}
          mb={['8px', '8px', '0px']}
          color="textSubtle"
          small // @ts-ignore
          style={isMobile && { wordSpacing: '100vw' }}
        >
          Token1: {token1Address ?? 'null'}
        </Text>
        <Text
          textAlign={isMobile ? 'center' : 'left'}
          mb={['8px', '8px', '0px']}
          color="textSubtle"
          small // @ts-ignore
          style={isMobile && { wordSpacing: '100vw' }}
        >
          Pair: {pairAddress ?? 'null'}
        </Text>
      </Flex>
    </>
  )
}

export default NoChartAvailable
