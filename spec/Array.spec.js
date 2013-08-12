describe("Array", function () {
  // var iteration;
  var arr, cols, rows;

  beforeEach(function () {
    // iteration = new Iteration();
  });

  describe("myEach", function () {
    beforeEach(function () {
      arr = [1, 2, 3, 4, 5];
    });

    it("iterates array, allowing (item * 5) to be pushed into new array", function() {
      result = [];
      arr.myEach(function (item) {
        result.push(item * 5);
      });

      expect(result).toEqual([ 5, 10, 15, 20, 25 ]);
    });
  });

  describe("myMap", function () {
    beforeEach(function () {
      arr = [1, 2, 3, 4, 5];
    });

    it("iterates array, returns new array with (item * 5) applied", function() {
      result = arr.myMap(function (item) {
        return item * 5;
      });

      expect(result).toEqual([ 5, 10, 15, 20, 25 ]);
    });
  });

  describe("myInject", function () {
    beforeEach(function() {
      arr_num = [2, 2, 2];
      arr_str = ['hello ', 'there ', 'sebastian!'];
      sum = function (a, b) {
        return a + b;
      }
    });

    it("takes a sum function, accumulates sum of array items", function() {
      var result = arr_num.inject(sum);
      expect(result).toEqual(6);
    });

    it("takes starting value when summing array items", function() {
      var result = arr_num.inject(sum, 10);
      expect(result).toEqual(16);
    });

    it("concatenates if array items are strings", function() {
      var result = arr_str.inject(sum);
      expect(result).toEqual('hello there sebastian!');
    });

  });

  describe("myBubbleSort", function () {
    beforeEach(function () {
      arr = [5, 8, 3, 9, 7, 4, 1, 6, 2];
    })

    it("sorts an array", function () {
      expect(arr.myBubbleSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });

  describe("myContains", function () {
    beforeEach(function () {
      arr = [1, 3, 5, 11];
    });

    it("returns true when array contains value", function() {
      expect(arr.myContains(5)).toBe(true);
    });

    it("returns false when array does not contain value", function() {
      expect(arr.myContains(125)).toBe(false);
    });
  });

  describe("myUnique", function () {
    beforeEach(function () {
      arr = [1, 3, 3, 7, 5, 3, 11];
    });

    it("returns array with only unique values", function() {
      expect(arr.myUnique()).toEqual([ 1, 3, 7, 5, 11]);
    });
  });

  describe("zeroSums", function () {
    beforeEach(function () {
      arr = [1, 1, 2, 3, 5, -1, 5, -5];
      pairs = [ [ 0, 5 ], [ 1, 5 ], [ 4, 7 ], [ 6, 7 ] ];
    });

    it("returns array of index pairs that sum to 0", function() {
      expect(arr.myZeroSums()).toEqual(pairs);
    });
  });

  describe("myTranspose", function () {
    beforeEach(function () {
      rows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8] 
      ];

      cols = [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
      ];
    });

    it("returns transposed array", function () {
      expect(rows.myTranspose()).toEqual(cols);
    });
  });

});