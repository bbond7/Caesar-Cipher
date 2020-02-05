let cipher = [...Array(26).keys()].map((item) => item + 65)
let letters = cipher.map((key) => String.fromCharCode(key))

function sendData(form) {
    let input = form.inputbox.value
    let result = rot13(input)
    document.getElementById('result').innerText = 'Encrypted phrase is: ' + result
}
function rot13(input) {
    let inputArray = input.split('')
    let response = ''

    for (let i = 0; i < inputArray.length; i++) {
        let item = inputArray[i]
        
        let letterIndex = letters.indexOf(item)
        if (letterIndex > -1) {
            let key = cipher[letterIndex]
            let translatedKey = key + 13
        
            if (translatedKey > 90) {
                translatedKey = translatedKey - 26
            }
            let translatedKeyIndex = cipher.indexOf(translatedKey)
            response += letters[translatedKeyIndex]
        } else {
            console.log('Invalid Letter')
            break;
        }
    }
    return response 
}
console.log(rot13("BRYAN"))