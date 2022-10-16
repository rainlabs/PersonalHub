import React, { FC } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import MainRouter from './routes'
import './styles/App.scss'
import ColorModeUtils from './utils/color_mode.utils'

type Props = {
    context?: {}
}

ColorModeUtils.applyColorMode()

const App: FC<Props> = ({context}) => {
    return (
        <HelmetProvider context={context}>
            <MainRouter />
        </HelmetProvider>
    )
}

export default App
