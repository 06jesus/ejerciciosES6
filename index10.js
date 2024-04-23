// Dado el siguiente javascript usa forof y forin para hacer la media del
// volumen de todos los sonidos favoritos que tienen los usuarios.

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

function totalVolume(users, soundType) {
  return users.reduce((totalVol, user) => {
    if (user.favoritesSounds.hasOwnProperty(soundType)) {
      return totalVol + user.favoritesSounds[soundType].volume
    }
    return totalVol
  }, 0)
}
const VolumeWaves = totalVolume(users, 'waves')
const VolumeWind = totalVolume(users, 'wind')
const VolumeTrain = totalVolume(users, 'train')
const VolumeShower = totalVolume(users, 'shower')
const VolumeFirecamp = totalVolume(users, 'firecamp')

console.log(VolumeWaves)
console.log(VolumeWind)
console.log(VolumeTrain)
console.log(VolumeShower)
console.log(VolumeFirecamp)
