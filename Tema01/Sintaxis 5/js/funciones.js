let a = [2, 5, "pepe", ['Lucia', 24, [5, 9]]];

console.log(a);

console.log(a[3][2].length);

a.push('Santiago');
console.log(a);

a.unshift('Daniel');
console.log(a);

a[4][2].push(0);
console.log(a);

const eliminado1= a.pop();
a.pop();
a.push(eliminado1);
console.log(a);