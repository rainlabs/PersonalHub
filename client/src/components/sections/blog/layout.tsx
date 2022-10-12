import React, { FC } from 'react';
import { Provider } from 'react-redux'
import Store from './redux/store';
import BlogHeader from './components/header';
import BlogNavigation from './components/navigation';
import BlogFooter from './components/footer';
import '../../../styles/blog.page.scss'

type Props = {
    children?: React.ReactNode
}

const BlogLayout: FC<Props> = ({children}) => {
    return (
        <Provider store={Store}>
            <div className='blog-page font-montserrat'>
                <div className='blog-container lg:mx-11 mt-5'>
                    <BlogHeader />
                    <BlogNavigation />
                    <main>
                        { children }
                    </main>
                </div>
                <BlogFooter />
            </div>
        </Provider>
    )
}

export default BlogLayout;