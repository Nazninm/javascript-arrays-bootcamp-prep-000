var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(testArray ,element)
{
  testArray=testArray.unshift(element)
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

function removeElementFromBeginningOfArray(testArray)
{
   var newtestArray = testArray.slice(1)
  return newtestArray
}

function destructivelyRemoveElementFromEndOfArray(testArray)
{
  testArray.pop()
  return testArray
}

function removeElementFromEndOfArray(testArray)
{
  var newtestArray = testArray.slice(0,testArray.length-1)
  return newtestArray
}