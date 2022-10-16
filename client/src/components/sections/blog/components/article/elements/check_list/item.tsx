import React, { FC } from 'react';
import FailIcon from '../../../../../../icons/fail_icon';
import SuccessIcon from '../../../../../../icons/success_icon';

export type CheckListItemProps = {
    name: string,
    done: boolean
}

const BlogCheckListItem: FC<CheckListItemProps> = ({name, done}) => {
    return (
        <div className="flex items-center justify-between text-gray-800 dark:text-gray-200 bg-slate-50 dark:bg-slate-800 first:rounded-t-lg last:rounded-b-lg px-4 py-2">
            <p>{ name }</p>

            <div className={`w-5 h-5 sm:h-7 sm:w-7 ${done ? 'text-green-500' : 'text-red-400'}`}>
                { done ? <SuccessIcon /> : <FailIcon /> }
            </div>
        </div>
    )
}

export default BlogCheckListItem;