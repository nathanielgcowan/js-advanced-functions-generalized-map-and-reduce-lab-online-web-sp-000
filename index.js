// Add your functions here
// expect a sourarrat an a function. all the test will pass an array and a block.. remember, map returns a new Array.

function map(sourceArray, callBack) {
  let array = []

  for (let i = 0; i < sourceArray.length; i++) {
    let object = sourceArray[i]
    array.push(callBack(object))
  }
  return array;
}

// should expect a source array and optionaly a starting bale. all the test will pass an array an (sometimes) a starting point.
function reduce(sourceArray, callBack) {
    let array = []

    return array;
}