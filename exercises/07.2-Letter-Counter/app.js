let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
let noSpace = par.replace(/\s/g,"")
let lower = noSpace.toLowerCase()
let array = lower.split("")
for(let i = 0; i < array.length; i++){
    const letter = array[i]
    if(counts[letter] == undefined) counts[letter] = 1;
    else counts[letter] = counts[letter] + 1;
}
console.log(counts);