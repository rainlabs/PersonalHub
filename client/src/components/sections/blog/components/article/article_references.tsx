import React, { FC } from 'react';
import { ExternalReference } from '../../../../../types/external_reference';
import ExternalLink from '../../../../_external_link';

type Props = {
    references: ExternalReference[]
}

const BlogArticleReferences: FC<Props> = ({ references }) => {
    if (!references || references.length === 0) {
        return <></>
    }

    function renderLinks() {
        return references.map((reference) => {
            return (
                <li key={reference.id}>
                    <ExternalLink to={reference.link} target='_blank'>
                        { reference.displayName }
                    </ExternalLink>
                </li>
            )
        })
    }

    return (
        <div className='mt-7 article-references'>
            <h3 className='text-xl text-center font-normal'>Внешние ссылки</h3>
            <ol className='list-decimal list-inside mt-4 indent-12'>
                { renderLinks() }
            </ol>
        </div>
    )
}

export default BlogArticleReferences;