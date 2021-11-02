const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Do Something Async"), 3000)
      : reject(new Error("Error"));
  });
};

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
};

console.log("before");
doSomething();
console.log("after");

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch (err) {
    console.error(err);
  }
};

console.log("before 2");
anotherFunction();
console.log("after 2");
