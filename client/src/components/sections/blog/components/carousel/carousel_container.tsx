import React, { FC } from 'react';
import reactUtils from '../../../../../utils/react.utils';
import BlogCarouselIndicator from './carousel_indicator';
import { CarouselItemProps } from './carousel_item';

type Props = {
    carouselId: string,
    className?: string,
    children: React.ReactNode
}

const BlogCarouselContainer: FC<Props> = ({ carouselId, className, children }) => {

    function renderIndicators() {
        const elements = reactUtils.getValidChildren(children)

        return elements.map((el, idx) => {
            const elementProps = el.props as CarouselItemProps
            return <BlogCarouselIndicator key={idx} carouselId={carouselId} slideId={idx} label={elementProps.alt} active={idx === 0} />
        })
    }

    return (
        <div id={carouselId} className={`carousel relative ${className || ''}`} data-bs-ride="carousel" data-bs-interval="false">
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                { renderIndicators() }
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
                { children }
            </div>
            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target={`#${carouselId}`}
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target={`#${carouselId}`}
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default BlogCarouselContainer;