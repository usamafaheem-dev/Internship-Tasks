const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
];


products.forEach((item) => {
    console.log(item.title)
})
const number = [1, 2, 3]
let sum = 0;

number.map((item) => {
    sum += item
    return sum;
})
console.log(sum)
