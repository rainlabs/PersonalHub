import React, { FC } from 'react';
import { Button } from '@strapi/design-system/Button';
import PaperPlane from '@strapi/icons/PaperPlane';
import { useCMEditViewDataManager } from '@strapi/helper-plugin';

const TelegramButton: FC = () => {
    const { modifiedData, layout } = useCMEditViewDataManager();

    if (layout.apiID !== 'article' || modifiedData.publishedAt === null) {
        return null
    }

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        const publishUrl = `https://t.me/share/url?url=https://t.me/iv?url=https%3A%2F%2Fvladimir.ziablitskii.ru%2Fblog%2Farticle%2F${modifiedData.slug}%26rhash=441bb7076865c3`
        window.open(publishUrl, '_blank').focus();
    }

    return (
        <Button variant="secondary" startIcon={<PaperPlane />} onClick={handleClick}>
            Publish to telegram
        </Button>
    )
}

export default TelegramButton;