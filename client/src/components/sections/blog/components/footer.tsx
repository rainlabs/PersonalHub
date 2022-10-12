import React, { FC } from 'react';
import dateUtils from '../../../../utils/date.utils';

const BlogFooter: FC = () => {
    function getCopyrightDateRange() {
        const dates = [import.meta.env.VITE_COPYRIGHT_YEAR, dateUtils.getCurrentYear()]
        return Array.from(new Set(dates)).join(' \u2013 ')
    }

    return (
        <footer className="bg-slate-100 border-t-2 border-slate-200 dark:bg-slate-800 dark:border-slate-700 text-center">
            <div className="text-gray-500 p-4">
                © {getCopyrightDateRange()} Владимир Зяблицкий
            </div>
        </footer>
    )
}

export default BlogFooter;