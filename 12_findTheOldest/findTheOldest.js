const findTheOldest = function (people) {
  people.sort(function (a, b) {
    let yearOfDeathA = a.yearOfDeath
    if ('yearOfDeath' in a === false) yearOfDeathA = 2024

    let yearOfDeathB = b.yearOfDeath
    if ('yearOfDeath' in b === false) yearOfDeathB = 2024

    const lastPerson = yearOfDeathA - a.yearOfBirth
    const nextPerson = yearOfDeathB - b.yearOfBirth
    if (lastPerson > nextPerson) return -1
    else {
      return 1
    }
  })
  return people[0]
  //run through array to find objects,
  //check obj year of death and minus year of birth,
  //compare year of birth to obj beforehand
}

// Do not edit below this line
module.exports = findTheOldest
