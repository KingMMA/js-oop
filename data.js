function getDay(){
    let data = new Date();
    let values = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

    return values[data.getDay()-1];
}

console.log(getDay());