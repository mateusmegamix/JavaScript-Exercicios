const pilotos = ['vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //massa quebrou o carro! remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // insere no final
console.log(pilotos)

pilotos.shift() // remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton') // insere no inicio
console.log(pilotos)

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1,)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)