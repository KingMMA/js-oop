function getDay(){
    let data = new Date();
    let values = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

    return values[data.getDay()];
}

console.log(getDay());