const dataInput = document.getElementById('data');
const submitButton = document.querySelector('button');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const data = dataInput.value.split(',').map((x) => parseInt(x));
  dataInput.value = '';
  // const numberOfData = data.length;
  // const sortedData = [...data].sort((a, b) => a - b);
  // const maxVal = sortedData[numberOfData - 1];
  // const minVal = sortedData[0];
  // const range = maxVal - minVal;
  // console.log(`1. Range: ${maxVal} - ${minVal} = ${range}`);
  // const meanDeviation = (sumData / numberOfData).toFixed(1);
  // console.log(`2. Mean Deviation: x = ${sumData} / ${numberOfData} = ${meanDeviation}`);
  // const reverseDeviation = data.map((x) => Math.abs(x - meanDeviation));
  // console.log(reverseDeviation.map((e) => e.toFixed(2)).join('+'));
  // const sumReverseDeviation = reverseDeviation.reduce((a, b) => a + b);
  // const meanReverseDeviation = (sumReverseDeviation / numberOfData).toFixed(2);
  // console.log(` MRD = ${sumReverseDeviation} / ${numberOfData} = ${meanReverseDeviation}`);

  // data = [47, 33, 41, 37, 46, 43, 39, 36, 35, 42, 40, 39, 45];
  //   data = [5, 7, 10, 9, 7, 8, 8, 6, 8];
  const numberOfData = data.length;

  // 1. Range (Jangkauan)
  const sortedData = [...data].sort((a, b) => a - b);
  const maxVal = sortedData[numberOfData - 1];
  const minVal = sortedData[0];
  const range = maxVal - minVal;
  console.log(`1. Range: ${maxVal} - ${minVal} = ${range}`);

  // 2. Mean Deviation (Simpangan Rata-Rata / SR)
  const sumData = data.reduce((a, b) => a + b);
  const meanDeviation = (sumData / numberOfData).toFixed(1);
  console.log(`2. Mean Deviation: x = ${sumData} / ${numberOfData} = ${meanDeviation}`);

  const reverseDeviation = data.map((x) => Math.abs(x - meanDeviation));
  console.log(reverseDeviation.map((e) => e.toFixed(2)).join('+'));
  const sumReverseDeviation = reverseDeviation.reduce((a, b) => a + b);
  const meanReverseDeviation = (sumReverseDeviation / numberOfData).toFixed(2);
  console.log(` MRD = ${sumReverseDeviation} / ${numberOfData} = ${meanReverseDeviation}`);

  // 3. Variance (Ragam)
  const squaredElementData = data.map((x) => Math.pow(x - meanDeviation, 2));
  console.log(squaredElementData.map((e) => e.toFixed(2)).join('+'));
  const sumSquaredElementData = squaredElementData.reduce((a, b) => a + b);
  const meanSquareDeviation = (sumSquaredElementData / numberOfData).toFixed(2);
  console.log(`3. Variance: ${sumSquaredElementData} / ${numberOfData} = ${meanSquareDeviation}`);

  // 4. Standard Deviation (Simpangan Baku)
  const standardDeviation = Math.sqrt(meanSquareDeviation).toFixed(2);
  console.log(`4. Standard Deviation: ${meanSquareDeviation} = ${standardDeviation}`);

  // Inserting results into the article element
  const articleElement = document.getElementById('statisticalResults');
  articleElement.innerHTML = `
            <p>Data = ${data}</p>
            <p>Jumlah Data = ${numberOfData}</p>
            <h4>1. Range</h4>
            <p> ${maxVal} - ${minVal} = ${range}</p>
            <h4>2. Mean Deviation</h4>
            <p> x = ${sumData} / ${numberOfData} = ${meanDeviation}</p>
            <p>MRD</p>
            <p>(${reverseDeviation.map((e) => e.toFixed(2)).join(' + ')}) / ${numberOfData}</p>
            <p> ${sumReverseDeviation} / ${numberOfData} = ${meanReverseDeviation}</p>
            <h4>3. Variance</h4>
            <p>(${squaredElementData.map((e) => e.toFixed(2)).join(' + ')}) / ${numberOfData}</p>
            <p>${sumSquaredElementData} / ${numberOfData} = ${meanSquareDeviation}</p>
            <h4>4. Standard Deviation</h4>
            <p> ✓${meanSquareDeviation} = ${standardDeviation}</p>
            `;
});
