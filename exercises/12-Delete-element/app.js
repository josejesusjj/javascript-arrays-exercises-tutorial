var people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below
let deletePerson = people.filter((element) => element === 'd' || element === 'juan' || element === 'emilio' || element === 'daniella' || element === 'juan' );
console.log(deletePerson);
//hasta aqui

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
