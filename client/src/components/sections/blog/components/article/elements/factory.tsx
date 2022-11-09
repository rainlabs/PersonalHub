import React, { FC } from 'react';
import { SyntaxError, parse } from '../../../../../../sibirianit_doc'
import BlogElementsFactoryElement from './factory_element';

type Props = {
    children: string
}

const BlogElementsFactory: FC<Props> = ({ children }) => {
    function renderElements() {
        try {
            const elements = parse(children);
            console.log(elements)
            if (elements.node === 'SibirianitDoc') {
                return (
                    <div className='mt-4 article-text'>
                        { (elements.content || []).map( (el: any, idx: number) => <BlogElementsFactoryElement key={idx} element={el} /> ) }
                    </div>
                )
            }
        } catch (e) {
        }

        return <div className='mt-4 article-text' dangerouslySetInnerHTML={{__html: children}}></div>
    }

    return (
        <>
            { renderElements() }
        </>
    )
}

export default BlogElementsFactory;