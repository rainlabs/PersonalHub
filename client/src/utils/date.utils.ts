export default {
    extractDate(raw_date: string | Date) {
        const format: Intl.DateTimeFormatOptions = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }
        let date = new Date(raw_date)
        return date.toLocaleString('ru-RU', format)
    }
}