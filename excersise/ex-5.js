var persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];
function logPerson(person) {
    console.log(" - " + person.name + ", " + person.age + ", " + (person.type === 'admin' ? person.role : person.occupation));
}
function filterPersons(persons, personType, criteria) {
    return persons
        .filter(function (person) { return person.type === personType; })
        .filter(function (person) {
        var criteriaKeys = Object.keys(criteria);
        return criteriaKeys.every(function (fieldName) {
            return person[fieldName] === criteria[fieldName];
        });
    });
}
var usersOfAge23 = filterPersons(persons, 'user', { age: 23 });
var adminsOfAge23 = filterPersons(persons, 'admin', { age: 23 });
console.log('Users of age 23:');
usersOfAge23.forEach(logPerson);
console.log();
console.log('Admins of age 23:');
adminsOfAge23.forEach(logPerson);
