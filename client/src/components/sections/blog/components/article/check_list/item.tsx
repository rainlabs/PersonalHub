import React, { FC } from 'react';
import FailIcon from '../../../../../icons/fail_icon';
import SuccessIcon from '../../../../../icons/success_icon';

export type CheckListItemProps = {
    name: string,
    done: boolean
}

const BlogCheckListItem: FC<CheckListItemProps> = ({name, done}) => {
    return (
        <div className="flex items-center justify-between text-gray-800 dark:text-gray-200">
            <p>{ name }</p>

            <div className="w-5 h-5 text-green-500 sm:h-7 sm:w-7">
                { done ? <SuccessIcon /> : <FailIcon /> }
            </div>
        </div>
    )
}

export default BlogCheckListItem;