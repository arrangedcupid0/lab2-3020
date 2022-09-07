function fib(num)
{
	var returnArray = [];
	fibRecursion(num, returnArray);
	return returnArray;
}

function fibRecursion(num, returnArray)
{
	if(num == 0)
	{
		returnArray.push(0);
		return;
	} else if (num == 1){
		fibRecursion(num - 1, returnArray);
		returnArray.push(1);
		return;
	} else {
		fibRecursion(num - 1, returnArray);
		returnArray.push((returnArray[num - 1] + returnArray[num - 2]));
		return;
	}
}

	var example4 = [0,1,1,2,3];
	var example7 = [0,1,1,2,3,5,8,13];
	var example1 = [0,1];
	var example0 = [0];
	var example12 = [0,1,1,2,3,5,8,13,21,34,55,89,144];
	var example19 = [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181];


function testFib(example, num)
{
	var works = true;
	console.log("Expected result: " + example);
	var tmp = fib(num);
	console.log("Actual result: " + tmp);
	for(var i = 0; i < example.length; i++)
	{
		if(example[i] != tmp[i])
		{
			works = false;
		}
	}
	console.log("Print true if it's equivalent, false if it isn't.");
	console.log(works);

}

testFib(example4, 4);
testFib(example7, 7);
testFib(example1, 1);
testFib(example0, 0);
testFib(example12, 12);
testFib(example19, 19);
