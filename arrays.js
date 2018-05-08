var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(chocolateBars ,element)
{
  chocolateBars.unshift(element)
  return chocolateBars
}

function destructivelyAddElementToBeginningOfArray(chocolateBars ,element)
{
  var newChocolateBar = [element , ...chocolateBars ]
  return newChocolateBar
}