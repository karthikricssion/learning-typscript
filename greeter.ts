function greeter(person : string) {
    return 'Hello' + person;
}

let user = 'karthik'
document.body.textContent = greeter(user);

/*
    To check the errors
    - Try changing the user value to any array
    - Remove passing the 'user' argument to greeter call funtion
*/