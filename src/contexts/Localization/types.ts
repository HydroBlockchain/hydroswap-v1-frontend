import { ReactText } from 'react'
// import { Language } from 'briws-uikit' // Briws: not implemented

export type ContextData = {
  [key: string]: ReactText
}

export interface ProviderState {
  isFetching: boolean
  currentLanguage: ''
}

export interface ContextApi extends ProviderState {
  setLanguage: (language: '') => void
  t: (key: string, data?: ContextData) => string
}
