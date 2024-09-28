const reverseString = function(word) {
    newText=word.split('');
    reverse ="";
    for(let i= newText.length - 1; i>=0;i--){
        reverse += newText[i];
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
