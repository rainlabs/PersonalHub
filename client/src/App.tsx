import React, { FC } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import MainRouter from './routes'
// import 'tw-elements'
import './styles/App.scss'

type Props = {
    context?: {}
}

const App: FC<Props> = ({context}) => {
    return (
        <HelmetProvider context={context}>
            <MainRouter />
        </HelmetProvider>
    )
}

export default App
