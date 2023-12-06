// const data = [47, 33, 41, 37, 46, 43, 39, 36, 35, 42, 40, 39, 45];
const data = [5, 7, 10, 9, 7, 8, 8, 6, 8];
const nData = data.length;

let jangkauan, xmax, xmin, sorts;
sorts = [...data].sort((a, b) => a - b);
xmax = sorts[nData - 1];
xmin = sorts[0];
jangkauan = xmax - xmin;
console.log(`1. Jangkauan : \n ${xmax} - ${xmin} = ${jangkauan} `);

let simpanganRataRata, sumData;
sumData = data.reduce((a, b) => a + b);
simpanganRataRata = (sumData / nData).toFixed(1);
console.log(`2. SimpanganRataRata : \n  x = ${sumData} / ${nData} = ${simpanganRataRata}`);

const reverseMinus = data.map((x) => (x > simpanganRataRata ? x - simpanganRataRata : simpanganRataRata - x));
console.log(reverseMinus.map((e) => e.toFixed(2)).join('+'));
const sumReverseMinus = reverseMinus.reduce((a, b) => a + b);
console.log(sumReverseMinus);
const dividedSumRevBynData = (sumReverseMinus / nData).toFixed(2);
console.log(`\nSR = ${sumReverseMinus} / ${nData} = ${dividedSumRevBynData}`);

const squaredElData = data.map((x) => (x - simpanganRataRata) ** 2);
console.log(squaredElData.map((e) => e.toFixed(2)).join('+'));
const sumSquaredElData = squaredElData.reduce((a, b) => a + b).toFixed(2);
console.log(sumSquaredElData);
const dividedSumSquareBynData = (sumSquaredElData / nData).toFixed(2);
console.log(`3. Ragam : \n ${sumSquaredElData} / ${nData} = ${dividedSumSquareBynData}`);

const akarKuadrat = Math.sqrt(dividedSumSquareBynData).toFixed(2);
console.log(`4. Akar Kuadrat : \n ${dividedSumSquareBynData} = ${akarKuadrat}`);

const jangkau = `1. Jangkauan : \n ${xmax} - ${xmin} = ${jangkauan} `;
const simpangRata = `2. Simpangan Rata-Rata : \n  x = ${sumData} / ${nData} = ${simpanganRataRata} \nSR = ${sumReverseMinus} / ${nData} = ${dividedSumRevBynData}`;
const ragam = `3. Ragam : \n ${sumSquaredElData} / ${nData} = ${dividedSumSquareBynData}`;
const simpangBaku = `4. Simpang Baku : \n ${dividedSumSquareBynData} = ${akarKuadrat}`;

const article1 = document.querySelector('article');
article1.innerHTML = `${jangkau} <br> ${simpangRata} <br> ${ragam} <br> ${simpangBaku}`;
