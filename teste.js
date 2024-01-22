const myName = 'Mario Burali'
const city = 'Maringá'
const birthYear = 1996
console.log(myName)
console.log(city)
console.log(birthYear)

const base = 5
const height = 8
const area = base * height
const perimeter = base + height

console.log(area);
console.log(perimeter);

const age = 4
if (age >= 18){
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}

const grade = 45
let message

if (grade >= 80) {
    message = 'Parabéns, aprovado!'
}
else if (grade >= 60) {
    message = 'Lista de espera'
}
else {
    message = 'Reprovado'
}
console.log(message);