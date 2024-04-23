// Dado el siguiente javascript usa forof y forin para saber cuantas veces ha
// sido cada sonido agregado por los usuarios a favorito.

// Para ello recorre la lista de usuarios y usa forin para recoger el nombre
// de los sonidos que el usuario tenga como favoritos.

// Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada
// vez que ese sonido se repita como favorito en cada usuario.

// Este ejercicio es un poco complicado con los conocimientos actuales pero...a
// la vez un buen reto y oportunidad para comprender que hay muchas formas de
// hacer las cosas en javascript.

const users = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Pedro',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Cristina',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]

const wavesList = []
const windList = []
const firecampList = []
const trainList = []
const showerList = []

for (const user of users) {
  if ('waves' in user.favoritesSounds) {
    wavesList.push(user)
  }
  if ('wind' in user.favoritesSounds) {
    windList.push(user)
  }
  if ('firecamp' in user.favoritesSounds) {
    firecampList.push(user)
  }
  if ('train' in user.favoritesSounds) {
    trainList.push(user)
  }
  if ('shower' in user.favoritesSounds) {
    showerList.push(user)
  }
}

const totalWaves = wavesList.reduce((acumulador, user) => acumulador + 1, 0)
const totalWind = windList.reduce((acumulador, user) => acumulador + 1, 0)
const totalFirecamp = firecampList.reduce(
  (acumulador, user) => acumulador + 1,
  0
)
const totalTrain = trainList.reduce((acumulador, user) => acumulador + 1, 0)
const totalShower = showerList.reduce((acumulador, user) => acumulador + 1, 0)
