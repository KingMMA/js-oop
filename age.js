function birthDateToAge(b) {
    let n = new Date();
    let bDate = new Date(b);
    let age = n.getFullYear() - bDate.getFullYear();
    let n_2000 = n.setFullYear(2000);
    let b_2000 = bDate.setFullYear(2000);

    if (n_2000 < b_2000) age -= 1;

    let months = n.getMonth() - bDate.getMonth();
    if (months < 0) months += 12;

    function getYearWord(years) {
        if (years % 100 >= 11 && years % 100 <= 14) return "років";
        if (years % 10 === 1) return "рік";
        if (years % 10 >= 2 && years % 10 <= 4) return "роки";
        return "років";
    }

    function getMonthWord(months) {
        if (months === 1) return "місяць";
        if (months >= 2 && months <= 4) return "місяці";
        if (months > 4) return "місяців";
    }

    let result = `Вам ${age} ${getYearWord(age)}`;
    if (months > 0) {
        result += ` і ${months} ${getMonthWord(months)}`;
    }

    return result;
}

console.log(birthDateToAge("2004-12-12"));
