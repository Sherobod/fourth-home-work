let users = ['xondamir', 'Alex', 'Barbara', 'mirko', 'umarjon', 'Бобур', 'Амина', 'ansorjon', 'muxammadaziz', 'sherobod', 'daler']

// найти самое длинное и короткое имя
let sorted = users.toSorted((a,b) => a.length - b.length)
min = sorted[0]
max = sorted[sorted.length - 1]
console.log(min);
console.log(max);


// найти и показать четные имена
for (let i = 0; i < users.length; i++) {
    if (i % 2 === 0) {
        console.log(i,users[i]);
    }
}





let cars = [3000, 7000, 11000, 9000, 16000, 17000, 22000, 30000, 40000, 100000];

let from = parseInt(prompt("Введите сумму от"), 10);
let up = parseInt(prompt("Введите сумму до"), 10);

if (isNaN(from) || isNaN(up)) {
    alert("Пожалуйста, введите действительные числа.");
} else {
    let modelsInRange = [];
    for (let price of cars) {
        if (price >= from && price <= up) {
            modelsInRange.push(price);
        }
    }
    if (modelsInRange.length > 0) {
        alert(`Модели автомобилей в диапазоне от ${from} до ${up}: ${modelsInRange.join(", ")}`);
    } else {
        alert(`Sorry!`);
    }
}
