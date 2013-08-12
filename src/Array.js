Array.prototype.myEach = function (funct) {
  var arr = this;
  for (var i = 0; i < arr.length; i++) {
    funct(arr[i]);
  }
  return arr
}

Array.prototype.myMap = function (funct) {
  var arr = this;
  var result = [];

  arr.myEach(function(item) {
    result.push(funct(item));
  }); 
  return result;
}

Array.prototype.inject = function (funct, accum) {
  var arr = this;
  arr.myEach(function (item) {
    accum = (accum) ? funct(accum, item) : item;
  });
  return accum;
}

Array.prototype.myContains = function (value) {
  var arr = this;
  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === value) {
      return true;
    };
  };
  return false;
}

Array.prototype.myUnique = function () {
  var arr = this;
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (!result.myContains(arr[i])) {
      result.push(arr[i]);
    };
  };
  return result;
}

Array.prototype.myZeroSums = function () {
  var arr = this;
  var pairs = [];
  for (var i = 0; i < (arr.length - 1); i++) { 
    for (var j = i + 1; j < (arr.length); j++) { 
      if (arr[i] + arr[j] === 0) {
        pairs.push([i, j]);
      }
    }
  }
  return pairs;
}

Array.prototype.myTranspose = function () {
  var matrix = this;
  var num_rows = matrix.length
  var num_cols = matrix[0].length
  var transposed = [];

  for (var i = 0; i < num_rows; i++) {
    transposed[i] = [];
    for (var j = 0; j < num_cols; j++) {
      transposed[i][j] = matrix[j][i]
    }
  }
  return transposed;
}

Array.prototype.myBubbleSort = function () {
  var arr = this.slice(); // [5, 3, 1]
  var len = arr.length;
  var swapped = true;
  while (swapped) {
    swapped = false;
    for (var i = 0; i < len - 1; i++) { // 0, 1
      if (arr[i] > arr[i + 1]) {
        swapped = true;
        arr[i] = [arr[i + 1], arr[i + 1] = arr[i]][0];
      }
    }
  }
  return arr;
}

