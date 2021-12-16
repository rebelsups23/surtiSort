arr = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 1000));

function swap(a, b) {
  t = arr[a];
  arr[a] = arr[b];

  arr[b] = t;
}

const surtiSort = arr => {
  let n = arr.length;
  const m = parseInt(n / 2);
  for (let i = 0; i < m; i++) {
    if (arr[i] > arr[n - 1]) {
      swap(i, n - 1);
    }
    let min = i;
    let max = n - 1;

    for (let j = i + 1; j < n - 1; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
      if (arr[max] < arr[j]) {
        max = j;
      }
    }
    if (min !== i) {
      swap(i, min);
    }
    if (max !== n - 1) {
      swap(n - 1, max);
    }

    n--;
  }
  return arr;
};

console.time("SR");
arr2 = surtiSort(arr);
console.timeEnd("SR");
