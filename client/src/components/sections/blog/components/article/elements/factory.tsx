import React, { FC } from 'react';
// import ReactDOMServer from 'react-dom/server';
import BlogCheckList from './check_list';

type Props = {
    children: string
}

interface IBlogElement {
    [key: string]: React.FC<any>
}

const blogElements: IBlogElement = {
    'checkList': BlogCheckList
}
const elementRegex: RegExp = /!\${(.*?):(.*?)}\$!/gs

const BlogElementsFactory: FC<Props> = ({ children }) => {
    function renderElements() {
        const match = children.matchAll(elementRegex)
        console.log(match.next())
        console.log(match.next())
        console.log(match.next())
        // if (match?.length === 3) {
        //     const Element = blogElements[match[1]]
        //     const data = JSON.parse(match[2])
        //     return children.replace(match[0], ReactDOMServer.renderToString(<Element {...data} />))
        // }
        return children
    }

    return (
        <div className='mt-4 article-text' dangerouslySetInnerHTML={{__html: renderElements()}}></div>
    )
}

export default BlogElementsFactory;