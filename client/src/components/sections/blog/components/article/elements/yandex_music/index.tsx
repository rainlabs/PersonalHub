import React, { FC } from 'react';

type Props = {
    artist: string,
    trackName: string,
    trackId: string,
    albumId: string,
    artistId: string,
    children?: React.ReactNode
}

const BlogElementYandexMusic: FC<Props> = ({ artist, trackName, trackId, albumId, artistId, children }) => {
    function renderTitle() {
        if (children) {
            return (
                <p className="text-center">
                    { children } <a href={`https://music.yandex.ru/album/${albumId}/track/${trackId}`} className="hidden">
                        { artist } - { trackName }
                    </a>
                </p>
            )
        }
    }
    return (
        <>
            { renderTitle() }
            <iframe className="mt-4 mx-auto" frameBorder="0" width="100%" height="150" src={`https://music.yandex.ru/iframe/#track/${trackId}/${albumId}`}>
                Слушайте <a href={`https://music.yandex.ru/album/${albumId}/track/${trackId}`}>
                    { trackName }
                </a> — <a href={`https://music.yandex.ru/artist/${artistId}`}>
                    { artist }
                </a> на Яндекс Музыке
            </iframe>
        </>
    )
}

export default BlogElementYandexMusic;