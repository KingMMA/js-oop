function containsSpam(str) {
    return str.toLowerCase().includes('spam');
}

console.log(containsSpam('This is a spam message'));
console.log(containsSpam('This is a regular message'));
console.log(containsSpam('SPAM is bad'));


function replaceSpam(str) {
    return str.toLowerCase().replaceAll("spam", '***');
}

console.log(replaceSpam('This is a spam message'));
console.log(replaceSpam('This is a regular message'));
console.log(replaceSpam('SPAM spam spam is bad'));

function replaceSpamInArray(arr) {
    return arr.map(str => replaceSpam(str));
}

const messages = ['This spam is spammy spam', 'No spam here', 'SPAM is everywhere'];
console.log(replaceSpamInArray(messages)); 
