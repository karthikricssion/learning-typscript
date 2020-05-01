interface User {
    name: String,
    age: Number,
    occupation: String
}

const users: User[] = [
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

function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

users.forEach(logPerson);