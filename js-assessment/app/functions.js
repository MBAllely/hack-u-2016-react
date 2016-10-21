exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return(fn(...arr))
  },

  speak: function(fn, obj) {
    return fn.bind(obj)(obj);
  },

  functionFunction: function(str) {
    return (str2)=>{return str + ', ' + str2}
  },

  makeClosures: function(arr, fn) {
    return arr.map((item)=>{
      return ()=>{return fn(item)}
    })
  },

  partial: function(fn, str1, str2) {
    return ()=>{
      return fn(str1,str2,'!!!')
    }   
  },

  useArguments: function(...args) {
    return args.reduce((prev,sum)=>{
      return prev+sum
    })
  },

  callIt: function(fn, ...args) {
    return fn(...args);
  },

  partialUsingArguments: function(fn, ...args) {
    return function(...newArgs) {
      let combinedArgs = args.concat(newArgs);
      return fn(...combinedArgs);
    };
  },

  curryIt: function(fn,...a) {
    // return (...a)=>{
    //   return (...b)=>{
    //     return fn
    //   }
    // }
  }
};
