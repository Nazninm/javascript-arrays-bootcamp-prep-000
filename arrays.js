var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(testArray ,element)
{
  testArray.unshift(element)
  return testArray
}

function destructivelyAddElementToBeginningOfArray(testArray ,element)
{
  var newtestArray = [element , ...testArray ]
  return newtestArray
}


function accessElementInArray(testArray, index)
{
  return testArray[index]
}

function destructivelyRemoveElementFromBeginningOfArray(testArray){
  testArray.shift()
  return testArray
}