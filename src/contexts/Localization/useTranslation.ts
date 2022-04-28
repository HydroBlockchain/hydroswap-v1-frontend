import { useContext } from 'react'
// import { LanguageContext } from './Provider' // Briws: not implemented

const useTranslation = () => {
  const languageContext = undefined

  if (languageContext === undefined) {
    throw new Error('Language context is undefined')
  }

  return languageContext
}

export default useTranslation
