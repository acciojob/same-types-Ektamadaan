function isSameType(value1, value2) {
  //your js code her
	if(typeof(value1)=== typeof(value2))
		return true ;
		else if(Number.isNaN(value1) == true || Number.isNaN(value2) == true )
		return false ;
		else
		return false ;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
