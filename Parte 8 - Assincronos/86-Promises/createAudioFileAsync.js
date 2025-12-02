const successCallback = (result) => {
  console.log(`Audio file at URL: ${result}`);
};

const failureCallback = (error) => {
  console.error(`Error generating audio file: ${error}`);
};

// createAudioFileAsync(audioSettings)
//   .then(successCallback)
//   .catch(failureCallback);

// doSomehting(function (result){
//     doSomethingElse(result, function (newResult){
//         doThirdThing(result, function (finalResult){
//             console.log(`Got the final result: ${finalResult}`)
//         }, failureCallback)
//     }, failureCallback)
// }, failureCallback)

// doSomething()
//   .then(function (result) {
//     return doSomethingElse(result);
//   })
//   .then(function (newResult) {
//     return doThirdThing(newResult);
//   })
//   .then(function (finalResult) {
//     console.log(`Got the final result: ${finalResult}`);
//   })
//   .catch(failureCallback);

// doSomething()
//   .then((result) => doSomethingElse(result))
//   .then((newResult) => doThirdThing(newResult))
//   .then((finalResult) => {
//     console.log(`Got the final result: ${finalResult}`);
//   })
//   .catch(failureCallback);

doSomehting().then((url) => {
    return fetch(url)
}).then((result) => {
    console.log('Result is a Response objetct')
})

const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);

