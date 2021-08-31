


const isPalindrome = (text) => {

    //TODO: Implementacion de palindromo


    return true
}

let result = ''
if(isPalindrome('')) {
result = 'false-Mario'

} else {
result = 'MortalKombat-true'
    
}

// const result = isPalindrome('') ? 'false-Mario' : 'MortalKombat-true'
//false-Mario
const example = 'false-Mario'
const example2 = 'ZeldaKLuigi'
const splitresult = example2.split('KLu')
const elemnto = splitresult[0]
console.log('example = ', example)
console.log(splitresult)
console.log('elemnto = ', elemnto)

const getTarget2Text = (text) => {
    return text
}
const getTarget3Text = (text) => {
    return text
}


document.querySelector('#target1').textContent = result

getTarget2Text(result)
getTarget3Text(result)