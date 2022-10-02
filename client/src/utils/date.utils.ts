export default {
    extractDate(raw_date: string | Date) {
        // 13.01.2022
        const format = {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric'
        }
        let date = new Date(raw_date)
        date = new Date(date.getTime() - date.getTimezoneOffset() * 60000)

        return date.toLocaleString('ru-RU', format)
    }
}