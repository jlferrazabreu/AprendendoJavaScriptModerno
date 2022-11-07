const a1 = [1,2,3];
const a2 = [4,5,6];
// metodo concat
a3 = a1.concat('Jorge',a2,[7,8,9]);
// ...spread operator
a4 = [...a1,'Jorge',...a2,...[7,8,9]];
console.log(a3);
console.log(a4);