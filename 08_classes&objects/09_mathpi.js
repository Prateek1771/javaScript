const pi = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(pi);

// We cannot change the value of pi because it is so hard coded into node, js.
// there is a chance if we chane the values if they are hard coded, by taking the flags in the framework from which they are created
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }

// console.log(Math.PI);

const player = {
    name: 'player1',
    userName: 'Stinger',
    playerId: '#24891',

    skins: function () {
        console.log('2 skins');
    }
}

console.log(player);
// console.log(Object.getOwnPropertyDescriptor(player,'name'));

Object.defineProperty(player, 'name', {
    enumerable: false,
    writable: false
})

// console.log(Object.getOwnPropertyDescriptor(player,'name'));

for (const [key, value] of Object.entries(player)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);    
    }
}