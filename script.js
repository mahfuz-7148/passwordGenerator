function generatePassword(length, lowerCase, upperCase, numbers, symbols){
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbersChars = '0123456789'
    const symbolsChars = '!@#$%*-=+'

    let allowChars = ''
    let password =''
    allowChars += lowerCase ? lowerCaseChars : ''
    allowChars += upperCase ? upperCaseChars : ''
    allowChars += numbers ? numbersChars : ''
    allowChars += symbols ? symbolsChars : ''

    if (length <= 0 && allowChars.length === 0) {
        return `At least 1 must be password length`
    }

    for (let index = 0; index < length; index++) {
        const randomNumber = Math.floor(Math.random() * allowChars.length)
        password += allowChars[randomNumber]
        
    }
    return password
}

const passwordLength = 10
const lowerCase = true
const upperCase = true
const numbers = true
const symbols = true

const password = generatePassword(passwordLength, lowerCase, upperCase, numbers, symbols)
console.log(`generate our password: ${password}`);