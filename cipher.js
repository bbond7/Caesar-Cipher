function rot13(str) {
    var arr = [];

    for (i=0; i<=str.length; i++) {
        if (str.charCodeAt(i)>=65 && str.charCodeAt(i)<=77) {
            arr.push(String.fromCharCode(str.charCodeAt(i)+13));
        }
        else if (str.charCodeAt(i)>=78 && str.charCodeAt(i)<=90) {
            arr.push(String.fromCharCode(str.charCodeAt(i)-13));
        }
        else if (str.charCodeAt(i)<65) {
            arr.push(str[i]);
        }
    }
    document.write(arr.join(""));
}

rot13("welcome")

//function rot13(str) {
    var arr = [];

    for (i=0; i<=str.length; i++) {
        if (str.charCodeAt(i)>=65 && str.charCodeAt(i)<=77) {
            arr.push(String.fromCharCode(str.charCodeAt(i)+13));
        }
        else if (str.charCodeAt(i)>=78 && str.charCodeAt(i)<=90) {
            arr.push(String.fromCharCode(str.charCodeAt(i)-13));
        }
        else if (str.charCodeAt(i)<65) {
            arr.push(str[i]);
        }
    }
    document.write(arr.join(""));
}

rot13("hgfe")

//main js

function rot13 (str, num) {
    var lowerCaseStr = str.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz' .split(' ');
    var newStr = '';

    for(var i = 0; i < lowerCaseStr.length; i++) {
        var currentLetter = lowerCaseStr[i];
        if(currentLetter === '') {
            newStr += currentLetter;
            continue;
        }
        var currentIndex = alphabet.indexOf(currentLetter);
        var newIndex = currentIndex + num;
        if(newIndex > 25) newIndex = newIndex - 26;
        if(newIndex < 0) newIndex + NewIndex + 26;
        if(str[i] === str[i].toUpperCase()) {
            newStr += alphabet[newIndex];
        }
        else newStr += alphabet[newIndex];
    }
    return newStr;
}

console.log(rot13)

//newest

var letters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var myNum = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]

function sendData(form) {
    var entry = form.inputbox.value;
    form.input.value = "";
    entry.split(' ')
}


function rot13 (letters, myNum) {
    for(var i = 0; i < letters; i++) {
        if( letters.indexOf[0] == myNum.indexOf[0]) { shift.myNum +13
            document.getElementById("result").innerText = "";
        } else if 
        

console.log(entry)

