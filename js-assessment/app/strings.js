exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amt) {
    var re = new RegExp('([a-z])(?=\\1{'+amt+'})','gi');
    return str.replace(re, "");
  },

  wordWrap: function(str, cols) {
    let narr = str.split(" ").join('\n');
    // console.log(str)
    return narr
  },

  reverseString: function(str) {
  	let newstr="";
  	for (let i=str.length; i >= 0; i--) {
  		newstr+=str.charAt(i)
  	}
  	return newstr;
  }
};
