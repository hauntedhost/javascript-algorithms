describe("String", function () {

  describe("mySubStrings", function () {

    it("returns array of substrings for simple string", function () {
      str = 'cat';
      expected = [ 'c', 'ca', 'cat', 'a', 'at', 't' ];

      substrings = str.mySubStrings();
      expect(substrings).toEqual(expected);
    });

    it("returns only unique substrings when dups are possible", function () {
      str = 'heehee';
      expected = [ 'h',
        'he',
        'hee',
        'heeh',
        'heehe',
        'heehee',
        'e',
        'ee',
        'eeh',
        'eehe',
        'eehee',
        'eh',
        'ehe',
        'ehee' ];

      substrings = str.mySubStrings();
      expect(substrings).toEqual(expected);
    })
  });

});