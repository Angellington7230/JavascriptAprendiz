doSomehting(function (result) {
  doSomethingElse(
    result,
    function (newResult) {
      console.log(`Got the final result: ${finalResult}`);
    },
    failureCallback
  );
}, failureCallback);

const listOfIngredients = [];

doSomething()
  .then((url) => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        listOfIngredients.push(data);
      });
  })
  .then(() => {
    console.log(listOfIngredients);
  });



const logIngredients = async () => {
    const url = await doSomehting();
    const res = await fetch(url);
    const data = await res.json();
    listOfIngredients.push(data);
    console.log(listOfIngredients)
}