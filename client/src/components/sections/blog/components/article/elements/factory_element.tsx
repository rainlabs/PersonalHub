import React, { FC } from 'react';
import BlogElementCheckList from './check_list';
import BlogElementDiscList from './disc_list';
import BlogElementListItem from './list_item';
import BlogElementParagraph from './paragraph';
import BlogElementText from './text';
import BlogElementYandexMusic from './yandex_music';
import BlogElementImage from './image';
import BlogElementCheckListItem from './check_list/item';
import BlogElementEmoji from './emoji';
import BlogElementTextBold from './text/bold';

type ElementData = {
    node: string,
    content: ElementData[] | string,
    attrs?: {}
}

type Props = {
    element: ElementData
}

interface IBlogElement {
    [key: string]: React.FC<any>
}

const blogElements: IBlogElement = {
    'Text': BlogElementText,
    'Bold': BlogElementTextBold,
    'Paragraph': BlogElementParagraph,
    'DiscList': BlogElementDiscList,
    'ListItem': BlogElementListItem,
    'CheckList': BlogElementCheckList,
    'CheckListItem': BlogElementCheckListItem,
    'YandexMusic': BlogElementYandexMusic,
    'Image': BlogElementImage,
    'Emoji': BlogElementEmoji
}

const BlogElementsFactoryElement: FC<Props> = ({ element }) => {
    const BlogElement = blogElements[element.node]

    return (
        <BlogElement {...(element.attrs || {})}>
            {
                (element.content instanceof Array) ? element.content.map((el: any, idx: number) => <BlogElementsFactoryElement key={idx} element={el} />) : element.content
            }
        </BlogElement>
    )
}

export default BlogElementsFactoryElement;