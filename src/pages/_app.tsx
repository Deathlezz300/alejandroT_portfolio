import { store } from '@/store/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Provider} from 'react-redux'
import i18next from 'i18next'
import {I18nextProvider} from 'react-i18next'
import global_en from '../translations/en.json'
import global_es from '../translations/es.json'

i18next
.init({
  lng:"en",
  interpolation:{escapeValue:false},
  resources:{
    en:{
      global:global_en
    },
    es:{
      global:global_es
    }
  }
})


export default function App({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
          <I18nextProvider i18n={i18next}>
            <Component {...pageProps} />
          </I18nextProvider>
      </Provider>
  )
}
