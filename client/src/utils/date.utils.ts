const toDateString = (raw_date: string | Date, format: Intl.DateTimeFormatOptions) => {
    const date = new Date(raw_date)
    return date.toLocaleString('ru-RU', format)
}

export default {
    extractDate(raw_date: string | Date) {
        const format: Intl.DateTimeFormatOptions = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }
        return toDateString(raw_date, format)
    },

    getCurrentYear() {
        const format: Intl.DateTimeFormatOptions = {
            year: 'numeric'
        }
        return toDateString(new Date(), format)
    },

    toDateString
}