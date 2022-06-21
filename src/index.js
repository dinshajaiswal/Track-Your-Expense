import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from './context/context'
import { SpeechProvider } from '@speechly/react-client'
import App from './App'
import './index.css'
ReactDom.render(
    <SpeechProvider appId='51465732-ea7e-4bf5-b4bc-2cfd9655ed33' language='en-US' >
        <Provider>
        <App/>
        </Provider>
    </SpeechProvider>
,document.getElementById('root'));