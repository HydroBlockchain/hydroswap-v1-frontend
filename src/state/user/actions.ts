import { createAction } from '@reduxjs/toolkit'

export interface SerializedToken {
  chainId: number
  address: string
  decimals: number
  symbol?: string
  name?: string
}

export interface SerializedPair {
  token0: SerializedToken
  token1: SerializedToken
}

export const updateMatchesDarkMode = createAction<{ matchesDarkMode: boolean }>('user/updateMatchesDarkMode')
export const updateUserDarkMode = createAction<{ userDarkMode: boolean }>('user/updateUserDarkMode')
export const updateUserExpertMode = createAction<{ userExpertMode: boolean }>('user/updateUserExpertMode')
export const updateUserSlippageTolerance = createAction<{ userSlippageTolerance: number }>(
  'user/updateUserSlippageTolerance'
)
export const updateUserDeadline = createAction<{ userDeadline: number }>('user/updateUserDeadline')
export const addSerializedToken = createAction<{ serializedToken: SerializedToken }>('user/addSerializedToken')
export const removeSerializedToken = createAction<{ chainId: number; address: string }>('user/removeSerializedToken')
export const addSerializedPair = createAction<{ serializedPair: SerializedPair }>('user/addSerializedPair')
export const removeSerializedPair = createAction<{ chainId: number; tokenAAddress: string; tokenBAddress: string }>(
  'user/removeSerializedPair'
)
export const muteAudio = createAction<void>('user/muteAudio')
export const unmuteAudio = createAction<void>('user/unmuteAudio')

export enum ChartViewMode {
  BASIC = 'BASIC',
  TRADING_VIEW = 'TRADING_VIEW',
}

export enum FarmStakedOnly {
  ON_FINISHED = 'onFinished',
  TRUE = 'true',
  FALSE = 'false',
}
export const toggleTheme = createAction<void>('user/toggleTheme')
export const updateUserFarmStakedOnly = createAction<{ userFarmStakedOnly: FarmStakedOnly }>(
    'user/updateUserFarmStakedOnly',
)
export const updateUserSingleHopOnly = createAction<{ userSingleHopOnly: boolean }>('user/updateUserSingleHopOnly')
export const updateGasPrice = createAction<{ gasPrice: string }>('user/updateGasPrice')
export const addWatchlistToken = createAction<{ address: string }>('user/addWatchlistToken')
export const addWatchlistPool = createAction<{ address: string }>('user/addWatchlistPool')
export const updateUserPoolStakedOnly = createAction<{ userPoolStakedOnly: boolean }>('user/updateUserPoolStakedOnly')
export enum ViewMode {
  TABLE = 'TABLE',
  CARD = 'CARD',
}
export const updateUserPoolsViewMode = createAction<{ userPoolsViewMode: ViewMode }>('user/updateUserPoolsViewMode')
export const updateUserFarmsViewMode = createAction<{ userFarmsViewMode: ViewMode }>('user/updateUserFarmsViewMode')
export const updateUserPredictionChartDisclaimerShow = createAction<{ userShowDisclaimer: boolean }>(
    'user/updateUserPredictionChartDisclaimerShow',
)
export const updateUserPredictionAcceptedRisk = createAction<{ userAcceptedRisk: boolean }>(
    'user/updateUserPredictionAcceptedRisk',
)
export const updateUserUsernameVisibility = createAction<{ userUsernameVisibility: boolean }>(
    'user/updateUserUsernameVisibility',
)
export const updateUserExpertModeAcknowledgementShow = createAction<{ userExpertModeAcknowledgementShow: boolean }>(
    'user/updateUserExpertModeAcknowledgementShow',
)
export const hidePhishingWarningBanner = createAction<void>('user/hidePhishingWarningBanner')
export const setIsExchangeChartDisplayed = createAction<boolean>('user/toggleIsExchangeChartDisplayed')
export const setChartViewMode = createAction<ChartViewMode>('user/setChartViewMode')