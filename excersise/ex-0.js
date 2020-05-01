var users = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Karthikeyan Rajendran',
        age: 28,
        occupation: 'Web Developer'
    }
];
function logPerson(user) {
    console.log(" - " + user.name + ", " + user.age);
}
users.forEach(logPerson);
