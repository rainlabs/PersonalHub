import React, { FC } from 'react';
import { Provider } from 'react-redux'
import Store from './redux/store';
import '../../../styles/blog.page.scss'

type Props = {
    children?: React.ReactNode
}

const BlogLayout: FC<Props> = ({children}) => {
    return (
        <Provider store={Store}>
            <main className='blog-page font-montserrat'>
                <div className='blog-container mx-11 mt-5'>
                    { children }
                </div>
            </main>
        </Provider>
    )
}

export default BlogLayout;