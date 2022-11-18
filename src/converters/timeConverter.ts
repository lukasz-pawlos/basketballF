export  class timeConverter {
    static longTime(date: string) {
        const newDate = new Date(date);
        return newDate.toLocaleString();
    }
}