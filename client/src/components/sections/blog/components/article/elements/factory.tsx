import React, { FC } from 'react';
import { SyntaxError, parse } from '../../../../../../sibirianit_doc'
import BlogElementCheckList from './check_list';
import BlogElementDiscList from './disc_list';
import BlogElementListItem from './list_item';
import BlogElementParagraph from './paragraph';
import BlogElementText from './text';
import BlogElementYandexMusic from './yandex_music';
import BlogElementImage from './image';
import BlogElementCheckListItem from './check_list/item';
import BlogElementEmoji from './emoji';

type Props = {
    children: string
}

interface IBlogElement {
    [key: string]: React.FC<any>
}

const blogElements: IBlogElement = {
    'Text': BlogElementText,
    'Paragraph': BlogElementParagraph,
    'DiscList': BlogElementDiscList,
    'ListItem': BlogElementListItem,
    'CheckList': BlogElementCheckList,
    'StateListItem': BlogElementCheckListItem,
    'YandexMusic': BlogElementYandexMusic,
    'Image': BlogElementImage,
    'Emoji': BlogElementEmoji
}

const BlogElementsFactory: FC<Props> = ({ children }) => {
    function renderSingleElement(element: any, idx: number) {
        const BlogElement = blogElements[element.node]
        return (
            <BlogElement key={idx} {...(element.attrs || {})}>
                {
                    (element.content instanceof Array) ? element.content.map((el: any, idx: number) => renderSingleElement(el, idx)) : element.content
                }
            </BlogElement>
        )
    }

    function renderElements() {
        try {
            const elements = parse(children);
            console.log(elements)
            if (elements.node === 'SibirianitDoc') {
                return (
                    <div className='mt-4 article-text'>
                        { (elements.content || []).map((el: any, idx: number) => renderSingleElement(el, idx)) }
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