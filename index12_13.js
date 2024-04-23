// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

// Haz varios ejemplos y compruebalos.

// ejemplo 1
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]
function findArrayIndex(array, text) {
  if (mainCharacters.includes(text)) {
    return array.indexOf(text)
  }
}
const index = findArrayIndex(mainCharacters, 'Rey')
console.log(index)

// ejemplo 2

const cityTop10 = [
  'Madrid',
  'Cadiz',
  'Huelva',
  'Bilbao',
  'Valencia',
  'Barcelona',
  'Burgos'
]
const index2 = findArrayIndex(cityTop10, 'Huelva')
console.log(index2)

// ejercicio 13

// Usando la función anterior beneficiate de poder conocer el indice del array
// para crear una función llamada removeItem que pasandole un array y un texto
// como parametros (los mismos parametros que en el anterior ejercicio) llame a
// la función anteriormente creada findArrayIndex y obten el indice para
// posteriormente usar la función de javascript .splice() para eliminar el
// elemento del array.

// Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan
// correctamente.

function removeItem(array, text) {
  const index = findArrayIndex(array, text)
  if (index !== -1) {
    array.splice(index, 1)
  }
  return array
}

const updatedCityTop10 = removeItem(cityTop10, 'Huelva')
console.log(updatedCityTop10)

const updatedCityTop102 = removeItem(cityTop10, 'Bilbao')
console.log(updatedCityTop102)

const updatedCityTop103 = removeItem(cityTop10, 'Cadiz')
console.log(updatedCityTop103)
