// Verifica si el numero es pare
const isPair = (num) => num !== 0 && num % 2 === 0 ? 'Si' : 'No'

// Verificar que en un array de numeros que todos sean pares
const allPairs = (arr) => arr.every(num => num % 2 === 0) ? 'Si' : 'No'

// Obtener la longitud de un string
const stringLength = (str) => str.length

// Retorna el día de la semana segun el numero de dia
const dayNameByNumber = (num) => {
  const days = {
    1: 'Domingo',
    2: 'Lunes',
    3: 'Martes',
    4: 'Miércoles',
    5: 'Jueves',
    6: 'Viernes',
    7: 'Sábado'
  }
  return days[num]
}

// Retorna la hora actual
const getTime = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  return `${hours}:${minutes}:${seconds}`
}

// Ordena los numeros de un array
const sortNumbers = (arr) => arr.sort((a, b) => a - b)

// Retorna un string en mayusculas
const toUpperCase = (str) => str.toUpperCase()

// Exportar las funciones
module.exports = {
  isPair,
  allPairs,
  stringLength,
  dayNameByNumber,
  getTime,
  sortNumbers,
  toUpperCase
}
