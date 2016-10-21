exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((a,b)=>{
      return a+b;
    });
  },

  remove: function(arr, item) {
    return arr.filter((arrItem)=>{
      return item !== arrItem; 
    });
  },

  removeWithoutCopy: function(arr, item) {
    for(let i=0; i < arr.length+1; i++){
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;  
      }
    }
    return arr
  },

  append: function(arr, item) {
    arr.push(item);
    return arr
  },

  truncate: function(arr) {
    arr.pop();
    return arr
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr
  },

  curtail: function(arr) {
    arr.shift();
    return arr
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert: function(arr, item, idx) {
    arr.splice(idx,0,item);
    return arr
  },

  count: function(arr, query) {
    return arr.filter((item)=>{
      return item===query
    }).length;
  },

  duplicates: function(arr) {
    const mapped = [],
         repeats = [];

    arr.map((item)=>{
      if (mapped.indexOf(item)<0) {
        mapped.push(item);
      } else if (repeats.indexOf(item)<0) {
        repeats.push(item);
      }
    });

    return repeats
  },

  square: function(arr) {
    return arr.map((item)=>{
      return item*item
    })
  },

  findAllOccurrences: function(arr, target) {
    const newarr=[];
    arr.map((item,idx)=>{
      if (item===target) {
        newarr.push(idx)
      }
    });
    return newarr;
  }
};

