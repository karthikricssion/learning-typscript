function logUser(user) {
    var pos = users.indexOf(user) + 1;
    console.log(" - #" + pos + " User: " + user.name + ", " + user.age + ", " + user.occupation);
}
function logAdmin(admin) {
    var pos = admins.indexOf(admin) + 1;
    console.log(" - #" + pos + " Admin: " + admin.name + ", " + admin.age + ", " + admin.role);
}
var admins = [
    {
        type: 'admin',
        name: 'Will Bruces',
        age: 30,
        role: 'Overseer'
    },
    {
        type: 'admin',
        name: 'Steve',
        age: 40,
        role: 'Steve'
    }
];
var users = [
    {
        type: 'user',
        name: 'Moses',
        age: 70,
        occupation: 'Desert guide'
    },
    {
        type: 'user',
        name: 'Superman',
        age: 28,
        occupation: 'Ordinary person'
    }
];
function swap(v1, v2) {
    return [v2, v1];
}
function test1() {
    console.log('test1:');
    var _a = swap(admins[0], users[1]), secondUser = _a[0], firstAdmin = _a[1];
    console.log(swap(admins[0], users[1]));
    console.log(secondUser, firstAdmin);
    logUser(secondUser);
    logAdmin(firstAdmin);
}
function test2() {
    console.log('test2:');
    var _a = swap(users[0], admins[1]), secondAdmin = _a[0], firstUser = _a[1];
    logAdmin(secondAdmin);
    logUser(firstUser);
}
function test3() {
    console.log('test3:');
    var _a = swap(users[0], users[1]), secondUser = _a[0], firstUser = _a[1];
    logUser(secondUser);
    logUser(firstUser);
}
function test4() {
    console.log('test4:');
    var _a = swap(admins[1], admins[0]), firstAdmin = _a[0], secondAdmin = _a[1];
    logAdmin(firstAdmin);
    logAdmin(secondAdmin);
}
function test5() {
    console.log('test5:');
    var _a = swap(123, 'Hello World'), stringValue = _a[0], numericValue = _a[1];
    console.log(" - String: " + stringValue);
    console.log(" - Numeric: " + numericValue);
}
[test1, test2, test3, test4, test5].forEach(function (test) { return test(); });
