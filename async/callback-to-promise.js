'use strict';

// JavaScript is synchronous (정해진 순서에 맞게 진행)
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
function prontImmediately(print) {
    print();
}

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration
console.log('1'); // 동기
setTimeout(() => console.log('2'), 1000); // 비동기
console.log('3'); // 동기
prontImmediately(() => console.log('hello')); // 동기
printWithDelay(() => console.log('async callback'), 2000); // 비동기

// Callback Hell example
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    onSuccess(id);
                } else {
                    onError(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({ name: 'ellie', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert('Hello ${userWithRole.name}, you have a ${userWithRole.role} role'))
    .catch(console.log);

userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert('Hello ${userWithRole.name}, you have a ${userWithRole.role} role');
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);
