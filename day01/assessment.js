'use strict';

// Exercise 1
function sum(arr) {
	return arr.reduce((a,b)=>{
		return a+b;
	});
}

console.log(sum([1,2,3]));


// Excercise 2
function combine(arr1,arr2) {
	return arr1.concat(arr2);
}

console.log(combine([1,2,3], [4,5,6]));


// Exercise 3
function censor(arr,term){
	var newArr=[];
	arr.forEach(function(item){
		if (item.toLowerCase()!==term.toLowerCase()) {
			newArr.push(item);
		}
	});
	return newArr;
}

console.log(censor(['doctor','lawyer','artist','dipshit'], 'dipshit'))


//Exercise 4
function capVowels(arr){
	var vowels = ['a','e','i','o','u'];

	return arr.map((item)=>{
		var capIt = false;
		vowels.forEach((vowel)=>{
			if (item.charAt(0)===vowel){
				capIt = true;
			}
		});

		if (capIt) {
			return item.charAt(0).toUpperCase() + item.slice(1);
		}
		return item;
	});
}

console.log(capVowels(['quick','out','dog','alphabet','edward']) );