var people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below
const deletePerson = (person) => {
   
    let newArray = people.filter((element) => element !== person );
    
    return newArray
}
// element !== 'juan' || element !== 'emilio'

//hasta aqui

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
