// var arr = [9.7, 6.4, 3.8, 2.9, 6.8]
// let res = arr.map((result)=>{
//     return Math.round(result);
// });
// console.log(res);
// const sum = res.reduce((total, a) => 
// total + a, 0);
// console.log(sum)

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filter = arr1.filter((number) => number > 5);
console.log(filter); 
console.log(filter[0]);

//first value lt 2
// var lt = num.find((info) => info <= 2);
// console.log("the value is lt 2" + lt);

//odd R even
var odd = [90, 5, 10, 1].map((info) => {
    if (info % 2 == 0 && info != 0)
        console.log("The Number is EVEN");
    else
        console.log("The Number is ODD");
});

//round off
var point = [9.7, 6.4, 3.8, 2.9, 6.8].reduce((info, total) => info + total);
console.log("the roundoff function " + Math.round(point));

//particular value is same or not
var arr = [{
        fname: 'Ramu',
        age: 23,
        id: 1
    },
    {
        fname: 'Alice',
        age: 20,
        id: 2
    },
    {
        fname: 'Jane',
        age: 15,
        id: 3
    }
];
//var x= arr.find(e=>e['fname']==='Alice');
var x = arr.find((emp) => {
    return emp.fname === 'Alice';
});
console.log(x);

//sum of salary
var sal = [{
    name: 'Joe',
    salary: 45000
}, {
    name: 'mickel',
    salary: 50000
}, {
    name: 'ickel',
    salary: 50
}];

function amount(item) {
    return item.salary;
}

function add(prev, nxt) {
    return prev + nxt;
}
var y = sal.map(amount).reduce(add);

console.log("The total salary amount is " + y);

//voter id
var x = [{
    name: 'Joe',
    age: 12
}, {
    name: 'mickel',
    age: 20
}, {
    name: 'ickel',
    age: 30
}];
var res = x.filter((item) => item.age > 18);
console.log(res);

//create class and diplay functions
class animal {
    eat() {
        console.log("man is eating");
    }
    fly() {
        console.log("Bird can fly");
    }
    walk() {
        console.log("Dog can walk");
    }
    run() {
        console.log("Lion can run");
    }
}
var a = new animal();
a.eat();
a.run();
a.walk();
a.fly();    