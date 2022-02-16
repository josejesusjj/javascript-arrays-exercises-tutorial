var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

let type = [];
for(let i=0; i<mix.length; i++){
    let item = mix[i];
    type.push(typeof item)
}

console.log(type)