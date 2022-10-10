import React, { FC } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

type Props = {
    className?: string,
    children: React.ReactNode
}

const BlogGallery: FC<Props> = ({ className, children }) => {
    const onInit = () => {
    };

    return (
        <section className={`article-gallery text-gray-700 ${className || ''}`}>
            <div className="container py-6 mx-auto lg:py-12">
                <LightGallery licenseKey={import.meta.env.VITE_LG_LICENSE} onInit={onInit} speed={500} plugins={[lgZoom]} elementClassNames='flex flex-wrap -m-1 md:-m-2'>
                    { children }
                </LightGallery>
            </div>
        </section>
    )
}

export default BlogGallery;