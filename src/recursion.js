// recursive factorial
function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(3));

// recursive fibonacci sequence
function fibs(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    var arr = fibs(n - 1);
    var last_idx = arr.length - 1;
    arr.push(arr[last_idx - 1] + arr[last_idx]);
    return arr;
  }
}

console.log(fibs(3));

// recursive range
function range(start, end) {
  if (start > end) {
    return [];
  } else if (start === end) {
    return [end];
  } else {
    var subs = range(start + 1, end);
    subs.unshift(start);
    return subs;
  }
}

console.log(range(1, 5));

// recursive array sum
function arraySum(arr) { // [1, 1, 1]
  if (arr.length === 0) {
    return 0;
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    var first_item = arr.shift();
    arr[0] += first_item;
    return arraySum(arr);
  }
}

console.log(arraySum([1, 2, 3]));

// recursive exponents v1
function exp(base, power) {
  if (power === 0) {
    return 1;
  } else {
    return base * exp(base, power - 1);
  }
}

console.log(exp(5, 3));

// binary search
function bsearch(arr, target) {
  if (arr.length === 0) {
    console.log("no match found");
    return null;
  } else if (arr.length === 1 && arr[0] === target) {
    console.log("final value matches:" + arr);
    return target;
  } else {
    midPoint = parseInt(arr.length / 2);
    if (arr[midPoint] === target) {
      console.log("midpoint matches:" + arr);
      return arr[midPoint]; //bsearch([arr[midPoint]], target);
    } else if (arr[midPoint] > target) {
      var leftHalf = arr.slice(0, midPoint);
      console.log("use left:" + leftHalf);
      return bsearch(leftHalf, target);
    } else {
      var rightHalf = arr.slice(midPoint, arr.length);
      console.log("use right:" + rightHalf);
      return bsearch(rightHalf, target);
    }
  }
}

var arr = [1, 3, 5, 6, 7, 9, 12, 90];
console.log(arr);
console.log(bsearch(arr, 90));

function mergeSort(arr) {
  var length = arr.length,
      mid = parseInt(length / 2),
      left = arr.slice(0, mid),
      right = arr.slice(mid, length);

  if (length <= 1) {
    return arr
  }

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
console.log(a);
console.log(mergeSort(a));
