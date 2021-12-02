var arr = [9.7, 6.4, 3.8, 2.9, 6.8]
let res = arr.map((result)=>{
    return Math.round(result);
});
console.log(res);
const sum = res.reduce((total, a) => 
total + a, 0);
console.log(sum)

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filter = arr1.filter((number) => number > 5);
console.log(filter); 
console.log(filter[0]);