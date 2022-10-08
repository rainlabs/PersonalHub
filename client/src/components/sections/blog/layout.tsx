import React, { FC } from 'react';
import { Provider } from 'react-redux'
import Store from './redux/store';
import { HelmetProvider } from 'react-helmet-async';
import '../../../styles/blog.page.scss'

type Props = {
    children?: React.ReactNode
}

const BlogLayout: FC<Props> = ({children}) => {
    return (
        <Provider store={Store}>
            <HelmetProvider>
                <main className='blog-page font-montserrat'>
                    <div className='blog-container lg:mx-11 mt-5'>
                        { children }
                    </div>
                </main>
            </HelmetProvider>
        </Provider>
    )
}

export default BlogLayout;