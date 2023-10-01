const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise resolve value");
    }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolve value");
  }, 5000);
});

async function handlePromise() {
    console.log("Hello world");

    const val = await p1;
    console.log("Namaste js");
    console.log(val);

    const val2 = await p2;
    console.log("Namaste js 2");
    console.log(val2);
}

handlePromise();