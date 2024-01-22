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

const grade = 95
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

const currentHour = 6
let texto;

if (currentHour >= 22) {
    texto = 'Vá dormir'
}
else if (currentHour >= 18){
    texto = 'Rango da noite!'
}
else if (currentHour >= 14){
    texto = 'Hora do bolo'
}
else if (currentHour >= 11){
    texto = 'Hora do almoço'
}
else if (currentHour >= 4){
    texto = 'Cafézinho'
}
else {
    texto = 'nada'
}

console.log(texto);