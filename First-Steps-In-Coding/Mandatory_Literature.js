function mandatoryLiterature(arg1, arg2, arg3) {
        let pages_all = Number(arg1);
        let pages_perHour = Number(arg2);
        let days_count = Number(arg3);
        let book_readingTime = pages_all / pages_perHour;
        let hours_perDay = book_readingTime / days_count;
        console.log(hours_perDay);
}
mandatoryLiterature("432", "15", "4");