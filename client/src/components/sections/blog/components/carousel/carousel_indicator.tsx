import React, { FC } from 'react';

type Props = {
    carouselId: string,
    slideId: number,
    label: string,
    active?: boolean
}

const BlogCarouselIndicator: FC<Props> = ({ carouselId, slideId, label, active }) => {
    return (
        <button
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide-to={slideId}
            className={active ? 'active' : ''}
            aria-current={active ? 'true' : 'false'}
            aria-label={label}
        ></button>
    )
}

export default BlogCarouselIndicator;