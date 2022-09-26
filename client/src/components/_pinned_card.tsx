import React, { FC } from 'react';
import { CardInfo } from '../types/card_info';

const PinnedCard: FC<CardInfo> = ({image, topic, title, children}) => {
    return (
        <div className="group flex h-full bg-white rounded overflow-hidden shadow-lg transform transition duration-500 hover:shadow-blue-200/50">
            <a href="post.html" className="flex flex-wrap no-underline hover:no-underline">
                <div className="w-full md:w-2/3 rounded-t">
                    <img src={image} className="h-full w-full shadow group-hover:shadow-blue-200/50" />
                </div>

                <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg group-hover:shadow-blue-200/50">
                        <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">
                            { topic }
                        </p>
                        <div className="w-full font-bold text-xl text-gray-900 px-6">
                            { title }
                        </div>
                        <p className="text-gray-800 font-serif text-base px-6 mb-5">
                            { children }
                        </p>
                    </div>

                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6 group-hover:shadow-blue-200/50">
                        <div className="flex items-center justify-between">
                            <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                            <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default PinnedCard;