function PersonFactory() {
  const childPerson = {
    name: 'Jane Doe',
    age: 15,
  }

  const adultPerson = {
    name: 'Lorem ipsum',
    age: 34,
    email: 'lipsum@gmail.com',
  }

  const personTypesEnum = Object.freeze({
    CHILD: 'Child',
    ADULT: 'Adult',
  })

  const persons = {
    [personTypesEnum.CHILD]: childPerson,
    [personTypesEnum.ADULT]: adultPerson,
  }

  const makePerson = (personType) => persons[personType]

  return { makePerson, personTypesEnum }
}

const { makePerson, personTypesEnum } = PersonFactory()
const targetType = personTypesEnum.ADULT // same as 'Adult'

console.log( makePerson(targetType) )
