import userFactory from './Factory';

var alex = new userFactory('Alex Banks', 100);
var eve = new userFactory('Eve Porcello', 100, 'employee','This and That');

console.log( alex.toString() );
console.log( eve.toString() );