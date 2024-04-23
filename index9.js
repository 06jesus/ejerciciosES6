// Dado el siguiente javascript usa forof para recorrer el array de películas,
// genera un nuevo array con las categorías de las películas e imprime por
// consola el array de categorías. Ten en cuenta que las categorías no deberían
// repetirse.

// Para filtrar las categorías puedes ayudarte de la función .includes().

const movies = [
  {
    title: 'Bracula: Condemor II',
    duration: 192,
    categories: ['comedia', 'aventura']
  },
  {
    title: 'Spider-Man: No Way Home',
    duration: 122,
    categories: ['aventura', 'acción']
  },
  {
    title: 'The Voices',
    duration: 223,
    categories: ['comedia', 'thriller']
  },
  {
    title: 'Shrek',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación']
  }
]

// no entiendo el uso del forof, pudiendo usar filter?
const Comedia = movies.filter((movie) => movie.categories.includes('comedia'))
const aventura = movies.filter((movie) => movie.categories.includes('aventura'))
const acción = movies.filter((movie) => movie.categories.includes('acción'))
const animación = movies.filter((movie) =>
  movie.categories.includes('animación')
)
const thriller = movies.filter((movie) => movie.categories.includes('thriller'))

console.log('Comedia:', Comedia)
console.log('Aventura:', aventura)
console.log('Acción:', acción)
console.log('Animación:', animación)
console.log('Thriller:', thriller)
