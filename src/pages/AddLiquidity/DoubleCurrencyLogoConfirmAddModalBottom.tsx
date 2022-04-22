import React from 'react'
import {Currency} from '@pancakeswap-libs/sdk'

export default function DoubleCurrencyLogoConfirmAddModalBottom({
                                               currency0,
                                               currency1,
                                               size,
                                           }: DoubleCurrencyLogoProps) {
    return (
        <div>
            {currency0}
            {currency1}
            {size}
        </div>
    )
}

interface DoubleCurrencyLogoProps {
    size?: number
    currency0?: Currency
    currency1?: Currency
}