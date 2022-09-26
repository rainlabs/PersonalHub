import React, { FC } from 'react';
import { CardInfo } from '../types/card_info'
import { CardType } from '../../../shared/card_type'
import PinnedCard from './_pinned_card';
import SmallCard from './_small_card';
import MediumCard from './_medium_card';
import BigCard from './_big_card';

type CompMap = Record<CardType, React.FC<any>>

const ComponentMap: CompMap = {
    [CardType.PINNED]: PinnedCard,
    [CardType.SMALL]: SmallCard,
    [CardType.MEDIUM]: MediumCard,
    [CardType.BIG]: BigCard,
}

type Props = {
    card_type: CardType,
    image: string,
    topic: string,
    title: string,
    children: React.ReactNode
}

const CardFactory: FC<Props> = ({card_type, image, topic, title, children}) => {
    const Component = ComponentMap[card_type];
    return <Component image={image} topic={topic} title={title}>{children}</Component>
}

export default CardFactory;