const str1 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit odio repellendus ex magnam quisquam. Porro eius, dignissimos fugiat adipisci nobis, modi et. Dolorem at modi, tempore, sunt nobis earum optio?";

function preview(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }

  let text = str.substr(0, maxLength);
  let lastSpace = text.lastIndexOf(' ');

  if (lastSpace !== -1) {
    text = text.substr(0, lastSpace);
  }

  return text + '…'; // Додаємо знак «…».
}


const maxLength = 10;

console.log(preview(str1, maxLength));
