const arr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '/', '-', '\\', '|', '/', '-', '\\'];

let count = 100;

for (let i = 0; i < arr.length; i++) {
  count += 300;
  setTimeout(() => {
    process.stdout.write(`\r${arr[i]}   `);
  }, count);
}

