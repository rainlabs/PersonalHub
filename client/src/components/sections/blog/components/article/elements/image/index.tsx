import React, { FC } from 'react';
import uriUtils from '../../../../../../../utils/uri.utils';
import LightGallery from 'lightgallery/react';
import lgMediumZoom from 'lightgallery/plugins/mediumZoom';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-medium-zoom.scss';

type Props = {
    src: string,
    original?: string,
    alt?: string,
    children?: React.ReactNode
}

const BlogElementImage: FC<Props> = ({ src, original, alt, children }) => {
    function renderTitle() {
        if (children) {
            return (
                <p className="img-title text-center mb-4 text-sm text-gray-500 dark:text-slate-500">
                    { children }
                </p>
            )
        }
    }

    return (
        <LightGallery licenseKey={import.meta.env.VITE_LG_LICENSE} selector='.inline-image' plugins={[lgMediumZoom]}>
            <figure className='inline-image' data-src={uriUtils.getURL(original ? original : src)}>
                <img className={`text-center rounded-lg mx-auto ${children ? 'mb-1' : 'mb-2'}`} src={ uriUtils.getURL(src) } alt={alt} />
            </figure>
            { renderTitle() }
        </LightGallery>
    )
}

export default BlogElementImage;