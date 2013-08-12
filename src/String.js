Array.prototype.myContains = function (value) {
  var arr = this;
  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === value) {
      return true;
    };
  };
  return false;
}

String.prototype.mySubStrings = function () {
  var str = this; 
  var len = str.length; 
  var arr = [];
  for (var i = 0; i < len; i++) { 
    for (var j = i + 1; j < len + 1; j++) { 
      var substring = str.substring(i, j);
      if (!arr.myContains(substring)) {
        arr.push(substring);
      }
    }
  }
  return arr; 
}
