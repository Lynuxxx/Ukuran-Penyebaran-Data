const dataInput = document.getElementById('data');
const submitButton = document.querySelector('button');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const data = dataInput.value.split(',').map((x) => parseInt(x));
  dataInput.value = '';
  const numberOfData = data.length;

  // 1. Range (Jangkauan)
  const sortedData = [...data].sort((a, b) => a - b);
  const maxVal = sortedData[numberOfData - 1];
  const minVal = sortedData[0];
  const range = maxVal - minVal;
  console.log(`1. Jangkauan: ${maxVal} - ${minVal} = ${range}`);

  // 2. Mean Deviation (Simpangan Rata-Rata / SR)
  const sumData = data.reduce((a, b) => a + b);
  const meanDeviation = (sumData / numberOfData).toFixed(1);
  console.log(`2. Simpangan Rata-Rata: x = ${sumData} / ${numberOfData} = ${meanDeviation}`);

  const reverseDeviation = data.map((x) => Math.abs(x - meanDeviation));
  console.log(reverseDeviation.map((e) => e.toFixed(2)).join('+'));
  const sumReverseDeviation = reverseDeviation.reduce((a, b) => a + b);
  const meanReverseDeviation = (sumReverseDeviation / numberOfData).toFixed(2);
  console.log(` SR = ${sumReverseDeviation} / ${numberOfData} = ${meanReverseDeviation}`);

  // 3. Variance (Ragam)
  const squaredElementData = data.map((x) => Math.pow(x - meanDeviation, 2));
  console.log(squaredElementData.map((e) => e.toFixed(2)).join('+'));
  const sumSquaredElementData = squaredElementData.reduce((a, b) => a + b);
  const meanSquareDeviation = (sumSquaredElementData / numberOfData).toFixed(2);
  console.log(`3. Ragam: S² = ${sumSquaredElementData} / ${numberOfData} = ${meanSquareDeviation}`);

  // 4. Standard Deviation (Simpangan Baku)
  const standardDeviation = Math.sqrt(meanSquareDeviation).toFixed(2);
  console.log(`4. Simpangan Baku: s = ${meanSquareDeviation} = ${standardDeviation}`);

  // Inserting results into the article element
  const articleElement = document.getElementById('statisticalResults');
  articleElement.innerHTML = `
            <p>Data = ${data}</p>
            <p>Jumlah Data = ${numberOfData}</p>
            <h4>1. Jangkauan</h4>
            <p> ${maxVal} - ${minVal} = ${range}</p>
            <h4>2. Simpangan Rata-Rata/h4>
            <p> x = ${sumData} / ${numberOfData} = ${meanDeviation}</p>
            <p>SR</p>
            <p>(${reverseDeviation.map((e) => e.toFixed(2)).join(' + ')}) / ${numberOfData}</p>
            <p> ${sumReverseDeviation} / ${numberOfData} = ${meanReverseDeviation}</p>
            <h4>3. Ragam </h4>
            <p>S² = (${squaredElementData.map((e) => e.toFixed(2)).join(' + ')}) / ${numberOfData}</p>
            <p>${sumSquaredElementData} / ${numberOfData} = ${meanSquareDeviation}</p>
            <h4>4. Simpangan Baku</h4>
            <p>s = ✓${meanSquareDeviation} = ${standardDeviation}</p>
            `;
});
